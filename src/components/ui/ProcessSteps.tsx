import type { Step } from "@/config/types";
import { cn } from "@/lib/utils";

const COLUMNS = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export function ProcessSteps({
  steps,
  columns = 4,
  className,
}: {
  steps: Step[];
  columns?: keyof typeof COLUMNS;
  className?: string;
}) {
  return (
    <ol className={cn("grid gap-4", COLUMNS[columns], className)}>
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="relative flex h-full flex-col rounded-card border border-line bg-surface p-5 shadow-card sm:p-6"
        >
          <span className="font-display text-4xl leading-none text-brand">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-display text-lg leading-tight text-ink">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
