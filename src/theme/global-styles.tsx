import { Interpolation, Theme } from "@emotion/react";

import { base, reset } from "./global";

const globalStyles: Interpolation<Theme> = [reset, base];

export { globalStyles };
