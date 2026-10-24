import type { Metadata } from "next";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CTASection } from "@/components/ui/CTASection";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
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
    title: "Gallery",
    description: `See illustrative ${config.nicheLabel.toLowerCase()} diagrams and before-and-after visuals created for the ${config.business.name} demo.`,
  };
}

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const region = await regionFromSearchParams(searchParams);
  const config = getSiteConfig(region);

  return (
    <SiteShell region={region} activePath="/gallery">
      <PageHero
        region={region}
        breadcrumbs={[{ label: "Gallery" }]}
        eyebrow="Visual story"
        title="Illustrative work, clearly labelled"
        description="The gallery uses custom technical diagrams instead of borrowed job photos. Drag the comparison to see how the demo explains the before and after of a visit."
        actions={
          <>
            <ButtonLink href="#gallery" variant="brand" iconRight="arrowRight">
              Browse the visuals
            </ButtonLink>
            <ButtonLink
              href={withRegion("/services", region)}
              variant="outline"
            >
              See the services
            </ButtonLink>
          </>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <BeforeAfter niche={config.niche} />
          <div>
            <SectionHeading
              eyebrow="Before and after"
              title="Explain the work without pretending it is a photo"
              description="Each niche has its own diagram. The before view shows the failure pattern; the after view shows what a properly completed visit should verify."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Before and after states share the same layout for easy comparison.",
                "Labels name the components a technician would check.",
                "Every visual is marked illustrative, not a real customer job.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl border border-line bg-surface-2 p-4 text-xs leading-relaxed text-muted">
              Want real photos later? The config supports image assets with alt
              text and credit fields. Add them only with a proper licence and
              attribution.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted" id="gallery">
        <SectionHeading
          eyebrow="The gallery"
          title={`${config.nicheLabel} details from the demo`}
          description="A mix of before, after and maintenance views. These are custom SVGs, not stock photos."
          action={
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
              {config.gallery.length} visuals
            </span>
          }
        />
        <GalleryGrid items={config.gallery} className="mt-10" />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Asset notes"
          title="What is in the build, and what is not"
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: "layers" as const,
              title: "Custom SVG diagrams",
              copy: "Five niche scenes, each with hero, before and after variants. No licence fees, no attribution required.",
            },
            {
              icon: "clipboard" as const,
              title: "No stock photos yet",
              copy: "The demo does not borrow photos it cannot credit. Image slots are ready when licensed assets are added.",
            },
            {
              icon: "shield" as const,
              title: "Honest labelling",
              copy: "Illustrative visuals say so. A real portfolio should use real job photos with customer permission.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
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

      <CTASection
        config={config}
        region={region}
        title="Want to see the request flow as well?"
        description="The form validates on the client and server, then routes the lead through the demo automation. No real booking is created."
        primaryLabel="Try the demo form"
      />
    </SiteShell>
  );
}
