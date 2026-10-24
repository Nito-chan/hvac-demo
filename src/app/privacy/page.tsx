import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SiteShell } from "@/components/site/SiteShell";
import { getSiteConfig } from "@/config/active";
import { withRegion } from "@/lib/region";
import { regionFromSearchParams, type PageSearchParams } from "@/lib/search-params";

export const metadata: Metadata = {
  title: "Privacy & demo notes",
  description:
    "How the home-service demo handles form data, local storage and automation, and what must be reviewed before a real launch.",
};

const SECTIONS = [
  { id: "short-version", title: "The short version" },
  { id: "who-we-are", title: "Who this site belongs to" },
  { id: "what-we-collect", title: "What the form collects" },
  { id: "why", title: "Why it is collected" },
  { id: "where-it-goes", title: "Where the data goes" },
  { id: "retention", title: "Retention" },
  { id: "storage", title: "Cookies and local storage" },
  { id: "choices", title: "Your choices" },
  { id: "security", title: "Security and limits" },
  { id: "legal", title: "Legal review note" },
];

export default async function PrivacyPage({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const region = await regionFromSearchParams(searchParams);
  const config = getSiteConfig(region);

  return (
    <SiteShell region={region} activePath="/privacy">
      <PageHero
        region={region}
        breadcrumbs={[{ label: "Privacy & demo notes" }]}
        eyebrow="Privacy"
        title="A demo policy you can adapt, not legal advice"
        description="This page explains what the demo actually does with form data and automation. A real business must review, localise and replace it with its own policy before launch."
        compact
        actions={
          <ButtonLink
            href={withRegion("/contact", region)}
            variant="outline"
            iconRight="arrowRight"
          >
            Back to contact
          </ButtonLink>
        }
        aside={
          <div className="rounded-panel border border-line bg-surface p-6 shadow-lift">
            <Badge tone="accent">Policy template</Badge>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The demo is fictional. Do not treat this page as legal advice or
              as a substitute for a lawyer&apos;s review.
            </p>
            <p className="mt-4 flex items-start gap-2 rounded-xl border border-line bg-surface-2 p-3 text-[11px] leading-relaxed text-muted">
              <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              Before launch: add the real company name, address, contact
              channel, retention period, lawful basis and any regional rights.
            </p>
          </div>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-14">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
              On this page
            </p>
            <ul className="mt-3 space-y-1.5 border-l border-line pl-4">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-xs font-semibold text-muted transition hover:text-brand"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4">
            <article
              id="short-version"
              className="scroll-mt-28 rounded-panel border border-brand/25 bg-brand-soft/50 p-6 sm:p-8"
            >
              <h2 className="font-display text-2xl text-ink">The short version</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                This is a demonstration website for a fictional business. The
                lead form is real, but it exists to show a workflow. No real
                booking, dispatch, payment or customer relationship is created.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {[
                  "The form collects only the details needed to demonstrate a service request.",
                  "In demo mode, nothing is sent to an external automation.",
                  "In live demo mode, the request is sent to the sample Make workflow.",
                  "No analytics or advertising trackers are installed.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <PolicySection id="who-we-are" title="Who this site belongs to">
              <p>
                {config.business.name} is a fictional {config.nicheLabel.toLowerCase()}{" "}
                business in {config.contact.city}, {config.contact.state},{" "}
                {config.contact.country}. The site is a demo, not a trading
                business. The contact phone number is a sample or demo number and
                the email address uses the reserved <code>.example</code> domain.
              </p>
              <p>
                If you are viewing this demo, the person or studio who shared it
                is responsible for the deployment. Use their real contact channel
                for questions about the demo itself.
              </p>
            </PolicySection>

            <PolicySection id="what-we-collect" title="What the form collects">
              <p>The lead form sends the following fields to the API route:</p>
              <ul>
                <li>Name, phone number and optional email address.</li>
                <li>City, ZIP or PIN, chosen service, preferred time and urgency.</li>
                <li>An optional description of the problem.</li>
                <li>Consent confirmation and a timestamp used to reject instant bot submissions.</li>
                <li>
                  Page path, UTM source, medium and campaign parameters captured
                  from the URL.
                </li>
                <li>
                  A generated lead reference, the active niche and the selected
                  region.
                </li>
              </ul>
              <p>
                The server also reads the request IP address in memory to apply a
                rate limit of five requests per ten minutes. The IP address is
                not written to the lead payload or sent to the automation.
              </p>
            </PolicySection>

            <PolicySection id="why" title="Why it is collected">
              <p>
                The information is used to demonstrate a believable service
                intake flow: validating a request, prioritising urgent language,
                showing how a team would follow up and producing a lead record.
                It is not used for advertising, profiling or resale.
              </p>
            </PolicySection>

            <PolicySection id="where-it-goes" title="Where the data goes">
              <p>
                <strong>Demo mode:</strong> the API route validates the request and
                returns a demo reference. The full lead payload is not sent
                externally. A server log line records only the generated lead
                reference.
              </p>
              <p>
                <strong>Live demo mode:</strong> when the deployment has
                <code>MAKE_WEBHOOK_URL</code> and <code>DEMO_WEBHOOK_KEY</code>{" "}
                configured and <code>DEMO_MODE=live</code>, the payload is sent to
                a Make webhook. The planned sample workflow may write the lead to
                a Google Sheet and send email or Telegram notifications. This
                should be disclosed to anyone testing the live automation.
              </p>
              <p>
                <strong>Hosting:</strong> the site is deployed on Vercel, which
                processes standard request logs as a hosting provider. Fonts are
                downloaded at build time and served from the deployment; the
                browser does not contact Google Fonts at runtime.
              </p>
            </PolicySection>

            <PolicySection id="retention" title="Retention">
              <p>
                This demo should only retain test leads for as long as needed to
                verify the workflow. Delete test records from the sheet and
                automation history when the demo is retired. A real business must
                set a documented retention period for enquiries that do not
                become customers.
              </p>
            </PolicySection>

            <PolicySection id="storage" title="Cookies and local storage">
              <p>
                The site does not set advertising or analytics cookies. The demo
                notice uses browser local storage to remember that you dismissed
                it. That preference stays in your browser and is not sent to the
                server.
              </p>
              <p>
                The region switcher uses the URL query string rather than a
                cookie, so a shared link carries the intended region with it.
              </p>
            </PolicySection>

            <PolicySection id="choices" title="Your choices">
              <p>
                Do not submit the form if you do not want a sample lead record to
                be created. You can browse every page without submitting
                anything. If you have submitted a test lead and want it removed,
                contact the person who shared the demo and include the demo
                reference shown on the thank-you page.
              </p>
            </PolicySection>

            <PolicySection id="security" title="Security and limits">
              <p>
                The API route validates input with a shared schema, rejects
                honeypot submissions, requires a small completion delay, applies a
                per-instance rate limit and keeps webhook credentials in
                environment variables. The automation can still fail or be
                misconfigured; the form shows a fallback message with a phone
                number.
              </p>
              <p>
                This is a demo, not a hardened production intake system. A real
                deployment should add persistent rate limiting, monitoring,
                access controls, a documented incident process and a proper data
                processing agreement with every vendor.
              </p>
            </PolicySection>

            <PolicySection id="legal" title="Legal review note">
              <p>
                This page is a starting point for a client&apos;s own policy, not
                legal advice. Before launch, a qualified adviser should review:
              </p>
              <ul>
                <li>The real legal entity, postal address and contact channel.</li>
                <li>Lawful basis, consent wording and marketing preferences.</li>
                <li>Retention, deletion and access-request procedures.</li>
                <li>Regional privacy rights and cookie rules that apply.</li>
                <li>Contracts with hosting, automation and notification vendors.</li>
              </ul>
              <p>
                The demo intentionally publishes <code>noindex, nofollow</code> and
                does not present itself as a real business.
              </p>
            </PolicySection>

            <div className="rounded-panel border border-line bg-surface p-6 sm:p-8">
              <h2 className="font-display text-2xl text-ink">Questions about this page?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Use the contact page to send a demo message, or return to the
                services to keep exploring.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href={withRegion("/contact", region)} variant="brand" size="sm">
                  Contact the demo
                </ButtonLink>
                <Link
                  href={withRegion("/", region)}
                  className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-xs font-bold text-ink transition hover:bg-surface-2"
                >
                  Back home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}

function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article
      id={id}
      className="scroll-mt-28 rounded-panel border border-line bg-surface p-6 sm:p-8"
    >
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      <div className="prose-lite mt-3 space-y-3 text-sm leading-relaxed [&_code]:rounded [&_code]:bg-surface-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[12px] [&_code]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_strong]:text-ink">
        {children}
      </div>
    </article>
  );
}
