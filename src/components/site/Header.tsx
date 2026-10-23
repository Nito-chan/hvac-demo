import Link from "next/link";
import { Logo } from "@/components/site/Logo";
import { MobileNav } from "@/components/site/MobileNav";
import { RegionSwitcher } from "@/components/site/RegionSwitcher";
import { Icon } from "@/components/ui/Icon";
import type { IconName, NicheConfig } from "@/config/types";
import { withRegion } from "@/lib/region";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: IconName;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "/services", icon: "wrench" },
  { label: "Areas", href: "/areas", icon: "mapPin" },
  { label: "Pricing", href: "/pricing", icon: "price" },
  { label: "Reviews", href: "/reviews", icon: "message" },
  { label: "Gallery", href: "/gallery", icon: "layers" },
  { label: "About", href: "/about", icon: "users" },
  { label: "Contact", href: "/contact", icon: "phone" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header({
  config,
  region,
  activePath,
}: {
  config: NicheConfig;
  region: "us" | "in";
  activePath: string;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Logo
          niche={config.niche}
          region={region}
          businessName={config.business.name}
          nicheLabel={config.nicheLabel}
          className="max-w-[13rem] sm:max-w-[17rem]"
        />

        <nav
          className="ml-4 hidden items-center gap-0.5 xl:flex"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(activePath, item.href);
            return (
              <Link
                key={item.href}
                href={withRegion(item.href, region)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-[13px] font-semibold transition",
                  active
                    ? "bg-brand-soft text-ink"
                    : "text-ink-soft hover:bg-surface-2 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <RegionSwitcher
            region={region}
            activePath={activePath}
            className="hidden sm:inline-flex"
          />
          <a
            href={config.contact.phoneHref}
            className="hidden h-10 items-center gap-2 rounded-full border border-line px-3 text-xs font-bold text-ink transition hover:bg-surface-2 md:inline-flex"
            aria-label={`Call ${config.business.name} on ${config.contact.phoneDisplay}`}
          >
            <Icon name="phone" className="h-3.5 w-3.5 text-brand" />
            <span className="hidden lg:inline">{config.contact.phoneDisplay}</span>
            <span className="lg:hidden">Call</span>
          </a>
          <Link
            href={withRegion("/contact", region)}
            className="hidden h-10 items-center gap-2 rounded-full bg-ink px-4 text-xs font-bold text-surface transition hover:bg-ink-soft lg:inline-flex"
          >
            Book a visit
            <Icon name="arrowRight" className="h-3.5 w-3.5" />
          </Link>
          <MobileNav
            items={NAV_ITEMS}
            region={region}
            activePath={activePath}
            phoneDisplay={config.contact.phoneDisplay}
            phoneHref={config.contact.phoneHref}
            whatsappHref={config.contact.whatsappHref}
            businessName={config.business.name}
            nicheLabel={config.nicheLabel}
            niche={config.niche}
          />
        </div>
      </div>
    </header>
  );
}
