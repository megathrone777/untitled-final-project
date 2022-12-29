import styled from "@emotion/styled";
import { Theme, css, keyframes } from "@emotion/react";

import { globalStyles } from "./global-styles";
import { colors, devices, fonts } from "./variables";

const theme: Theme = {
  colors,
  devices,
  fonts,
  rem: (px) => {
    const baseFontSize = 16;

    return `${px / baseFontSize}rem`;
  },
};

export { globalStyles, css, keyframes, styled, theme };
export type { Theme };
