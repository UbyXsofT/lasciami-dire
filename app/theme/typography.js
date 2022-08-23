const fontFamily = {
  CANTARELL: "Cantarell",
};

const unit_M = "px";

// example fontSizes scale as an array
const fontSizes = [12, 14, 16, 20, 24, 32];
const fontSize = {
  S: fontSizes[0],
  M: fontSizes[1],
  L: fontSizes[2],
  XL: fontSizes[3],
  XXL: fontSizes[4],
  XXXL: fontSizes[5],
  H1: fontSizes[5],
  H2: fontSizes[4],
  H3: fontSizes[3],
  H4: fontSizes[2],
  H5: fontSizes[1],
  H6: fontSizes[0],
};

// example lineHeights scale corrisponede all'indice del font size (fontSize=12 <> lineHeight_18)
const lineHeights = ["18px", "21px", "24px", "30px", "36px", "48px"];
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
