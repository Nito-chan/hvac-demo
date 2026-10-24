import { describe, expect, it } from "vitest";
import { getConfig } from "./build";
import { NICHE_IDS, niches } from "./niches";

describe("getConfig", () => {
  it("filters regional services for the US and India", () => {
    const us = getConfig(niches.roofing, "us");
    const india = getConfig(niches.roofing, "in");

    const usSlugs = us.services.map((service) => service.slug);
    const indiaSlugs = india.services.map((service) => service.slug);

    expect(usSlugs).toContain("gutters");
    expect(usSlugs).not.toContain("terrace-waterproofing");
    expect(indiaSlugs).toContain("terrace-waterproofing");
    expect(indiaSlugs).not.toContain("gutters");
  });

  it("filters region-only feature pages", () => {
    const us = getConfig(niches.roofing, "us");
    const india = getConfig(niches.roofing, "in");

    expect(us.featurePages.map((page) => page.slug)).toContain(
      "roof-insurance-claims",
    );
    expect(us.featurePages.map((page) => page.slug)).not.toContain(
      "terrace-waterproofing",
    );
    expect(india.featurePages.map((page) => page.slug)).toContain(
      "terrace-waterproofing",
    );
    expect(india.featurePages.map((page) => page.slug)).not.toContain(
      "roof-insurance-claims",
    );
  });

  it("merges regional pricing without mutating shared content", () => {
    const sharedService = niches.hvac.shared.services.find(
      (service) => service.slug === "ac-repair",
    );
    const before = sharedService?.priceFrom;

    const us = getConfig(niches.hvac, "us");
    const india = getConfig(niches.hvac, "in");
    const usService = us.services.find((service) => service.slug === "ac-repair");
    const indiaService = india.services.find(
      (service) => service.slug === "ac-repair",
    );

    expect(usService?.priceFrom).toMatch(/\$/);
    expect(indiaService?.priceFrom).toMatch(/₹/);
    expect(sharedService?.priceFrom).toBe(before);
  });

  it("returns the selected regional business and region", () => {
    const us = getConfig(niches.hvac, "us");
    const india = getConfig(niches.hvac, "in");

    expect(us.region).toBe("us");
    expect(india.region).toBe("in");
    expect(us.business.name).toBe("NorthPeak Heating & Air");
    expect(india.business.name).toBe("CoolNest AC Care");
    expect(us.currency).toBe("USD");
    expect(india.currency).toBe("INR");
  });

  it("keeps services, areas and feature pages unique in every build", () => {
    for (const niche of NICHE_IDS) {
      for (const region of ["us", "in"] as const) {
        const config = getConfig(niches[niche], region);
        const serviceSlugs = config.services.map((service) => service.slug);
        const areaSlugs = config.areas.map((area) => area.slug);
        const pageSlugs = config.featurePages.map((page) => page.slug);

        expect(config.services.length).toBeGreaterThan(0);
        expect(config.areas.length).toBeGreaterThan(0);
        expect(config.plans.length).toBeGreaterThan(0);
        expect(config.reviews.length).toBeGreaterThan(0);
        expect(config.gallery.length).toBeGreaterThan(0);
        expect(config.faqs.length).toBeGreaterThan(0);
        expect(new Set(serviceSlugs).size).toBe(serviceSlugs.length);
        expect(new Set(areaSlugs).size).toBe(areaSlugs.length);
        expect(new Set(pageSlugs).size).toBe(pageSlugs.length);
        expect(config.contact.phoneHref).toMatch(/^tel:/);
        expect(config.business.name).not.toBe("");
      }
    }
  });

  it("uses a distinct fictional business for every niche and region", () => {
    const names = NICHE_IDS.flatMap((niche) => [
      getConfig(niches[niche], "us").business.name,
      getConfig(niches[niche], "in").business.name,
    ]);

    expect(new Set(names).size).toBe(names.length);
  });
});
