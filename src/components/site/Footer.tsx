import Link from "next/link";
import { BrandMark } from "@/components/site/Logo";
import { Icon } from "@/components/ui/Icon";
import type { NicheConfig } from "@/config/types";
import { withRegion } from "@/lib/region";

export function Footer({
  config,
  region,
}: {
  config: NicheConfig;
  region: "us" | "in";
}) {
  const year = new Date().getFullYear();
  const footerServices = config.services.slice(0, 5);
  const footerAreas = config.areas.slice(0, 5);

  return (
    <footer className="border-t border-white/10 bg-ink text-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Link
              href={withRegion("/", region)}
              className="inline-flex items-center gap-3"
            >
              <BrandMark niche={config.niche} className="h-11 w-11 text-brand" />
              <span>
                <span className="block font-display text-lg leading-tight text-surface">
                  {config.business.name}
                </span>
                <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.22em] text-surface/50">
                  {config.nicheLabel}
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-surface/65">
              {config.business.tagline} {config.regionLabel} demo, built to show
              a clearer home-service experience.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href={config.contact.phoneHref}
                className="flex items-center gap-2.5 font-semibold text-surface/85 transition hover:text-accent"
              >
                <Icon name="phone" className="h-4 w-4 text-accent" />
                {config.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${config.contact.email}`}
                className="flex items-center gap-2.5 text-surface/65 transition hover:text-surface"
              >
                <Icon name="mail" className="h-4 w-4 text-accent" />
                {config.contact.email}
              </a>
              <p className="flex items-start gap-2.5 text-surface/65">
                <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  {config.contact.city}, {config.contact.state}
                  <br />
                  {config.contact.country}
                </span>
              </p>
              <p className="flex items-start gap-2.5 text-surface/65">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  {config.contact.hours}
                  {config.contact.emergencyHours ? (
                    <>
                      <br />
                      {config.contact.emergencyHours}
                    </>
                  ) : null}
                </span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-surface">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={withRegion(`/services/${service.slug}`, region)}
                    className="text-surface/65 transition hover:text-surface"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={withRegion("/services", region)}
                  className="inline-flex items-center gap-1 font-semibold text-accent transition hover:text-surface"
                >
                  All services
                  <Icon name="arrowRight" className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-surface">
              Service area
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={withRegion(`/areas/${area.slug}`, region)}
                    className="text-surface/65 transition hover:text-surface"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={withRegion("/areas", region)}
                  className="inline-flex items-center gap-1 font-semibold text-accent transition hover:text-surface"
                >
                  All areas
                  <Icon name="arrowRight" className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-surface">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "Pricing", href: "/pricing" },
                { label: "Reviews", href: "/reviews" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy", href: "/privacy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={withRegion(link.href, region)}
                    className="text-surface/65 transition hover:text-surface"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-6 shrink-0 items-center rounded-full border border-accent/40 bg-accent/15 px-2 text-[9px] font-bold uppercase tracking-[0.16em] text-accent">
              Demo
            </span>
            <div>
              <p className="text-xs leading-relaxed text-surface/60">
                {config.demo.disclaimer}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-surface">
                {config.legalNote} Reviews are sample content and are not
                presented as verified customer feedback.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-[11px] text-surface sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {config.business.name}. Fictional demo. No real bookings.
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>{config.regionLabel}</span>
            <span aria-hidden="true">·</span>
            <Link
              href={withRegion("/privacy", region)}
              className="transition hover:text-surface"
            >
              Privacy & demo notes
            </Link>
            <span aria-hidden="true">·</span>
            <a href="#top" className="transition hover:text-surface">
              Back to top
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
