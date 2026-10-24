"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

const STORAGE_KEY = "hs-demo-banner-dismissed-v1";

export function DemoBanner({ message }: { message: string }) {
  const [visible, setVisible] = useState(() => {
    try {
      return window.localStorage.getItem(STORAGE_KEY) !== "1";
    } catch {
      return true;
    }
  });

  if (!visible) {
    return null;
  }

  function dismiss() {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Non-blocking: the banner simply returns on the next visit.
    }
  }

  return (
    <div
      role="region"
      aria-label="Demo site notice"
      className="relative z-50 border-b border-white/10 bg-ink text-surface"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/40 bg-accent/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          Demo
        </span>
        <p className="min-w-0 flex-1 text-[11px] leading-snug text-surface/80 sm:text-xs">
          {message}
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-surface/60 transition hover:bg-white/10 hover:text-surface focus-visible:outline-surface"
          aria-label="Dismiss demo notice"
        >
          <Icon name="close" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
