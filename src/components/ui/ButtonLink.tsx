import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/config/types";
import { cn } from "@/lib/utils";

type Variant = "primary" | "brand" | "outline" | "outlineInverse" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-ink text-surface hover:bg-ink-soft border border-transparent",
  brand:
    "bg-brand text-on-brand hover:bg-brand-strong border border-transparent",
  outline:
    "border border-line bg-transparent text-ink hover:bg-surface-2",
  outlineInverse:
    "border border-white/25 bg-transparent text-surface hover:bg-white/10",
  ghost: "border border-transparent bg-transparent text-ink hover:bg-surface-2",
  inverse:
    "border border-transparent bg-surface text-ink hover:bg-surface-2",
};

const SIZES: Record<Size, string> = {
  sm: "min-h-10 px-4 text-xs",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-13 px-6 text-sm",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  iconRight,
  iconLeft,
  className,
  external,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  iconRight?: IconName;
  iconLeft?: IconName;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-bold transition duration-200",
    VARIANTS[variant],
    SIZES[size],
    className,
  );

  const content = (
    <>
      {iconLeft ? <Icon name={iconLeft} className="h-4 w-4" /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} className="h-4 w-4" /> : null}
    </>
  );

  const isExternal =
    external ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {content}
    </Link>
  );
}
