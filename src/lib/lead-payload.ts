import { randomUUID } from "node:crypto";
import type { NicheConfig } from "@/config/types";
import type { LeadFormValues, LeadPayload } from "./lead-schema";
import { absoluteUrl } from "./utils";

export function buildLeadPayload({
  values,
  config,
}: {
  values: LeadFormValues;
  config: NicheConfig;
}): LeadPayload {
  const now = new Date().toISOString();
  const sourcePage =
    values.page && values.page.startsWith("/") ? values.page : "/";
  const leadId = `HS-${Date.now().toString(36).toUpperCase()}-${randomUUID()
    .slice(0, 8)
    .toUpperCase()}`;

  return {
    lead_id: leadId,
    submitted_at: now,
    received_at: now,
    site: config.niche,
    niche: config.niche,
    region: values.region === "in" ? "IN" : "US",
    business_name: config.business.name,
    form_type: values.formType,
    urgency: values.urgency,
    name: values.name,
    phone: values.phone,
    email: values.email ?? "",
    location: values.location,
    service: values.service,
    message: values.message ?? "",
    preferred_time: values.preferredTime,
    consent: values.consent,
    company_website: values.company_website ?? "",
    page_url: absoluteUrl(sourcePage),
    source_page: sourcePage,
    utm_source: values.utm_source ?? "",
    utm_medium: values.utm_medium ?? "",
    utm_campaign: values.utm_campaign ?? "",
    status: "New",
    owner_notified_at: "",
    autoreply_sent_at: "",
    followup_sent_at: "",
    review_link: "",
    review_requested_at: "",
    notes: "Website demo lead",
  };
}
