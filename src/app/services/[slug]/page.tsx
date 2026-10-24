import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadFormSection } from "@/components/lead/LeadFormSection";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqList } from "@/components/ui/FaqList";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SiteShell } from "@/components/site/SiteShell";
import { getSiteConfig } from "@/config/active";
import type { Step } from "@/config/types";
import { withRegion } from "@/lib/region";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { regionFromSearchParams, type PageSearchParams } from "@/lib/search-params";

const PROCESS: Step[] = [
  {
    title: "Describe the issue",
    description:
      "The demo form captures the symptom, location and urgency so the first conversation can be useful.",
  },
  {
    title: "Confirm the visit",
    description:
      "A real office would confirm access, parking, pets and the earliest realistic arrival window.",
  },
  {
    title: "Diagnose and quote",
    description:
      "The fault is shown and explained, then the scope and price are confirmed before chargeable work.",
  },
  {
    title: "Test and follow up",
    description:
      "The work is tested, the area is left tidy and a follow-up checks that the fix held.",
  },
];

interface ServicePageProps {
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
  const service = config.services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.name,
    description: service.short,
  };
}

export default async function ServiceDetailPage({
  params,
  searchParams,
}: ServicePageProps) {
  const [{ slug }, region] = await Promise.all([
    params,
    regionFromSearchParams(searchParams),
  ]);
  const config = getSiteConfig(region);
  const service = config.services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const related = config.services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);
  const faqs = [...service.faqs, ...config.faqs.slice(0, 2)];

  return (
    <SiteShell region={region} activePath={`/services/${service.slug}`}>
      <JsonLd data={serviceSchema(service, config, region)} />
      <JsonLd data={faqSchema(faqs)} />

      <PageHero
        region={region}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
        eyebrow={`${config.nicheLabel} · ${config.regionLabel}`}
        title={service.name}
        description={service.description}
        actions={
          <>
            <ButtonLink
              href="#request"
              variant="brand"
              iconRight="arrowRight"
            >
              Request this service
            </ButtonLink>
            <ButtonLink
              href={withRegion("/pricing", region)}
              variant="outline"
            >
              See pricing notes
            </ButtonLink>
          </>
        }
        aside={
          <div className="rounded-panel border border-line bg-surface p-6 shadow-lift sm:p-7">
            <Badge tone="brand">Demo scope</Badge>
            <div className="mt-5 flex items-end gap-2">
              <span className="font-display text-4xl leading-none text-ink">
                {service.priceFrom ?? "Quote"}
              </span>
            </div>
            {service.priceNote ? (
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {service.priceNote}
              </p>
            ) : null}
            <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
              {service.highlights.slice(0, 3).map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-sm text-ink-soft"
                >
                  <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon name="check" className="h-2.5 w-2.5" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl border border-line bg-surface-2 p-3 text-[11px] leading-relaxed text-muted">
              {config.demo.formNote}
            </p>
          </div>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="What is included"
              title={`What a ${service.name} visit covers`}
            />
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              {service.description}
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {service.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-3.5 text-sm text-ink-soft"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-panel border border-line bg-surface-2 p-6 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
              Good to know
            </p>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="font-bold text-ink">Sample price</dt>
                <dd className="mt-1 text-muted">
                  {service.priceFrom ?? "Custom quote"}{" "}
                  {service.priceNote ? `· ${service.priceNote}` : ""}
                </dd>
              </div>
              <div>
                <dt className="font-bold text-ink">Availability</dt>
                <dd className="mt-1 text-muted">{config.contact.hours}</dd>
              </div>
              <div>
                <dt className="font-bold text-ink">Service area</dt>
                <dd className="mt-1 text-muted">
                  {config.contact.city} and {config.areas.length} sample
                  neighbourhoods across {config.regionLabel}.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-ink">Urgent situations</dt>
                <dd className="mt-1 text-muted">{config.emergencyNote}</dd>
              </div>
            </dl>
            <ButtonLink
              href={withRegion("/contact", region)}
              variant="outline"
              size="sm"
              className="mt-6 w-full"
            >
              Ask a question first
            </ButtonLink>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="The visit, step by step"
          title="What should happen after you press send"
        />
        <ProcessSteps steps={PROCESS} className="mt-10" />
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Questions"
              title={`${service.name} questions`}
            />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              These answers are sample content for the demo. A real business
              should confirm scope, parts and warranty terms in writing.
            </p>
          </div>
          <FaqList items={faqs} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Keep exploring"
          title="Related demo services"
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
          {related.map((item) => (
            <ServiceCard key={item.slug} service={item} region={region} />
          ))}
        </div>
        <p className="mt-6 text-xs text-muted">
          Looking for something else?{" "}
          <Link
            href={withRegion("/contact", region)}
            className="font-bold text-brand underline underline-offset-2"
          >
            Describe the problem
          </Link>{" "}
          and the demo team will show how it could be routed.
        </p>
      </Section>

      <LeadFormSection
        config={config}
        region={region}
        defaultService={service.name}
        formType="quote"
        tone="default"
        title={`Request ${service.name}`}
        description={`Send a demo request for ${service.name}. The form and automation are real; the business, price and visit are not.`}
      />
    </SiteShell>
  );
}
