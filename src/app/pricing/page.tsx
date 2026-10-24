import type { Metadata } from "next";
import Link from "next/link";
import { LeadFormSection } from "@/components/lead/LeadFormSection";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqList } from "@/components/ui/FaqList";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { PlanCard } from "@/components/ui/PlanCard";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SiteShell } from "@/components/site/SiteShell";
import { getSiteConfig } from "@/config/active";
import { regionFromSearchParams, type PageSearchParams } from "@/lib/search-params";
import { withRegion } from "@/lib/region";

export async function generateMetadata(): Promise<Metadata> {
  const config = getSiteConfig("us");
  return {
    title: "Pricing",
    description: `Compare sample ${config.nicheLabel.toLowerCase()} pricing, plan options and service call rates for ${config.business.name}.`,
  };
}

export default async function PricingPage({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const region = await regionFromSearchParams(searchParams);
  const config = getSiteConfig(region);

  return (
    <SiteShell region={region} activePath="/pricing">
      <PageHero
        region={region}
        breadcrumbs={[{ label: "Pricing" }]}
        eyebrow="Pricing"
        title="Clear demo prices, with the caveats in plain sight"
        description="Every number on this page is sample content. The structure is the point: a visible starting price, a note about what changes it and a quote before chargeable work."
        actions={
          <>
            <ButtonLink href="#request" variant="brand" iconRight="arrowRight">
              Ask about a plan
            </ButtonLink>
            <ButtonLink href={config.contact.phoneHref} variant="outline" iconLeft="phone">
              {config.contact.phoneDisplay}
            </ButtonLink>
          </>
        }
        aside={
          <div className="rounded-panel border border-line bg-surface p-6 shadow-lift sm:p-7">
            <Badge tone="accent">Demo pricing</Badge>
            <ul className="mt-5 space-y-3">
              {[
                "Sample prices, not a live rate card",
                "Parts and permits quoted separately",
                "Approval required before extra work",
                "Final scope confirmed in writing",
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
        }
      />

      <Section>
        <SectionHeading
          eyebrow="Plans"
          title="A rhythm for maintenance, or one visit at a time"
          description="The plans below are fictional. A real client would need to confirm coverage, exclusions, cancellation terms and local tax treatment."
          align="center"
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {config.plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} region={region} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Service calls"
          title="Starting points, not final invoices"
          description="These sample prices show how a service menu can set expectations without pretending every job is identical."
        />
        <div className="mt-8 overflow-hidden rounded-panel border border-line bg-surface shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[34rem] text-left text-sm">
              <caption className="sr-only">
                Sample service pricing with notes
              </caption>
              <thead className="border-b border-line bg-surface-2 text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                <tr>
                  <th scope="col" className="px-5 py-3.5">
                    Service
                  </th>
                  <th scope="col" className="px-5 py-3.5">
                    Demo price
                  </th>
                  <th scope="col" className="px-5 py-3.5">
                    Note
                  </th>
                  <th scope="col" className="px-5 py-3.5 text-right">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {config.services.map((service) => (
                  <tr key={service.slug} className="transition hover:bg-surface-2/60">
                    <th scope="row" className="px-5 py-4 font-semibold text-ink">
                      {service.name}
                    </th>
                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-brand">
                      {service.priceFrom ?? "Custom quote"}
                    </td>
                    <td className="px-5 py-4 text-xs leading-relaxed text-muted">
                      {service.priceNote ?? "Confirmed after assessment."}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link
                        href={withRegion(`/services/${service.slug}`, region)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand underline underline-offset-2"
                        aria-label={`View ${service.name} details`}
                      >
                        View
                        <Icon name="arrowRight" className="h-3 w-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          Sample pricing only. Labour, parts, access, after-hours work, permits
          and local taxes can all change the final amount. A real quote should
          itemise every charge.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What is not included"
          title="The line items that deserve their own line"
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "layers" as const,
              title: "Parts and materials",
              copy: "Quoted separately once the fault or scope is confirmed.",
            },
            {
              icon: "clipboard" as const,
              title: "Permits and approvals",
              copy: "Any required local permit or inspection is a separate item.",
            },
            {
              icon: "clock" as const,
              title: "After-hours work",
              copy: "Evening, weekend and emergency rates should be stated up front.",
            },
            {
              icon: "alert" as const,
              title: "Unforeseen access",
              copy: "Concealed faults or difficult access may need a revised quote.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-card border border-line bg-surface p-5 shadow-card"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg leading-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <SectionHeading
            eyebrow="Pricing questions"
            title="Straight answers about the demo numbers"
            description="The structure is real; the prices are not. Use these answers as a template for what a client should clarify."
          />
          <FaqList items={config.faqs.slice(0, 4)} />
        </div>
      </Section>

      <LeadFormSection
        config={config}
        region={region}
        formType="contact"
        tone="default"
        title="Ask about a plan or a one-off visit"
        description="Send a demo message and the sample workflow will show how a pricing question could be routed to the office."
      />
    </SiteShell>
  );
}
