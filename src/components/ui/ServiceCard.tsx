import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { RegionId, Service } from "@/config/types";
import { withRegion } from "@/lib/region";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  region,
  className,
}: {
  service: Service;
  region: RegionId;
  className?: string;
}) {
  return (
    <Link
      href={withRegion(`/services/${service.slug}`, region)}
      className={cn(
        "card-lift group flex h-full flex-col rounded-card border border-line bg-surface p-5 shadow-card sm:p-6",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand/15 bg-brand-soft text-brand">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
        {service.priceFrom ? (
          <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[10px] font-bold text-ink-soft">
            {service.priceFrom}
          </span>
        ) : null}
      </div>

      <h3 className="mt-5 font-display text-xl leading-tight text-ink">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {service.short}
      </p>

      <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-brand">
        See what is included
        <Icon
          name="arrowRight"
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
