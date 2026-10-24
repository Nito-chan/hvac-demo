import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { RegionId } from "@/config/types";
import { withRegion } from "@/lib/region";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({
  items,
  region,
  className,
}: {
  items: Crumb[];
  region: RegionId;
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-[11px]", className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-semibold">
        <li>
          <Link
            href={withRegion("/", region)}
            className="text-muted transition hover:text-ink"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              <Icon
                name="chevronDown"
                className="h-3 w-3 -rotate-90 text-muted/60"
              />
              {isLast ? (
                <span aria-current="page" className="text-ink">
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={withRegion(item.href, region)}
                  className="text-muted transition hover:text-ink"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-muted">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
