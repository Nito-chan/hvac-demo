import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import type { NicheConfig, RegionId } from "@/config/types";
import { withRegion } from "@/lib/region";
import { cn } from "@/lib/utils";

export function CTASection({
  config,
  region,
  title,
  description,
  primaryLabel,
  secondaryLabel,
  primaryHref = "/contact",
  id,
  className,
}: {
  config: NicheConfig;
  region: RegionId;
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  id?: string;
  className?: string;
}) {
  return (
    <Section tone="ink" id={id} className={cn("relative", className)}>
      <div className="relative overflow-hidden rounded-panel border border-white/10 bg-white/[0.035] p-7 sm:p-10 lg:p-14">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Next step
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-[1.02] text-surface sm:text-4xl lg:text-5xl">
              {title ?? "Ready for a calmer service experience?"}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-surface/65 sm:text-base">
              {description ??
                `Send a demo request for ${config.business.shortName}. A real version of this flow would confirm the request, route it to the right person and follow up after the visit.`}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-surface/60">
              <a
                href={config.contact.phoneHref}
                className="inline-flex items-center gap-2 transition hover:text-surface"
              >
                <Icon name="phone" className="h-3.5 w-3.5 text-accent" />
                {config.contact.phoneDisplay}
              </a>
              <span className="inline-flex items-center gap-2">
                <Icon name="clock" className="h-3.5 w-3.5 text-accent" />
                {config.contact.hours}
              </span>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
            <ButtonLink
              href={withRegion(primaryHref, region)}
              variant="inverse"
              size="lg"
              iconRight="arrowRight"
              className="w-full sm:w-auto"
            >
              {primaryLabel ?? "Book a demo visit"}
            </ButtonLink>
            <ButtonLink
              href={config.contact.phoneHref}
              variant="outlineInverse"
              size="lg"
              iconLeft="phone"
              className="w-full sm:w-auto"
            >
              {secondaryLabel ?? "Call the demo line"}
            </ButtonLink>
          </div>
        </div>

        <p className="relative mt-8 border-t border-white/10 pt-5 text-[10px] leading-relaxed text-ink-soft">
          Demo site. No real booking, dispatch or payment is created.
        </p>
      </div>
    </Section>
  );
}
