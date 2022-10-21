import { createStitches } from "@stitches/react";
import { Colors } from "./theme/Colors";

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: Colors,
    shadows: {},
    fonts: {},
    fontSizes: {},
    lineHeights: {},
    fontWeights: {},
    letterSpacings: {},
    space: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    zIndices: {},
    transitions: {},
  },
})

export const globalStyles = globalCss({
  '*': {
  'margin': 0,
  'padding': 0,
  'text-decoration': 'none',
  'boxSizing': 'border-box',
  }
})
  