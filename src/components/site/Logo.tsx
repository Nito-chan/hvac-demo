import Link from "next/link";
import type { NicheId } from "@/config/types";
import { withRegion } from "@/lib/region";
import { cn } from "@/lib/utils";

export function BrandMark({
  niche,
  className,
}: {
  niche: NicheId;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-10 w-10 shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="40" height="40" rx="12" fill="currentColor" />
      <g
        fill="none"
        stroke="var(--on-brand)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {niche === "hvac" && (
          <>
            <path d="M11 19C14 15 17 15 20 19C23 23 26 23 29 19" />
            <path d="M11 25C14 21 17 21 20 25C23 29 26 29 29 25" />
            <path d="M20 9V13" />
          </>
        )}
        {niche === "plumbing" && (
          <path d="M20 8C20 8 12 17 12 23C12 27.4 15.6 31 20 31C24.4 31 28 27.4 28 23C28 17 20 8 20 8Z" />
        )}
        {niche === "roofing" && (
          <>
            <path d="M9 23L20 13L31 23" />
            <path d="M13 23V30H27V23" />
            <path d="M17 30V24H23V30" />
          </>
        )}
        {niche === "electrician" && (
          <path d="M22 8L13 22H19L17 32L27 18H21L22 8Z" />
        )}
        {niche === "pest" && (
          <>
            <path d="M20 8L30 12V20C30 26 25.5 30.5 20 32C14.5 30.5 10 26 10 20V12L20 8Z" />
            <path d="M20 17V25M16.5 21C16.5 17.7 18 15.5 20 14.5C22 15.5 23.5 17.7 23.5 21C23.5 24.3 22 26.5 20 27.5C18 26.5 16.5 24.3 16.5 21Z" />
          </>
        )}
      </g>
      <circle cx="31" cy="9" r="3" fill="var(--accent)" />
    </svg>
  );
}

export function Logo({
  niche,
  region,
  businessName,
  nicheLabel,
  className,
  tone = "ink",
}: {
  niche: NicheId;
  region: "us" | "in";
  businessName: string;
  nicheLabel: string;
  className?: string;
  tone?: "ink" | "brand" | "surface";
}) {
  const toneClass =
    tone === "brand"
      ? "text-brand"
      : tone === "surface"
        ? "text-surface"
        : "text-ink";

  return (
    <Link
      href={withRegion("/", region)}
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label={`${businessName} home`}
    >
      <BrandMark
        niche={niche}
        className="transition-transform duration-300 group-hover:-rotate-3"
      />
      <span className="min-w-0">
        <span
          className={cn(
            "block truncate font-display text-[1.05rem] leading-tight tracking-tight",
            toneClass,
          )}
        >
          {businessName}
        </span>
        <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.22em] text-muted">
          {nicheLabel}
        </span>
      </span>
    </Link>
  );
}
