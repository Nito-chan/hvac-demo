import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SiteShell } from "@/components/site/SiteShell";
import { getSiteConfig } from "@/config/active";
import { regionFromSearchParams, type PageSearchParams } from "@/lib/search-params";
import { withRegion } from "@/lib/region";

export async function generateMetadata(): Promise<Metadata> {
  const config = getSiteConfig("us");
  return {
    title: "Services",
    description: `Explore the sample ${config.nicheLabel.toLowerCase()} services offered by ${config.business.name}, including scope, pricing notes and demo request links.`,
  };
}

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const region = await regionFromSearchParams(searchParams);
  const config = getSiteConfig(region);

  return (
    <SiteShell region={region} activePath="/services">
      <PageHero
        region={region}
        breadcrumbs={[{ label: "Services" }]}
        eyebrow="Services"
        title={`${config.nicheLabel} services, explained clearly`}
        description={`From the first diagnosis to the follow-up, ${config.business.shortName} is built around a simple idea: you should know what is happening, what it costs and what comes next.`}
        actions={
          <>
            <ButtonLink
              href={withRegion("/contact", region)}
              variant="brand"
              iconRight="arrowRight"
            >
              Request a visit
            </ButtonLink>
            <ButtonLink
              href={withRegion("/pricing", region)}
              variant="outline"
            >
              Compare pricing
            </ButtonLink>
          </>
        }
      />

      <Section>
        <SectionHeading
          eyebrow="Choose a starting point"
          title="The full demo service menu"
          description="Every card opens a detailed page with scope, sample pricing notes and a request form. Services marked for one region only appear in that region's version."
          action={
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
              {config.services.length} sample services
            </span>
          }
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {config.services.map((service) => (
            <ServiceCard key={service.slug} service={service} region={region} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
          <SectionHeading
            eyebrow="Not sure where to start?"
            title="Describe the symptom, not the repair"
            description="You do not need to diagnose the problem before contacting a service business. The demo form asks what is happening and lets the team work out the right next step."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: "phone" as const,
                title: "Urgent or unsafe?",
                copy: `Call the demo line on ${config.contact.phoneDisplay}. For gas, fire, sparks or flooding, contact local emergency services first.`,
              },
              {
                icon: "message" as const,
                title: "Prefer to write?",
                copy: "Send a request with the property type, access notes and the best time to visit. Photos can help a real team prepare.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-card border border-line bg-surface p-5 shadow-card"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {item.icon === "phone" ? (
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                    ) : (
                      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
                    )}
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        config={config}
        region={region}
        title="Not sure which service fits?"
        description="Send the symptoms and the demo team will show how a real intake conversation could narrow it down."
        primaryLabel="Describe the problem"
      />
    </SiteShell>
  );
}
