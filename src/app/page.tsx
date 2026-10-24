import Link from "next/link";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CTASection } from "@/components/ui/CTASection";
import { FaqList } from "@/components/ui/FaqList";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { AreaCard } from "@/components/ui/AreaCard";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { SiteShell } from "@/components/site/SiteShell";
import { LeadFormSection } from "@/components/lead/LeadFormSection";
import { NicheScene } from "@/components/art/NicheScene";
import { getSiteConfig } from "@/config/active";
import type { Step } from "@/config/types";
import { regionFromSearchParams, type PageSearchParams } from "@/lib/search-params";
import { localBusinessSchema } from "@/lib/schema";
import { withRegion } from "@/lib/region";

const STEPS: Step[] = [
  {
    title: "Tell us what is happening",
    description:
      "Share the symptoms, the property and the best time to visit. A short description is enough.",
  },
  {
    title: "Get a realistic window",
    description:
      "The office confirms access and gives a demo arrival window instead of a vague promise.",
  },
  {
    title: "See the price first",
    description:
      "The technician explains the finding and quotes the work before anything chargeable starts.",
  },
  {
    title: "A tidy finish and follow-up",
    description:
      "The workspace is left clean, the next step is explained and a follow-up checks the result.",
  },
];

export default async function HomePage({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const region = await regionFromSearchParams(searchParams);
  const config = getSiteConfig(region);

  const featuredServices = config.services
    .filter((service) => service.featured)
    .slice(0, 4);
  const previewServices = featuredServices.length
    ? featuredServices
    : config.services.slice(0, 4);
  const featuredAreas = config.areas.filter((area) => area.featured).slice(0, 4);
  const previewAreas = featuredAreas.length
    ? featuredAreas
    : config.areas.slice(0, 4);

  return (
    <SiteShell region={region} activePath="/">
      <JsonLd data={localBusinessSchema(config, region)} />

      <section className="relative overflow-hidden border-b border-line bg-surface">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
        <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="animate-enter">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="brand" icon="mapPin">
                {config.contact.city} · {config.regionLabel}
              </Badge>
              <Badge tone="neutral" icon="sparkles">
                Interactive demo
              </Badge>
            </div>

            <h1 className="mt-5 max-w-xl font-display text-[2.85rem] leading-[0.95] text-ink sm:text-6xl lg:text-[4.6rem]">
              {config.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {config.hero.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ButtonLink
                href={withRegion("/contact", region)}
                variant="brand"
                size="lg"
                iconRight="arrowRight"
              >
                {config.hero.primaryLabel}
              </ButtonLink>
              <ButtonLink
                href={withRegion("/services", region)}
                variant="outline"
                size="lg"
              >
                {config.hero.secondaryLabel}
              </ButtonLink>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
              <a
                href={config.contact.phoneHref}
                className="inline-flex items-center gap-2 font-bold text-ink transition hover:text-brand"
              >
                <Icon name="phone" className="h-3.5 w-3.5 text-brand" />
                {config.contact.phoneDisplay}
              </a>
              <span className="inline-flex items-center gap-2">
                <Icon name="clock" className="h-3.5 w-3.5 text-brand" />
                {config.contact.hours}
              </span>
            </div>

          </div>

          <div className="animate-enter animate-enter-delay-1 relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 -rotate-2 rounded-[2.3rem] border border-brand/15 bg-brand-soft/40"
            />
            <div className="relative rounded-[2rem] border border-line bg-surface p-2.5 shadow-lift sm:p-3">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-line bg-surface-2">
                <NicheScene
                  niche={config.niche}
                  showStateLabel={false}
                  className="block h-auto w-full"
                  title={`${config.business.name} illustrative ${config.nicheLabel.toLowerCase()} system view`}
                />
                <Badge
                  tone="inverse"
                  className="absolute right-3 top-3 border-white/20 bg-ink/70 backdrop-blur-sm"
                >
                  Sample diagram
                </Badge>
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 px-2 pb-1">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                  Built for the {config.regionLabel} demo
                </div>
                <span className="text-[10px] font-semibold text-muted">
                  {config.currency}
                </span>
              </div>
            </div>

            <div className="relative mt-4 flex items-start gap-3 rounded-2xl border border-line bg-surface p-4 shadow-card">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon name="shield" className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted">
                  The demo promise
                </p>
                <p className="mt-1 text-xs font-semibold leading-snug text-ink">
                  Clear scope and a written price before chargeable work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip points={config.trustPoints} />

      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="A service for the problem in front of you"
          description={`${config.business.tagline} Every service below is sample content for the demo, with a working request flow behind it.`}
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
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {previewServices.map((service) => (
            <ServiceCard key={service.slug} service={service} region={region} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="Fewer surprises, from first call to follow-up"
              description="This is the process the demo is built around: clear communication, visible pricing and a finish that respects the home."
            />
            <ButtonLink
              href={withRegion("/contact", region)}
              variant="brand"
              size="md"
              className="mt-6"
              iconRight="arrowRight"
            >
              Start a request
            </ButtonLink>
          </div>
          <ProcessSteps steps={STEPS} columns={2} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <BeforeAfter niche={config.niche} />
          <div>
            <SectionHeading
              eyebrow="See the difference"
              title="A visual language for the work, not stock-photo promises"
              description="Drag the comparison to see how the demo explains a system before and after a visit. The diagrams are illustrative, not photographs of a real job."
            />
            <ul className="mt-6 space-y-3">
              {[
                "A before-and-after view that explains the work",
                "Plain-language findings instead of jargon",
                "Sample visuals clearly labelled as illustrative",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-ink-soft"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink
              href={withRegion("/gallery", region)}
              variant="outline"
              size="sm"
              className="mt-6"
              iconRight="arrowRight"
            >
              Open the gallery
            </ButtonLink>
          </div>
        </div>
      </Section>

      {config.featurePages.length ? (
        <Section tone="muted">
          <SectionHeading
            eyebrow="Go deeper"
            title="Practical guides, not sales pages"
            description="Niche-specific pages explain common situations in more detail. They are generated from the same typed content blocks as the rest of the site."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {config.featurePages.slice(0, 3).map((page, index) => (
              <Link
                key={page.slug}
                href={withRegion(`/${page.slug}`, region)}
                className="card-lift group flex h-full flex-col rounded-card border border-line bg-surface p-5 shadow-card sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                    {page.eyebrow}
                  </span>
                  <span className="font-display text-2xl text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl leading-tight text-ink">
                  {page.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {page.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-brand">
                  Read the guide
                  <Icon
                    name="arrowRight"
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <LeadFormSection
        config={config}
        region={region}
        formType="quote"
        tone="default"
        title="A clear request. A calmer next step."
      />

      <Section tone="muted">
        <SectionHeading
          eyebrow="Sample feedback"
          title="What a thoughtful review would sound like"
          description="These are sample reviews written for the demo. They are not verified customer testimonials and no aggregate rating is published."
          action={
            <ButtonLink
              href={withRegion("/reviews", region)}
              variant="outline"
              size="sm"
              iconRight="arrowRight"
            >
              All sample reviews
            </ButtonLink>
          }
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {config.reviews.slice(0, 3).map((review) => (
            <ReviewCard key={`${review.name}-${review.service}`} review={review} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Service area"
          title={`Around ${config.contact.city}, without the guesswork`}
          description={`The demo uses ${config.areas.length} sample service areas. Each one has its own page, neighbourhood notes and postal coverage.`}
          action={
            <ButtonLink
              href={withRegion("/areas", region)}
              variant="outline"
              size="sm"
              iconRight="arrowRight"
            >
              All areas
            </ButtonLink>
          }
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {previewAreas.map((area) => (
            <AreaCard key={area.slug} area={area} region={region} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Questions"
              title="The things people ask before booking"
              description={`A few straight answers about the ${config.nicheLabel.toLowerCase()} demo.`}
            />
            <ButtonLink
              href={withRegion("/contact", region)}
              variant="outline"
              size="sm"
              className="mt-6"
              iconRight="arrowRight"
            >
              Ask a different question
            </ButtonLink>
          </div>
          <FaqList items={config.faqs.slice(0, 5)} />
        </div>
      </Section>

      <CTASection config={config} region={region} />
    </SiteShell>
  );
}
