import type { NicheModule } from "@/config/types";
import { plumbingIn } from "./in";
import { plumbingShared } from "./shared";
import { plumbingUs } from "./us";

export const plumbingModule: NicheModule = {
  shared: plumbingShared,
  regions: {
    us: plumbingUs,
    in: plumbingIn,
  },
};
