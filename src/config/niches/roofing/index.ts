import type { NicheModule } from "@/config/types";
import { roofingIn } from "./in";
import { roofingShared } from "./shared";
import { roofingUs } from "./us";

export const roofingModule: NicheModule = {
  shared: roofingShared,
  regions: {
    us: roofingUs,
    in: roofingIn,
  },
};
