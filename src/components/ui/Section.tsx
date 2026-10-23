import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  id,
  tone = "default",
  className,
  containerClassName,
  labelledBy,
}: {
  children: ReactNode;
  id?: string;
  tone?: "default" | "muted" | "ink" | "brand";
  className?: string;
  containerClassName?: string;
  labelledBy?: string;
}) {
  const tones = {
    default: "bg-surface text-ink",
    muted: "bg-surface-2 text-ink",
    ink: "bg-ink text-surface",
    brand: "bg-brand text-on-brand",
  };

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-16 sm:py-20 lg:py-28", tones[tone], className)}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  action,
  level = 2,
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  action?: ReactNode;
  level?: 2 | 3;
  className?: string;
  titleClassName?: string;
}) {
  const Heading = level === 2 ? "h2" : "h3";
  const inverse = tone === "inverse";

  return (
    <div
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
        align === "center" && "items-center text-center lg:flex-col lg:items-center",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <p
            className={cn(
              "mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em]",
              align === "center" && "justify-center",
              inverse ? "text-accent" : "text-brand",
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                inverse ? "bg-accent" : "bg-brand",
              )}
              aria-hidden="true"
            />
            {eyebrow}
          </p>
        ) : null}
        <Heading
          className={cn(
            "text-3xl leading-[1.05] sm:text-4xl lg:text-[2.9rem]",
            inverse ? "text-surface" : "text-ink",
            titleClassName,
          )}
        >
          {title}
        </Heading>
        {description ? (
          <p
            className={cn(
              "mt-4 max-w-2xl text-sm leading-relaxed sm:text-base",
              align === "center" && "mx-auto",
              inverse ? "text-surface/65" : "text-muted",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
