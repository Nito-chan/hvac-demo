import type { NicheModule } from "@/config/types";
import { hvacIn } from "./in";
import { hvacShared } from "./shared";
import { hvacUs } from "./us";

export const hvacModule: NicheModule = {
  shared: hvacShared,
  regions: {
    us: hvacUs,
    in: hvacIn,
  },
};
