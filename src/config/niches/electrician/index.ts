import type { NicheModule } from "@/config/types";
import { electricianIn } from "./in";
import { electricianShared } from "./shared";
import { electricianUs } from "./us";

export const electricianModule: NicheModule = {
  shared: electricianShared,
  regions: {
    us: electricianUs,
    in: electricianIn,
  },
};
