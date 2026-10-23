import "server-only";

import { getConfig } from "./build";
import { isNicheId, niches } from "./niches";
import type { NicheConfig, NicheId, NicheModule, RegionId } from "./types";

export const DEFAULT_NICHE: NicheId = "hvac";

export function getActiveNiche(): NicheId {
  const raw = process.env.NEXT_PUBLIC_NICHE?.trim().toLowerCase();
  return isNicheId(raw) ? raw : DEFAULT_NICHE;
}

export function getActiveNicheModule(): NicheModule {
  return niches[getActiveNiche()];
}

export function getSiteConfig(region: RegionId): NicheConfig {
  return getConfig(getActiveNicheModule(), region);
}

export function getAllNicheSlugs(): Record<NicheId, string[]> {
  return Object.fromEntries(
    Object.entries(niches).map(([niche, module]) => [
      niche,
      module.shared.services.map((service) => service.slug),
    ]),
  ) as Record<NicheId, string[]>;
}
