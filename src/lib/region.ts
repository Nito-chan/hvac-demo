export const DEFAULT_REGION = "us" as const;

const DEFAULT_REGION_BY_COUNTRY: Record<string, "us" | "in"> = {
  US: "us",
  IN: "in",
};

export function parseRegion(
  value: string | string[] | undefined | null,
): "us" | "in" {
  const raw = Array.isArray(value) ? value[0] : value;
  const normalized = raw?.trim().toLowerCase();

  if (normalized === "in" || normalized === "india") {
    return "in";
  }

  return "us";
}

export function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  );
}

/**
 * Preserve the active region on every internal link. Explicit `?region=us` is
 * intentional: it makes shared URLs deterministic and avoids a switch back to
 * the default region losing the visitor's place.
 */
export function withRegion(href: string, region: "us" | "in"): string {
  if (!href || isExternalHref(href)) {
    return href;
  }

  if (!href.startsWith("/")) {
    return href;
  }

  const hashIndex = href.indexOf("#");
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  const withoutHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const queryIndex = withoutHash.indexOf("?");
  const pathname =
    queryIndex >= 0 ? withoutHash.slice(0, queryIndex) : withoutHash;
  const query = queryIndex >= 0 ? withoutHash.slice(queryIndex + 1) : "";

  const params = new URLSearchParams(query);
  params.set("region", region);

  return `${pathname || "/"}?${params.toString()}${hash}`;
}

export function regionLabel(region: "us" | "in"): string {
  return region === "in" ? "India" : "United States";
}

export function regionShortLabel(region: "us" | "in"): string {
  return region === "in" ? "IN" : "US";
}

export function regionFromCountryCode(countryCode: string): "us" | "in" {
  return DEFAULT_REGION_BY_COUNTRY[countryCode.toUpperCase()] ?? DEFAULT_REGION;
}
