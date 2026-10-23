import type { RegionId } from "./types";

export const REGION_DETAILS: Record<
  RegionId,
  { label: string; shortLabel: string; country: string; locale: string }
> = {
  us: {
    label: "United States",
    shortLabel: "US",
    country: "United States",
    locale: "en-US",
  },
  in: {
    label: "India",
    shortLabel: "IN",
    country: "India",
    locale: "en-IN",
  },
};

export const REGION_IDS: RegionId[] = ["us", "in"];

export function isRegionId(value: unknown): value is RegionId {
  return value === "us" || value === "in";
}
