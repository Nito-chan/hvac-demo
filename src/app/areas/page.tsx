import type { Metadata } from "next";
import { LeadFormSection } from "@/components/lead/LeadFormSection";
import { AreaCard } from "@/components/ui/AreaCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SiteShell } from "@/components/site/SiteShell";
import { getSiteConfig } from "@/config/active";
import { regionFromSearchParams, type PageSearchParams } from "@/lib/search-params";
import { withRegion } from "@/lib/region";

export async function generateMetadata(): Promise<Metadata> {
  const config = getSiteConfig("us");
  return {
    title: "Service areas",
    description: `See the sample service areas covered by ${config.business.name} around ${config.contact.city}, with neighbourhood and postal-code notes.`,
  };
}

export default async function AreasPage({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const region = await regionFromSearchParams(searchParams);
  const config = getSiteConfig(region);

  return (
    <SiteShell region={region} activePath="/areas">
      <PageHero
        region={region}
        breadcrumbs={[{ label: "Service areas" }]}
        eyebrow="Service area"
        title={`Coverage around ${config.contact.city}`}
        description={`The demo includes ${config.areas.length} sample service areas. Each page explains the local housing mix, common requests and the postal codes the fictional team covers.`}
        actions={
          <>
            <ButtonLink
              href="#request"
              variant="brand"
              iconRight="arrowRight"
            >
              Check your area
            </ButtonLink>
            <ButtonLink href={config.contact.phoneHref} variant="outline" iconLeft="phone">
              {config.contact.phoneDisplay}
            </ButtonLink>
          </>
        }
      />

      <Section>
        <SectionHeading
          eyebrow="Where we work"
          title="Local pages, not a generic map"
          description="Every area page is generated from the same typed content model. Neighbourhoods, postal codes and local notes change with the region."
          action={
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
              {config.regionLabel}
            </span>
          }
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {config.areas.map((area) => (
            <AreaCard key={area.slug} area={area} region={region} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Outside the list?"
              title="Ask before assuming"
              description="A real service business should confirm travel before promising a visit. The demo does the same: send the location and the sample intake flow will show how it could be triaged."
            />
            <ButtonLink
              href="#request"
              variant="brand"
              className="mt-6"
              iconRight="arrowRight"
            >
              Ask about your location
            </ButtonLink>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: "mapPin" as const,
                title: "Postal coverage",
                copy: "Each area page lists sample ZIP or PIN codes so boundaries are visible.",
              },
              {
                icon: "timer" as const,
                title: "Travel is confirmed",
                copy: "The office should confirm the window and any travel charge before dispatch.",
              },
              {
                icon: "home" as const,
                title: "Access matters",
                copy: "Parking, pets, gates and unit placement can change the visit plan.",
              },
              {
                icon: "alert" as const,
                title: "Urgent requests",
                copy: `${config.emergencyNote}`,
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-card border border-line bg-surface p-5 shadow-card"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon name={item.icon} className="h-4 w-4" />
                </span>
                <h3 className="mt-4 font-display text-base text-ink">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <LeadFormSection
        config={config}
        region={region}
        formType="quote"
        tone="default"
        title="Not sure if the demo covers you?"
        description="Share the city or postal code. The sample workflow will show how a real team could confirm coverage before a visit."
        defaultLocation={config.contact.city}
      />
    </SiteShell>
  );
}
