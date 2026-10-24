import type { Metadata } from "next";
import Link from "next/link";
import { NicheScene } from "@/components/art/NicheScene";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { SiteShell } from "@/components/site/SiteShell";
import { getSiteConfig } from "@/config/active";
import { withRegion } from "@/lib/region";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page is not part of the home-service demo.",
};

export default function NotFound() {
  const config = getSiteConfig("us");

  return (
    <SiteShell region="us" activePath="/404">
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="font-display text-7xl leading-none text-brand/30">404</p>
            <h1 className="mt-3 font-display text-4xl leading-[0.98] text-ink sm:text-5xl">
              This page is not part of the demo.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              The link may be old, mistyped or from a different niche build. Try
              the home page, the service menu or the contact form.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink
                href={withRegion("/", "us")}
                variant="brand"
                iconLeft="home"
              >
                Back home
              </ButtonLink>
              <ButtonLink
                href={withRegion("/services", "us")}
                variant="outline"
              >
                See services
              </ButtonLink>
              <ButtonLink
                href={withRegion("/contact", "us")}
                variant="ghost"
              >
                Contact
              </ButtonLink>
            </div>
            <p className="mt-6 text-xs text-muted">
              Looking for the India version?{" "}
              <Link
                href={withRegion("/", "in")}
                className="font-bold text-brand underline underline-offset-2"
              >
                Switch to the India demo
              </Link>
              .
            </p>
          </div>
          <div className="rounded-panel border border-line bg-surface p-2 shadow-card">
            <NicheScene
              niche={config.niche}
              decorative
              className="block h-auto w-full"
            />
            <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              Illustrative system view
            </p>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
