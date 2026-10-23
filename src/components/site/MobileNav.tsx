"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/site/Logo";
import { RegionSwitcher } from "@/components/site/RegionSwitcher";
import { Icon } from "@/components/ui/Icon";
import type { IconName, NicheId } from "@/config/types";
import { withRegion } from "@/lib/region";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: IconName;
}

export function MobileNav({
  items,
  region,
  activePath,
  phoneDisplay,
  phoneHref,
  whatsappHref,
  businessName,
  nicheLabel,
  niche,
}: {
  items: NavItem[];
  region: "us" | "in";
  activePath: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref?: string;
  businessName: string;
  nicheLabel: string;
  niche: NicheId;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }
    const timer = window.setTimeout(() => closeRef.current?.focus(), 30);
    return () => window.clearTimeout(timer);
  }, [open]);

  function openMenu() {
    setOpen(true);
    dialogRef.current?.showModal();
  }

  function closeMenu() {
    dialogRef.current?.close();
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition hover:bg-surface-2 xl:hidden"
        aria-label="Open menu"
        aria-haspopup="dialog"
      >
        <Icon name="menu" className="h-5 w-5" />
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            closeMenu();
          }
        }}
        className="fixed inset-y-0 right-0 m-0 h-dvh max-h-none w-[min(92vw,26rem)] max-w-none border-l border-line bg-surface p-0 text-ink backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
        aria-label="Site menu"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <div className="flex min-w-0 items-center gap-3">
              <BrandMark niche={niche} className="h-10 w-10 text-ink" />
              <div className="min-w-0">
                <p className="truncate font-display text-base leading-tight">
                  {businessName}
                </p>
                <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-muted">
                  {nicheLabel}
                </p>
              </div>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={closeMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition hover:bg-surface-2"
              aria-label="Close menu"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
              Region
            </span>
            <RegionSwitcher region={region} activePath={activePath} />
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
            <ul className="space-y-1">
              {items.map((item) => {
                const active =
                  item.href === "/"
                    ? activePath === "/"
                    : activePath === item.href ||
                      activePath.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={withRegion(item.href, region)}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition",
                        active
                          ? "bg-brand-soft text-ink"
                          : "text-ink-soft hover:bg-surface-2",
                      )}
                    >
                      <Icon name={item.icon} className="h-4 w-4 text-brand" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-line p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
              Talk to the demo team
            </p>
            <a
              href={phoneHref}
              className="mt-2 flex items-center gap-2 font-display text-lg text-ink"
            >
              <Icon name="phone" className="h-4 w-4 text-brand" />
              {phoneDisplay}
            </a>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Link
                href={withRegion("/contact", region)}
                onClick={closeMenu}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-4 text-sm font-semibold text-surface"
              >
                Book a visit
              </Link>
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line px-4 text-sm font-semibold text-ink"
                >
                  <Icon name="message" className="h-4 w-4 text-brand" />
                  WhatsApp
                </a>
              ) : (
                <Link
                  href={withRegion("/pricing", region)}
                  onClick={closeMenu}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-line px-4 text-sm font-semibold text-ink"
                >
                  Pricing
                </Link>
              )}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
