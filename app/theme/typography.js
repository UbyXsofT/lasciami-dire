const fontFamily = {
  CANTARELL: "Cantarell",
};

const unit_M = "px";

// example fontSizes scale as an array
const fontSizes = [12, 14, 16, 20, 24, 32];
const fontSize = {
  S: fontSizes[0] + unit_M,
  M: fontSizes[1] + unit_M,
  L: fontSizes[2] + unit_M,
  XL: fontSizes[3] + unit_M,
  XXL: fontSizes[4] + unit_M,
  XXXL: fontSizes[5] + unit_M,
  H1: fontSizes[5] + unit_M,
  H2: fontSizes[4] + unit_M,
  H3: fontSizes[3] + unit_M,
  H4: fontSizes[2] + unit_M,
  H5: fontSizes[1] + unit_M,
  H6: fontSizes[0] + unit_M,
};

// example lineHeights scale corrisponede all'indice del font size (fontSize=12 <> lineHeight_18)
const lineHeights = [18, 21, 24, 30, 36, 48];
const lineHeight = {
  S: lineHeights[0] + unit_M,
  M: lineHeights[1] + unit_M,
  L: lineHeights[2] + unit_M,
  XL: lineHeights[3] + unit_M,
  XXL: lineHeights[4] + unit_M,
  XXXL: lineHeights[5] + unit_M,
};

// example space scale with aliases
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const letterSpacing = {
  NONE: space[0] + unit_M,
  XXS: space[1] + unit_M,
  XS: space[2] + unit_M,
  S: space[3] + unit_M,
  M: space[4] + unit_M,
  L: space[5] + unit_M,
  XL: space[6] + unit_M,
  XXL: space[7] + unit_M,
  XXXL: space[8] + unit_M,
};

const fontWeight = {
  XXXS: 100,
  XXS: 200,
  XS: 300,
  S: 400, // normal
  M: 500,
  L: 600,
  XL: 700, // bold
  XXL: 800,
  XXXL: 900,
};

//export const typography = { lineHeight, fontSize, letterSpacing, fontFamily };
export default { lineHeight, fontSize, letterSpacing, fontFamily, fontWeight };
