import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SiteShell } from "@/components/site/SiteShell";
import { getSiteConfig } from "@/config/active";
import { parseRegion, withRegion } from "@/lib/region";
import type { PageSearchParams } from "@/lib/search-params";

export const metadata: Metadata = {
  title: "Request received",
  description:
    "The demo request was received. This is a sample workflow, not a real booking.",
};

function firstValue(value: string | string[] | undefined): string {
  return Array.isArray(value) ? (value[0] ?? "") : (value ?? "");
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const params = await searchParams;
  const region = parseRegion(params.region);
  const config = getSiteConfig(region);
  const demo = firstValue(params.demo) === "1";
  const rawRef = firstValue(params.ref);
  const reference = /^[A-Za-z0-9-]{1,40}$/.test(rawRef) ? rawRef : "";

  return (
    <SiteShell region={region} activePath="/thank-you">
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <div className="rounded-panel border border-line bg-surface p-6 text-center shadow-lift sm:p-10">
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand">
              <Icon name="check" className="h-7 w-7" />
            </span>
            <Badge tone="accent" className="mt-5">
              {demo ? "Demo mode" : "Request received"}
            </Badge>
            <h1 className="mt-4 font-display text-4xl leading-[0.98] text-ink sm:text-5xl">
              Thank you. The demo has your request.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {demo
                ? "The form passed validation, spam checks and the server route. Because this deployment is in demo mode, nothing was sent to a live automation."
                : "The form passed validation and was sent to the demo automation. This is still a sample business, so no real dispatch or booking exists."}
            </p>

            {reference ? (
              <div className="mx-auto mt-6 max-w-sm rounded-xl border border-line bg-surface-2 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                  Demo reference
                </p>
                <p className="mt-1 font-mono text-sm font-semibold text-ink">
                  {reference}
                </p>
                <p className="mt-1 text-[10px] leading-relaxed text-muted">
                  Keep this if you are testing the workflow. It is not a real
                  booking number.
                </p>
              </div>
            ) : null}

            <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
              {[
                {
                  title: "What would happen next",
                  copy: "An office would confirm access and a realistic arrival window.",
                },
                {
                  title: "What the demo shows",
                  copy: "Validation, spam filtering, routing and a follow-up template.",
                },
                {
                  title: "What is not real",
                  copy: "The business, the visit, the price and the phone number.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-line bg-surface-2 p-4"
                >
                  <p className="text-xs font-bold text-ink">{item.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink
                href={withRegion("/", region)}
                variant="brand"
                iconLeft="home"
              >
                Back to the demo
              </ButtonLink>
              <ButtonLink
                href={config.contact.phoneHref}
                variant="outline"
                iconLeft="phone"
              >
                {config.contact.phoneDisplay}
              </ButtonLink>
            </div>

            <p className="mt-6 border-t border-line pt-5 text-[11px] leading-relaxed text-muted">
              {config.demo.disclaimer}
            </p>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
