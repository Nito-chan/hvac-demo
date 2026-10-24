import { LeadForm } from "@/components/lead/LeadForm";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import type { NicheConfig, RegionId } from "@/config/types";
import type { LeadFormValues } from "@/lib/lead-schema";
import { withRegion } from "@/lib/region";

const STEPS = [
  {
    title: "Your request is checked",
    copy: "The form validates the details on the server and filters obvious spam.",
  },
  {
    title: "The demo workflow routes it",
    copy: "A sample automation sends the lead to an inbox and a tracking sheet.",
  },
  {
    title: "A follow-up is prepared",
    copy: "The demo shows how a real team could confirm the visit and ask for feedback.",
  },
];

export function LeadFormSection({
  config,
  region,
  defaultService,
  defaultLocation,
  formType = "quote",
  title,
  description,
  eyebrow = "Request a visit",
  sectionId = "request",
  tone = "muted",
  className,
}: {
  config: NicheConfig;
  region: RegionId;
  defaultService?: string;
  defaultLocation?: string;
  formType?: LeadFormValues["formType"];
  title?: string;
  description?: string;
  eyebrow?: string;
  sectionId?: string;
  tone?: "default" | "muted";
  className?: string;
}) {
  const headingId = `${sectionId}-heading`;
  const whatsapp = config.contact.whatsappHref;

  return (
    <Section
      id={sectionId}
      tone={tone}
      labelledBy={headingId}
      className={className}
    >
      <div className="max-w-2xl">
        <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2
          id={headingId}
          className="mt-4 font-display text-3xl leading-[1.02] text-ink sm:text-4xl lg:text-[2.8rem]"
        >
          {title ?? "A clear request. A calmer next step."}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {description ??
            `Tell ${config.business.shortName} what is happening. The demo form is validated, then routed through a sample lead workflow so you can see the whole journey.`}
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12">
        <LeadForm
          niche={config.niche}
          region={region}
          services={config.services.map((service) => service.name)}
          defaultService={defaultService}
          defaultLocation={defaultLocation}
          formType={formType}
          phoneDisplay={config.contact.phoneDisplay}
          phoneHref={config.contact.phoneHref}
          privacyHref={withRegion("/privacy", region)}
          formNote={config.demo.formNote}
          emergencyNote={config.emergencyNote}
          title={
            formType === "contact"
              ? "Send a demo message"
              : "Request a demo visit"
          }
          description="Fields marked * are required. Email is optional; a phone number helps the demo team reply."
        />

        <div>
          <div className="rounded-panel border border-white/10 bg-ink p-6 text-surface shadow-lift">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
              Prefer to talk?
            </p>
            <a
              href={config.contact.phoneHref}
              className="mt-2 inline-flex items-center gap-2 font-display text-2xl leading-tight text-surface transition hover:text-accent"
            >
              <Icon name="phone" className="h-5 w-5 text-accent" />
              {config.contact.phoneDisplay}
            </a>
            <p className="mt-2 text-xs leading-relaxed text-surface/55">
              {config.contact.hours}
              {config.contact.emergencyHours ? (
                <>
                  <br />
                  {config.contact.emergencyHours}
                </>
              ) : null}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {whatsapp ? (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 px-4 text-xs font-bold text-surface transition hover:bg-white/10"
                >
                  <Icon name="message" className="h-3.5 w-3.5 text-accent" />
                  WhatsApp
                </a>
              ) : null}
              <a
                href={`mailto:${config.contact.email}`}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 px-4 text-xs font-bold text-surface transition hover:bg-white/10"
              >
                <Icon name="mail" className="h-3.5 w-3.5 text-accent" />
                Email
              </a>
              {config.contact.mapHref ? (
                <a
                  href={config.contact.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 px-4 text-xs font-bold text-surface transition hover:bg-white/10"
                >
                  <Icon name="mapPin" className="h-3.5 w-3.5 text-accent" />
                  {config.contact.city}
                </a>
              ) : null}
            </div>
          </div>

          <div className="mt-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
              What happens next
            </p>
            <ol className="mt-3 space-y-3">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand/20 bg-brand-soft text-[10px] font-bold text-brand-strong">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink">
                      {step.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                      {step.copy}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-7 flex items-start gap-2.5 rounded-xl border border-accent/35 bg-accent-soft p-4">
            <Icon
              name="alert"
              className="mt-0.5 h-4 w-4 shrink-0 text-accent"
            />
            <p className="text-xs leading-relaxed text-ink">
              <span className="font-bold">Urgent safety issue?</span>{" "}
              {config.emergencyNote}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
