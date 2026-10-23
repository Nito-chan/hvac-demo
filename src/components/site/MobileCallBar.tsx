import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { NicheConfig } from "@/config/types";
import { withRegion } from "@/lib/region";

export function MobileCallBar({
  config,
  region,
}: {
  config: NicheConfig;
  region: "us" | "in";
}) {
  const hasWhatsApp = Boolean(config.contact.whatsappHref);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-12px_40px_-24px_rgba(0,0,0,0.35)] backdrop-blur-xl xl:hidden">
      <div
        className={`mx-auto grid max-w-lg gap-2 px-3 py-2.5 ${
          hasWhatsApp ? "grid-cols-3" : "grid-cols-2"
        }`}
      >
        <a
          href={config.contact.phoneHref}
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-ink px-3 text-xs font-bold text-surface"
        >
          <Icon name="phone" className="h-4 w-4" />
          Call
        </a>
        {hasWhatsApp ? (
          <a
            href={config.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-line bg-surface px-3 text-xs font-bold text-ink"
          >
            <Icon name="message" className="h-4 w-4 text-brand" />
            WhatsApp
          </a>
        ) : null}
        <Link
          href={withRegion("/contact", region)}
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-line bg-brand-soft px-3 text-xs font-bold text-ink"
        >
          <Icon name="calendar" className="h-4 w-4 text-brand" />
          Book
        </Link>
      </div>
    </div>
  );
}
