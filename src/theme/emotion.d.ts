import "@emotion/react";

import { TColors, TDevices, TFonts } from "./variables/types";

declare module "@emotion/react" {
  export interface Theme {
    colors: TColors;
    devices: TDevices;
    fonts: TFonts;
    rem: (px: number) => string;
  }
}
