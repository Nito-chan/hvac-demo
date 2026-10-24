import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { RegionId, ServiceArea } from "@/config/types";
import { withRegion } from "@/lib/region";
import { cn } from "@/lib/utils";

export function AreaCard({
  area,
  region,
  className,
}: {
  area: ServiceArea;
  region: RegionId;
  className?: string;
}) {
  return (
    <Link
      href={withRegion(`/areas/${area.slug}`, region)}
      className={cn(
        "card-lift group flex h-full flex-col rounded-card border border-line bg-surface p-5 shadow-card sm:p-6",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand/15 bg-brand-soft text-brand">
          <Icon name="mapPin" className="h-5 w-5" />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
          {area.stateCode ?? area.state}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl leading-tight text-ink">
        {area.name}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
        {area.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {area.neighborhoods.slice(0, 3).map((neighborhood) => (
          <span
            key={neighborhood}
            className="rounded-full border border-line bg-surface-2 px-2 py-1 text-[10px] font-semibold text-ink-soft"
          >
            {neighborhood}
          </span>
        ))}
        {area.neighborhoods.length > 3 ? (
          <span className="px-1 py-1 text-[10px] font-semibold text-muted">
            +{area.neighborhoods.length - 3} more
          </span>
        ) : null}
      </div>

      <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-brand">
        View this area
        <Icon
          name="arrowRight"
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
