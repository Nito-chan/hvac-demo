import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import type { RegionId } from "@/config/types";
import { cn } from "@/lib/utils";

export function PageHero({
  region,
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  aside,
  compact = false,
  children,
  className,
}: {
  region: RegionId;
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  actions?: ReactNode;
  aside?: ReactNode;
  compact?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line bg-surface",
        className,
      )}
    >
      <div className="absolute inset-0 bg-grid opacity-55" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div
        className={cn(
          "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
          compact ? "py-10 sm:py-12 lg:py-14" : "py-12 sm:py-16 lg:py-20",
        )}
      >
        {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} region={region} /> : null}

        <div
          className={cn(
            "mt-7 grid gap-10",
            aside
              ? "lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
              : "max-w-4xl",
          )}
        >
          <div>
            {eyebrow ? (
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-strong">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                {eyebrow}
              </p>
            ) : null}
            <h1
              className={cn(
                "font-display leading-[0.98] text-ink",
                eyebrow ? "mt-4" : "",
                compact
                  ? "text-4xl sm:text-5xl lg:text-6xl"
                  : "text-4xl sm:text-5xl lg:text-[4.25rem]",
              )}
            >
              {title}
            </h1>
            {description ? (
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {description}
              </p>
            ) : null}
            {actions ? (
              <div className="mt-7 flex flex-wrap items-center gap-3">{actions}</div>
            ) : null}
            {children}
          </div>
          {aside ? <div className="min-w-0">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
