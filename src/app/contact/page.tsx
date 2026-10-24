import type { Metadata } from "next";
import { LeadFormSection } from "@/components/lead/LeadFormSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqList } from "@/components/ui/FaqList";
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
    title: "Contact",
    description: `Send a demo request to ${config.business.name}. The form is validated and routed through a sample lead workflow; no real booking is created.`,
  };
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const region = await regionFromSearchParams(searchParams);
  const config = getSiteConfig(region);

  return (
    <SiteShell region={region} activePath="/contact">
      <PageHero
        region={region}
        breadcrumbs={[{ label: "Contact" }]}
        eyebrow="Contact"
        title="Tell us what is happening"
        description={`Use the demo form to see the full request journey, or call the sample line if you want to see how a phone-first intake could work. ${config.demo.banner}`}
        compact
        actions={
          <>
            <ButtonLink
              href="#request"
              variant="brand"
              iconRight="arrowRight"
            >
              Go to the form
            </ButtonLink>
            <ButtonLink
              href={config.contact.phoneHref}
              variant="outline"
              iconLeft="phone"
            >
              {config.contact.phoneDisplay}
            </ButtonLink>
            {config.contact.whatsappHref ? (
              <ButtonLink
                href={config.contact.whatsappHref}
                variant="ghost"
                external
              >
                WhatsApp the demo
              </ButtonLink>
            ) : null}
          </>
        }
      />

      <LeadFormSection
        config={config}
        region={region}
        formType="contact"
        tone="default"
        eyebrow="Send a demo message"
        title="A short message is enough"
        description="Share the symptom, location and preferred time. The form checks the details on the server, filters spam and shows the thank-you state without creating a real booking."
      />

      <Section tone="muted">
        <SectionHeading
          eyebrow="Before you send"
          title="Pick the channel that fits the situation"
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: "alert" as const,
              title: "Urgent or unsafe",
              copy: "Call first. For gas, smoke, sparks or flooding you cannot stop, contact local emergency services before any service business.",
              actionLabel: "Call the demo line",
              href: config.contact.phoneHref,
              external: true,
            },
            {
              icon: "clipboard" as const,
              title: "Planning a repair",
              copy: "Use the form. Include the property type, access notes, the symptom and whether the issue is intermittent.",
              actionLabel: "Use the form",
              href: "#request",
              external: false,
            },
            {
              icon: "message" as const,
              title: "Following up",
              copy: "Use the same phone or email as the original request. A real team should be able to find the job record quickly.",
              actionLabel: config.contact.whatsappHref ? "WhatsApp the demo" : "Email the demo",
              href: config.contact.whatsappHref ?? `mailto:${config.contact.email}`,
              external: true,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col rounded-card border border-line bg-surface p-5 shadow-card sm:p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg text-ink">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {item.copy}
              </p>
              <ButtonLink
                href={item.href}
                variant="outline"
                size="sm"
                className="mt-5"
                external={item.external}
                iconRight="arrowRight"
              >
                {item.actionLabel}
              </ButtonLink>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <SectionHeading
            eyebrow="Contact questions"
            title="Before you press send"
            description="These demo answers cover the most common intake questions. A real business should confirm its own response times in writing."
            action={
              <ButtonLink
                href={withRegion("/privacy", region)}
                variant="ghost"
                size="sm"
                iconRight="arrowRight"
              >
                Read the privacy note
              </ButtonLink>
            }
          />
          <FaqList items={config.faqs.slice(0, 4)} />
        </div>
      </Section>
    </SiteShell>
  );
}
