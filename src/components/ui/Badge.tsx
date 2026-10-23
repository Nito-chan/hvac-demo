import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/config/types";
import { cn } from "@/lib/utils";

type BadgeTone = "neutral" | "brand" | "accent" | "inverse";

const TONES: Record<BadgeTone, string> = {
  neutral: "border-line bg-surface-2 text-ink-soft",
  brand: "border-brand/25 bg-brand-soft text-ink",
  accent: "border-accent/35 bg-accent-soft text-ink",
  inverse: "border-white/20 bg-white/10 text-surface",
};

export function Badge({
  children,
  tone = "neutral",
  icon,
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  icon?: IconName;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]",
        TONES[tone],
        className,
      )}
    >
      {icon ? <Icon name={icon} className="h-3 w-3" /> : null}
      {children}
    </span>
  );
}
