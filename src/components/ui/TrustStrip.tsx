import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function TrustStrip({
  points,
  className,
}: {
  points: string[];
  className?: string;
}) {
  return (
    <div className={cn("border-b border-line bg-surface-2/70", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul
          aria-label="What to expect"
          className="grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x"
        >
          {points.map((point, index) => (
            <li
              key={point}
              className={cn(
                "flex items-center gap-2.5 py-4 text-[11px] font-bold leading-snug text-ink-soft sm:justify-center sm:px-3 sm:text-xs",
                index >= 2 && "border-t border-line sm:border-t-0",
                index % 2 === 1 && "border-l border-line pl-3 sm:border-l-0 sm:pl-3",
                index % 2 === 0 && "pr-3 sm:pr-3",
              )}
            >
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                <Icon name="check" className="h-3.5 w-3.5" />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
