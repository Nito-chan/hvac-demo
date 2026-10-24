import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import type { Plan, RegionId } from "@/config/types";
import { withRegion } from "@/lib/region";
import { cn } from "@/lib/utils";

export function PlanCard({
  plan,
  region,
  className,
}: {
  plan: Plan;
  region: RegionId;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-panel border bg-surface p-6 shadow-card sm:p-7",
        plan.highlighted
          ? "border-brand ring-2 ring-brand/25"
          : "border-line",
        className,
      )}
    >
      {plan.highlighted ? (
        <Badge tone="brand" className="absolute -top-3 left-6">
          Most chosen demo plan
        </Badge>
      ) : null}

      <h3 className="font-display text-xl leading-tight text-ink">{plan.name}</h3>
      <div className="mt-4 flex items-end gap-2">
        <span className="font-display text-4xl leading-none text-ink">
          {plan.price}
        </span>
        <span className="pb-1 text-xs font-semibold text-muted">{plan.period}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{plan.description}</p>

      <ul className="mt-5 flex-1 space-y-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
            <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
              <Icon name="check" className="h-2.5 w-2.5" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <ButtonLink
        href={withRegion("/contact", region)}
        variant={plan.highlighted ? "brand" : "outline"}
        className="mt-6 w-full"
      >
        {plan.cta}
      </ButtonLink>
      {plan.note ? (
        <p className="mt-3 text-center text-[10px] leading-relaxed text-muted">
          {plan.note}
        </p>
      ) : null}
    </div>
  );
}
