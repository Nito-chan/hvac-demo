import type { Metadata } from "next";
import { NicheScene } from "@/components/art/NicheScene";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CTASection } from "@/components/ui/CTASection";
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
    title: "About",
    description: `Meet the fictional team behind ${config.business.name} and see the service principles this ${config.nicheLabel.toLowerCase()} demo is built around.`,
  };
}

export default async function AboutPage({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const region = await regionFromSearchParams(searchParams);
  const config = getSiteConfig(region);

  return (
    <SiteShell region={region} activePath="/about">
      <PageHero
        region={region}
        breadcrumbs={[{ label: "About" }]}
        eyebrow="About the demo"
        title={config.about.title}
        description={config.about.intro}
        actions={
          <>
            <ButtonLink
              href={withRegion("/contact", region)}
              variant="brand"
              iconRight="arrowRight"
            >
              Talk to the demo team
            </ButtonLink>
            <ButtonLink
              href={withRegion("/services", region)}
              variant="outline"
            >
              See the services
            </ButtonLink>
          </>
        }
        aside={
          <div className="rounded-panel border border-line bg-surface p-6 shadow-lift sm:p-7">
            <Badge tone="accent">Fictional business</Badge>
            <dl className="mt-5 space-y-4 text-sm">
              {[
                ["Business", config.business.name],
                ["Region", `${config.contact.city}, ${config.contact.state}`],
                ["Service category", config.nicheLabel],
                ["Hours", config.contact.hours],
                ["Team profiles", "Sample content"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-start justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                    {label}
                  </dt>
                  <dd className="text-right font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 rounded-xl border border-line bg-surface-2 p-3 text-[11px] leading-relaxed text-muted">
              {config.legalNote}
            </p>
          </div>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Why this exists"
              title="A demo that shows the whole service experience"
            />
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              {config.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Region-aware content",
                "Typed, reusable blocks",
                "Server-validated lead form",
                "No fabricated performance claims",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-line bg-surface p-3.5 text-xs font-semibold text-ink-soft"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-panel border border-line bg-surface-2 p-2 shadow-card">
            <NicheScene
              niche={config.niche}
              decorative
              className="block h-auto w-full"
            />
            <div className="flex items-center justify-between gap-3 px-3 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                Illustrative system view
              </p>
              <Badge tone="neutral">{config.regionLabel}</Badge>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="What guides the work"
          title="Principles a real service business could keep"
          description="These values are fictional sample copy, but the behaviour they describe is a reasonable baseline for a local service brand."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {config.about.values.map((value) => (
            <div
              key={value.title}
              className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon name={value.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg leading-tight text-ink">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Sample team"
          title="Profiles, not stock-photo executives"
          description="A real site should use real team members with consent. These cards use initials and a clear sample label instead of borrowed portraits."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {config.about.team.map((member) => (
            <div
              key={member.name}
              className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand/15 bg-brand-soft font-display text-lg text-brand-strong"
                >
                  {member.initials}
                </span>
                <div>
                  <h3 className="font-display text-lg leading-tight text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
                    {member.role}
                  </p>
                  <Badge tone="neutral" className="mt-2">
                    Sample profile
                  </Badge>
                </div>
              </div>
              <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <SectionHeading
            eyebrow="Credentials"
            title="Placeholders, clearly marked"
            description="The demo does not invent licence numbers or insurance claims. A production site should verify and display the real documents."
          />
          <div className="rounded-panel border border-line bg-surface p-6 shadow-card sm:p-8">
            <ul className="space-y-3">
              {config.about.credentials.map((credential) => (
                <li key={credential} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {credential}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl border border-accent/35 bg-accent-soft p-4 text-xs leading-relaxed text-ink">
              <span className="font-bold">Before launch:</span> replace every
              placeholder with a verified credential, or remove the claim. In
              many regions, advertising unlicensed contractor work is a legal
              risk.
            </p>
          </div>
        </div>
      </Section>

      <CTASection
        config={config}
        region={region}
        title="See how the demo handles a real request"
        description="The lead form is the most useful part of this demo. Try it, watch the validation and see the thank-you state."
        primaryLabel="Try the demo form"
      />
    </SiteShell>
  );
}
