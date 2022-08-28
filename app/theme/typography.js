const fontFamily = {
  CANTARELL: "Cantarell",
};

// example fontSizes scale as an array
const fontSizes = [12, 14, 16, 20, 24, 32, 40, 48];
const fontSize = {
  XXS: fontSizes[0],
  XS: fontSizes[1],
  S: fontSizes[2],
  M: fontSizes[3],
  L: fontSizes[4],
  XL: fontSizes[5],
  XXL: fontSizes[6],
  XXXL: fontSizes[7],

  H1Max: fontSizes[7],
  H1: fontSizes[6],
  H2Max: fontSizes[5],
  H2: fontSizes[4],
  H3: fontSizes[3],
  H4: fontSizes[2],
  H5: fontSizes[1],
  H6: fontSizes[0],
};

// example lineHeights scale corrisponede all'indice del font size (fontSize=12 <> lineHeight_18)
const lineHeights = [
  "18px",
  "21px",
  "24px",
  "30px",
  "36px",
  "48px",
  "56px",
  "72px",
];
const lineHeight = {
  XXS: lineHeights[0],
  XS: lineHeights[1],
  S: lineHeights[2],
  M: lineHeights[3],
  L: lineHeights[4],
  XL: lineHeights[5],
  XXL: lineHeights[6],
  XXXL: lineHeights[7],
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

const fontWeight = {
  XXXS: "100",
  XXS: "200",
  XS: "300",
  S: "400", // normal
  M: "500",
  L: "600",
  XL: "700", // bold
  XXL: "800",
  XXXL: "900",
};

//export const typography = { lineHeight, fontSize, letterSpacing, fontFamily };
export default { lineHeight, fontSize, letterSpacing, fontFamily, fontWeight };
