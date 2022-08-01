const fontFamily = {
  CANTARELL: "Cantarell",
};

// example fontSizes scale as an array
const fontSizes = [12, 14, 16, 20, 24, 32];
const fontSize = {
  S: fontSizes[0],
  M: fontSizes[1],
  L: fontSizes[2],
  XL: fontSizes[3],
  XXL: fontSizes[4],
  XXXL: fontSizes[5],
};

// example lineHeights scale corrisponede all'indeci del font size
const lineHeights = [18, 21, 24, 30, 36, 48];
const lineHeight = {
  S: lineHeights[0],
  M: lineHeights[1],
  L: lineHeights[2],
  XL: lineHeights[3],
  XXL: lineHeights[4],
  XXXL: lineHeights[5],
};

// example space scale with aliases
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const letterSpacing = {
  NONE: space[0],
  XXS: space[1],
  XS: space[2],
  S: space[3],
  M: space[4],
  L: space[5],
  XL: space[6],
  XXL: space[7],
  XXXL: space[8],
};

export const typography = { lineHeight, fontSize, letterSpacing, fontFamily };
