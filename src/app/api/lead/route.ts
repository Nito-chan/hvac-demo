import { NextResponse } from "next/server";
import { getActiveNiche, getSiteConfig } from "@/config/active";
import { buildLeadPayload } from "@/lib/lead-payload";
import { leadFormSchema } from "@/lib/lead-schema";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(body: unknown, status = 200, headers?: HeadersInit) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  const limit = checkRateLimit(ip);

  if (!limit.allowed) {
    return json(
      {
        ok: false,
        message:
          "Too many demo requests from this connection. Please wait a few minutes or call the demo line.",
      },
      429,
      { "Retry-After": String(limit.retryAfterSeconds) },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: "Invalid request body." }, 400);
  }

  const parsed = leadFormSchema.safeParse(body);
  if (!parsed.success) {
    return json(
      {
        ok: false,
        message: "Please check the highlighted fields and try again.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      422,
    );
  }

  const values = parsed.data;

  // Honeypot: pretend success, never forward or log the submission.
  if (values.company_website && values.company_website.trim().length > 0) {
    return json({ ok: true, demo: true, leadId: "filtered" });
  }

  if (!values.startedAt || Date.now() - values.startedAt < 3000) {
    return json(
      {
        ok: false,
        message:
          "Please take a moment to complete the form, then try again.",
      },
      422,
    );
  }

  const activeNiche = getActiveNiche();
  if (values.niche !== activeNiche) {
    return json(
      {
        ok: false,
        message: "This demo is not configured for that service category.",
      },
      422,
    );
  }

  const config = getSiteConfig(values.region);
  const payload = buildLeadPayload({ values, config });

  const webhookUrl = process.env.MAKE_WEBHOOK_URL?.trim();
  const webhookKey = process.env.DEMO_WEBHOOK_KEY?.trim();
  const demoMode =
    process.env.DEMO_MODE !== "live" || !webhookUrl || !webhookKey;

  if (demoMode) {
    console.info(`[lead] demo mode accepted ${payload.lead_id}`);
    return json({ ok: true, demo: true, leadId: payload.lead_id });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-demo-key": webhookKey,
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `[lead] Make webhook returned ${response.status} for ${payload.lead_id}`,
      );
      return json(
        {
          ok: false,
          message:
            "We could not send your request right now. Please call the demo line instead.",
        },
        502,
      );
    }
  } catch (error) {
    console.error(
      `[lead] Make webhook failed for ${payload.lead_id}:`,
      error instanceof Error ? error.message : "unknown error",
    );
    return json(
      {
        ok: false,
        message:
          "We could not send your request right now. Please call the demo line instead.",
      },
      502,
    );
  }

  return json({ ok: true, demo: false, leadId: payload.lead_id });
}
