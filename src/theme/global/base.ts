import { Interpolation, Theme } from "@emotion/react";

const base: Interpolation<Theme> = ({ fonts }) => ({
  "*": {
    boxSizing: "border-box",
  },

  "html, body, #root": {
    height: "100%",
  },

  html: {
    fontSize: `${fonts.initialFontSize}px`,
  },

  body: {
    WebkitFontS: "antialiased",
    fontFamily: "JetBrainsMono",
    margin: 0,
  },

  svg: {
    height: "100%",
    width: "100%",
  },

  img: {
    maxWidth: "100%",
    verticalAlign: "middle",
  },

  button: {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
});

export { base };
