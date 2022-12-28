import { Interpolation, Theme } from "@emotion/react";

const globalStyles: Interpolation<Theme> = ({ fonts }) => ({
  [`
    div, button, span, applet, object, iframe, 
    h1, h2, h3, h4, h5, h6, p, blockquote, pre, 
    a, abbr, acronym, address, big, cite, code, 
    del, dfn, em, img, ins, kbd, q, s, samp, small,
    strike, strong, sub, sup, tt, var, b, u, i,
    center, dl, dt, dd, ol, ul, li, fieldset, form,
    label, legend, table, caption, tbody, tfoot,
    thead, tr, th, td, article, aside, canvas,
    details, embed, figure, figcaption, footer,
    header, hgroup, menu, nav, output, ruby,
    section, summary, time, mark, audio, video
  `]: {
    margin: 0,
    padding: 0,
    border: 0,
    font: "inherit",
    verticalAlign: "baseline",
  },

  [`
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section
  `]: {
    display: "block",
  },

  "ol, ul": {
    listStyle: "none",
  },

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
    WebkitFontSmoothing: "antialiased",
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

export { globalStyles };
