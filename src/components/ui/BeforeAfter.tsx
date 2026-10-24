"use client";

import { useId, useState } from "react";
import { NicheScene } from "@/components/art/NicheScene";
import type { NicheId } from "@/config/types";
import { cn } from "@/lib/utils";

export function BeforeAfter({
  niche,
  initial = 52,
  className,
}: {
  niche: NicheId;
  initial?: number;
  className?: string;
}) {
  const [value, setValue] = useState(initial);
  const id = useId().replace(/:/g, "");

  return (
    <div
      className={cn(
        "overflow-hidden rounded-panel border border-line bg-surface-2 p-2 shadow-lift focus-within:ring-4 focus-within:ring-brand/20",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[calc(1.75rem-0.5rem)]">
        <NicheScene
          niche={niche}
          state="after"
          decorative
          showStateLabel={false}
          showHeader={false}
          className="block h-auto w-full"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          aria-hidden="true"
        >
          <NicheScene
            niche={niche}
            state="before"
            decorative
            showStateLabel={false}
            showHeader={false}
            className="block h-auto w-full"
          />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-ink/80 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-surface backdrop-blur-sm">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-full bg-brand px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-on-brand">
          After
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-surface shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
          style={{ left: `${value}%` }}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand bg-surface text-brand shadow-lift">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 7 3 12l5 5M16 7l5 5-5 5" />
            </svg>
          </span>
        </div>

        <label htmlFor={id} className="sr-only">
          Before and after comparison. Drag the divider or use the arrow keys.
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          aria-valuetext={`${value}% before, ${100 - value}% after`}
          className="before-after-range absolute inset-0 z-20 h-full w-full opacity-0"
        />
      </div>
      <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-3 text-[9px] font-bold uppercase tracking-[0.16em] text-muted">
        <span>Illustrative</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-brand" aria-hidden="true" />
          Drag to compare
        </span>
      </div>
    </div>
  );
}
