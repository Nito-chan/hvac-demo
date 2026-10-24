import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeadFormSection } from "@/components/lead/LeadFormSection";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqList } from "@/components/ui/FaqList";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SiteShell } from "@/components/site/SiteShell";
import { getSiteConfig } from "@/config/active";
import { regionFromSearchParams, type PageSearchParams } from "@/lib/search-params";
import { withRegion } from "@/lib/region";

interface AreaPageProps {
  params: Promise<{ slug: string }>;
  searchParams: PageSearchParams;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = getSiteConfig("us");
  const area = config.areas.find((item) => item.slug === slug);

  if (!area) {
    return { title: "Service area not found" };
  }

  return {
    title: `${area.name} service area`,
    description: area.description,
  };
}

export default async function AreaDetailPage({
  params,
  searchParams,
}: AreaPageProps) {
  const [{ slug }, region] = await Promise.all([
    params,
    regionFromSearchParams(searchParams),
  ]);
  const config = getSiteConfig(region);
  const area = config.areas.find((item) => item.slug === slug);

  if (!area) {
    notFound();
  }

  const services = config.services.slice(0, 3);
  const faqs = config.faqs.slice(0, 4);

  return (
    <SiteShell region={region} activePath={`/areas/${area.slug}`}>
      <PageHero
        region={region}
        breadcrumbs={[
          { label: "Service areas", href: "/areas" },
          { label: area.name },
        ]}
        eyebrow={`${area.state} · ${config.regionLabel}`}
        title={`${config.nicheLabel} in ${area.name}`}
        description={area.description}
        actions={
          <>
            <ButtonLink href="#request" variant="brand" iconRight="arrowRight">
              Request a visit
            </ButtonLink>
            <ButtonLink
              href={config.contact.phoneHref}
              variant="outline"
              iconLeft="phone"
            >
              Call the demo line
            </ButtonLink>
          </>
        }
        aside={
          <div className="rounded-panel border border-line bg-surface p-6 shadow-lift sm:p-7">
            <Badge tone="brand">Coverage snapshot</Badge>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                  Neighbourhoods
                </dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {area.neighborhoods.map((neighborhood) => (
                    <span
                      key={neighborhood}
                      className="rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[10px] font-semibold text-ink-soft"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                  Sample ZIP / PIN codes
                </dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {area.postalCodes.map((code) => (
                    <span
                      key={code}
                      className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[10px] font-semibold text-ink-soft"
                    >
                      {code}
                    </span>
                  ))}
                </dd>
              </div>
              <div className="border-t border-line pt-4">
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                  Typical hours
                </dt>
                <dd className="mt-1.5 text-muted">{config.contact.hours}</dd>
              </div>
            </dl>
            <p className="mt-5 rounded-xl border border-accent/30 bg-accent-soft p-3 text-[11px] leading-relaxed text-ink">
              {config.emergencyNote}
            </p>
          </div>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Local context"
              title={`What a visit in ${area.name} should account for`}
              description={area.description}
            />
            <ul className="mt-6 space-y-3">
              {[
                `Access and parking around ${area.neighborhoods[0]} and nearby streets.`,
                `The housing mix across ${area.name} changes what a typical visit looks like.`,
                `Postal coverage is a sample list, not a guarantee of service.`,
                "Travel, parts and any after-hours charge should be confirmed before work.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-panel border border-line bg-surface-2 p-6 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
              At a glance
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-surface p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                  State / region
                </p>
                <p className="mt-1 font-display text-lg text-ink">{area.state}</p>
              </div>
              <div className="rounded-xl border border-line bg-surface p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                  Sample codes
                </p>
                <p className="mt-1 font-display text-lg text-ink">
                  {area.postalCodes.length}
                </p>
              </div>
              <div className="rounded-xl border border-line bg-surface p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                  Neighbourhoods
                </p>
                <p className="mt-1 font-display text-lg text-ink">
                  {area.neighborhoods.length}
                </p>
              </div>
              <div className="rounded-xl border border-line bg-surface p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                  Office
                </p>
                <p className="mt-1 font-display text-lg text-ink">
                  {config.contact.city}
                </p>
              </div>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted">
              These numbers describe the demo content only. They are not
              performance claims or proof of local coverage.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Popular here"
          title={`Services requested around ${area.name}`}
          action={
            <ButtonLink
              href={withRegion("/services", region)}
              variant="outline"
              size="sm"
              iconRight="arrowRight"
            >
              All services
            </ButtonLink>
          }
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} region={region} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <SectionHeading
            eyebrow="Local questions"
            title="Before booking in this area"
            description="General demo answers. A real business should confirm local travel, access and timing directly."
          />
          <FaqList items={faqs} />
        </div>
      </Section>

      <LeadFormSection
        config={config}
        region={region}
        defaultLocation={area.name}
        formType="quote"
        tone="muted"
        title={`Book a demo visit in ${area.name}`}
        description={`The location is prefilled for this demo. Send the request to see how a lead from ${area.name} would move through the sample workflow.`}
      />
    </SiteShell>
  );
}
