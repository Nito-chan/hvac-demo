import type {
  Faq,
  NicheConfig,
  RegionId,
  Service,
} from "@/config/types";
import { withRegion } from "@/lib/region";

function siteBase(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/$/,
    "",
  );
}

function absolute(href: string, region: RegionId): string {
  return `${siteBase()}${withRegion(href, region)}`;
}

function phoneValue(href: string): string {
  return href.replace(/^tel:/, "");
}

export function localBusinessSchema(
  config: NicheConfig,
  region: RegionId,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": config.schemaType,
    "@id": absolute("/", region),
    name: config.business.name,
    description: config.business.description,
    slogan: config.business.tagline,
    url: absolute("/", region),
    telephone: phoneValue(config.contact.phoneHref),
    email: config.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: config.contact.city,
      addressRegion: config.contact.state,
      addressCountry: config.contact.countryCode,
    },
    areaServed: config.areas.map((area) => ({
      "@type": "City",
      name: `${area.name}, ${area.state}`,
    })),
    knowsAbout: config.services.map((service) => service.name),
    disambiguatingDescription:
      "Fictional demonstration business. Content, reviews and prices are sample data.",
  };
}

export function faqSchema(faqs: Faq[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function serviceSchema(
  service: Service,
  config: NicheConfig,
  region: RegionId,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: config.nicheLabel,
    url: absolute(`/services/${service.slug}`, region),
    provider: {
      "@type": config.schemaType,
      name: config.business.name,
      telephone: phoneValue(config.contact.phoneHref),
      address: {
        "@type": "PostalAddress",
        addressLocality: config.contact.city,
        addressRegion: config.contact.state,
        addressCountry: config.contact.countryCode,
      },
    },
    areaServed: config.areas.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
  };
}
