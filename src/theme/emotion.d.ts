import "@emotion/react";

import { TColors, TDevices, TFonts } from "./variables/types";

declare module "@emotion/react" {
  interface TRem<P = number> {
    (px: P): string;
  }

  export interface Theme {
    colors: TColors;
    devices: TDevices;
    fonts: TFonts;
    rem: TRem;
  }
}
