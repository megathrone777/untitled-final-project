import styled from "@emotion/styled";
import { Theme, css, keyframes } from "@emotion/react";

import { GlobalStyle } from "./global-style";
import { colors, devices, fonts } from "./variables";

const theme: Theme = {
  colors,
  devices,
  fonts,
  rem: (px: number): string => {
    const baseFontSize = 16;

    return `${px / baseFontSize}rem`;
  },
};

export { GlobalStyle, css, keyframes, styled, theme };
export type { Theme };
