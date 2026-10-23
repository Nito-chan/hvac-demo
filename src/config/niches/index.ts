import type { NicheId, NicheModule } from "@/config/types";
import { electricianModule } from "./electrician";
import { hvacModule } from "./hvac";
import { pestModule } from "./pest";
import { plumbingModule } from "./plumbing";
import { roofingModule } from "./roofing";

export const NICHE_IDS: NicheId[] = [
  "hvac",
  "plumbing",
  "roofing",
  "electrician",
  "pest",
];

export const niches: Record<NicheId, NicheModule> = {
  hvac: hvacModule,
  plumbing: plumbingModule,
  roofing: roofingModule,
  electrician: electricianModule,
  pest: pestModule,
};

export function isNicheId(value: unknown): value is NicheId {
  return typeof value === "string" && NICHE_IDS.includes(value as NicheId);
}
