import type { NicheConfig, NicheModule, RegionId } from "./types";

export function getConfig(module: NicheModule, region: RegionId): NicheConfig {
  const details = module.regions[region];

  const services = module.shared.services
    .filter((service) => !service.regions || service.regions.includes(region))
    .map((service) => {
      const pricing = details.servicePricing[service.slug];
      return pricing ? { ...service, ...pricing } : service;
    });

  const featurePages = module.shared.featurePages.filter(
    (page) => !page.regions || page.regions.includes(region),
  );

  const faqs = [...module.shared.faqs, ...(details.extraFaqs ?? [])];

  return {
    ...module.shared,
    ...details,
    services,
    featurePages,
    faqs,
  };
}
