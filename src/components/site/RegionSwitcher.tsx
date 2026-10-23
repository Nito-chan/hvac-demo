import Link from "next/link";
import { withRegion } from "@/lib/region";
import { cn } from "@/lib/utils";

export function RegionSwitcher({
  region,
  activePath,
  className,
  tone = "default",
}: {
  region: "us" | "in";
  activePath: string;
  className?: string;
  tone?: "default" | "inverse";
}) {
  const base =
    "inline-flex h-7 items-center rounded-full px-2.5 text-[10px] font-bold uppercase tracking-[0.14em] transition";
  const active =
    tone === "inverse"
      ? "bg-surface text-ink shadow-sm"
      : "bg-ink text-surface shadow-sm";
  const idle =
    tone === "inverse"
      ? "text-surface/60 hover:text-surface"
      : "text-muted hover:text-ink";

  return (
    <div
      role="group"
      aria-label="Demo region"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border p-0.5",
        tone === "inverse" ? "border-white/20" : "border-line bg-surface/60",
        className,
      )}
    >
      <Link
        href={withRegion(activePath, "us")}
        aria-current={region === "us" ? "true" : undefined}
        className={cn(base, region === "us" ? active : idle)}
      >
        US
      </Link>
      <Link
        href={withRegion(activePath, "in")}
        aria-current={region === "in" ? "true" : undefined}
        className={cn(base, region === "in" ? active : idle)}
      >
        IN
      </Link>
    </div>
  );
}
