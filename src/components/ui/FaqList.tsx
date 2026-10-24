import { Icon } from "@/components/ui/Icon";
import type { Faq } from "@/config/types";
import { cn } from "@/lib/utils";

export function FaqList({
  items,
  className,
}: {
  items: Faq[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "divide-y divide-line overflow-hidden rounded-panel border border-line bg-surface px-5 shadow-card sm:px-7",
        className,
      )}
    >
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex list-none items-start justify-between gap-4 rounded-md [&::-webkit-details-marker]:hidden">
            <span className="text-sm font-bold leading-snug text-ink sm:text-base">
              {item.q}
            </span>
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line bg-surface-2 text-ink-soft">
              <Icon name="chevronDown" className="faq-icon h-3.5 w-3.5" />
            </span>
          </summary>
          <p className="mt-3 max-w-2xl pr-8 text-sm leading-relaxed text-muted">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
