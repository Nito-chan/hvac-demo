import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CTASection } from "@/components/ui/CTASection";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SiteShell } from "@/components/site/SiteShell";
import { getSiteConfig } from "@/config/active";
import { regionFromSearchParams, type PageSearchParams } from "@/lib/search-params";
import { withRegion } from "@/lib/region";

export async function generateMetadata(): Promise<Metadata> {
  const config = getSiteConfig("us");
  return {
    title: "Sample reviews",
    description: `Read clearly labelled sample reviews for the ${config.business.name} demo. No aggregate rating or verified customer claim is published.`,
  };
}

const REVIEW_STEPS = [
  {
    title: "Ask after the visit",
    copy: "A follow-up message checks the work and invites honest feedback, without an incentive.",
  },
  {
    title: "Publish with consent",
    copy: "A real site should only publish a review with the customer's permission and an accurate label.",
  },
  {
    title: "Keep it verifiable",
    copy: "No invented star averages, no edited quotes and no review schema for unverified testimonials.",
  },
];

export default async function ReviewsPage({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const region = await regionFromSearchParams(searchParams);
  const config = getSiteConfig(region);

  return (
    <SiteShell region={region} activePath="/reviews">
      <PageHero
        region={region}
        breadcrumbs={[{ label: "Reviews" }]}
        eyebrow="Sample feedback"
        title="Reviews that are clearly labelled as samples"
        description="This demo does not claim to have real customers. The reviews below are written sample content that shows the tone and structure a real review section could use."
        actions={
          <>
            <ButtonLink href="#reviews" variant="brand" iconRight="arrowRight">
              Read the samples
            </ButtonLink>
            <ButtonLink
              href={withRegion("/contact", region)}
              variant="outline"
            >
              Ask a question
            </ButtonLink>
          </>
        }
        aside={
          <div className="rounded-panel border border-line bg-surface p-6 shadow-lift sm:p-7">
            <Badge tone="accent">Important</Badge>
            <h2 className="mt-4 font-display text-xl text-ink">
              No aggregate rating is published.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The demo deliberately avoids star averages, review counts and
              “trusted by thousands” claims. A real site should only publish
              feedback it can verify and attribute.
            </p>
            <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
              {config.reviews.length ? (
                <li className="flex items-center gap-2 text-xs text-ink-soft">
                  <Icon name="message" className="h-3.5 w-3.5 text-brand" />
                  {config.reviews.length} sample reviews on this page
                </li>
              ) : null}
              <li className="flex items-center gap-2 text-xs text-ink-soft">
                <Icon name="badge" className="h-3.5 w-3.5 text-brand" />
                Each card carries a sample label
              </li>
              <li className="flex items-center gap-2 text-xs text-ink-soft">
                <Icon name="shield" className="h-3.5 w-3.5 text-brand" />
                No review markup is added to page schema
              </li>
            </ul>
          </div>
        }
      />

      <Section id="reviews">
        <SectionHeading
          eyebrow="Sample reviews"
          title="What considered feedback would sound like"
          description="Names, locations and quotes are fictional. The service names and dates are sample content."
          action={<Badge tone="neutral">Sample content only</Badge>}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {config.reviews.map((review) => (
            <ReviewCard
              key={`${review.name}-${review.service}-${review.quote.slice(0, 12)}`}
              review={review}
            />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="A better review process"
          title="Trust is built before the review request"
          description="The demo includes a follow-up workflow in the Make automation plan. These are the principles the website content is designed around."
          align="center"
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {REVIEW_STEPS.map((step, index) => (
            <li
              key={step.title}
              className="rounded-card border border-line bg-surface p-6 shadow-card"
            >
              <span className="font-display text-3xl text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.copy}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CTASection
        config={config}
        region={region}
        title="Want to see the request flow behind the samples?"
        description="The form is fully interactive. It validates, filters spam and demonstrates how a lead would be routed without creating a real booking."
        primaryLabel="Try the demo form"
        secondaryLabel="Call the demo line"
      />
    </SiteShell>
  );
}
