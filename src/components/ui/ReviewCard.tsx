import { Badge } from "@/components/ui/Badge";
import type { Review } from "@/config/types";
import { cn } from "@/lib/utils";

function initials(name: string): string {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function ReviewCard({
  review,
  className,
}: {
  review: Review;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-card border border-line bg-surface p-5 shadow-card sm:p-6",
        className,
      )}
    >
      <Badge tone="neutral" className="self-start">
        Sample review
      </Badge>
      <blockquote className="mt-4 flex-1">
        <p className="text-sm leading-relaxed text-ink-soft">
          “{review.quote}”
        </p>
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft font-display text-sm text-brand-strong"
        >
          {initials(review.name)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-bold text-ink">
            {review.name}
          </span>
          <span className="mt-0.5 block truncate text-[11px] text-muted">
            {review.location} · {review.service}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
