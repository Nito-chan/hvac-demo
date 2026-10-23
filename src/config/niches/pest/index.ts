import type { NicheModule } from "@/config/types";
import { pestIn } from "./in";
import { pestShared } from "./shared";
import { pestUs } from "./us";

export const pestModule: NicheModule = {
  shared: pestShared,
  regions: {
    us: pestUs,
    in: pestIn,
  },
};
