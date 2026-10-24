import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/content/BlockRenderer";
import { LeadFormSection } from "@/components/lead/LeadFormSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SiteShell } from "@/components/site/SiteShell";
import { getSiteConfig } from "@/config/active";
import type { Faq } from "@/config/types";
import { withRegion } from "@/lib/region";
import { faqSchema } from "@/lib/schema";
import { regionFromSearchParams, type PageSearchParams } from "@/lib/search-params";

interface FeatureRouteProps {
  params: Promise<{ page: string }>;
  searchParams: PageSearchParams;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const config = getSiteConfig("us");
  const feature = config.featurePages.find((item) => item.slug === page);

  if (!feature) {
    return { title: "Page not found" };
  }

  return {
    title: feature.title,
    description: feature.description,
  };
}

export default async function FeaturePage({
  params,
  searchParams,
}: FeatureRouteProps) {
  const [{ page }, region] = await Promise.all([
    params,
    regionFromSearchParams(searchParams),
  ]);
  const config = getSiteConfig(region);
  const feature = config.featurePages.find((item) => item.slug === page);

  if (!feature) {
    notFound();
  }

  const faqs: Faq[] = feature.blocks.flatMap((block) =>
    block.type === "faq" ? block.items : [],
  );

  return (
    <SiteShell region={region} activePath={`/${feature.slug}`}>
      {faqs.length ? <JsonLd data={faqSchema(faqs)} /> : null}

      <PageHero
        region={region}
        breadcrumbs={[{ label: feature.title }]}
        eyebrow={feature.eyebrow}
        title={feature.title}
        description={feature.description}
        actions={
          <>
            <ButtonLink href="#request" variant="brand" iconRight="arrowRight">
              Request a demo visit
            </ButtonLink>
            <ButtonLink
              href={config.contact.phoneHref}
              variant="outline"
              iconLeft="phone"
            >
              {config.contact.phoneDisplay}
            </ButtonLink>
          </>
        }
      />

      <BlockRenderer blocks={feature.blocks} config={config} region={region} />

      <LeadFormSection
        config={config}
        region={region}
        formType="quote"
        tone="muted"
        title="Put this guide to work"
        description={`Send a demo request related to ${feature.title.toLowerCase()}. The sample workflow shows how a real team could respond.`}
      />

      <div className="border-t border-line bg-surface py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 text-xs text-muted sm:px-6 lg:px-8">
          <p>Demo guide · Sample content · No real bookings</p>
          <ButtonLink
            href={withRegion("/services", region)}
            variant="ghost"
            size="sm"
            iconRight="arrowRight"
          >
            Back to services
          </ButtonLink>
        </div>
      </div>
    </SiteShell>
  );
}
