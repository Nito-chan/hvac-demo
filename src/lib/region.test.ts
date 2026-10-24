import { describe, expect, it } from "vitest";
import {
  isExternalHref,
  parseRegion,
  regionFromCountryCode,
  withRegion,
} from "./region";

describe("parseRegion", () => {
  it("defaults to the US", () => {
    expect(parseRegion(undefined)).toBe("us");
    expect(parseRegion(null)).toBe("us");
    expect(parseRegion("")).toBe("us");
    expect(parseRegion("fr")).toBe("us");
  });

  it("accepts case and whitespace variants for India", () => {
    expect(parseRegion("in")).toBe("in");
    expect(parseRegion(" IN ")).toBe("in");
    expect(parseRegion("India")).toBe("in");
    expect(parseRegion(["in", "us"])).toBe("in");
  });

  it("keeps an explicit US selection", () => {
    expect(parseRegion("us")).toBe("us");
    expect(parseRegion(["us"])).toBe("us");
  });
});

describe("withRegion", () => {
  it("adds the region to internal paths", () => {
    expect(withRegion("/services", "in")).toBe("/services?region=in");
    expect(withRegion("/", "us")).toBe("/?region=us");
  });

  it("replaces an existing region without losing other query values", () => {
    expect(withRegion("/contact?service=AC%20repair&region=us", "in")).toBe(
      "/contact?service=AC+repair&region=in",
    );
  });

  it("preserves hash fragments", () => {
    expect(withRegion("/contact#request", "in")).toBe(
      "/contact?region=in#request",
    );
    expect(withRegion("/contact?utm_source=demo#request", "us")).toBe(
      "/contact?utm_source=demo&region=us#request",
    );
  });

  it("does not rewrite external, phone, email or hash links", () => {
    expect(withRegion("https://example.com", "in")).toBe(
      "https://example.com",
    );
    expect(withRegion("tel:+15550100142", "in")).toBe("tel:+15550100142");
    expect(withRegion("mailto:hello@example.com", "in")).toBe(
      "mailto:hello@example.com",
    );
    expect(withRegion("#request", "in")).toBe("#request");
    expect(withRegion("", "in")).toBe("");
    expect(withRegion("relative/path", "in")).toBe("relative/path");
  });
});

describe("link and country helpers", () => {
  it("classifies external links", () => {
    expect(isExternalHref("https://example.com")).toBe(true);
    expect(isExternalHref("http://example.com")).toBe(true);
    expect(isExternalHref("tel:+15550100142")).toBe(true);
    expect(isExternalHref("mailto:hello@example.com")).toBe(true);
    expect(isExternalHref("#request")).toBe(true);
    expect(isExternalHref("/services")).toBe(false);
  });

  it("maps known country codes and falls back safely", () => {
    expect(regionFromCountryCode("IN")).toBe("in");
    expect(regionFromCountryCode("us")).toBe("us");
    expect(regionFromCountryCode("GB")).toBe("us");
  });
});
