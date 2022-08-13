export const colorOptions = {
  blue1: "#99c1f1",
  blue2: "#62a0ea",
  blue3: "#3584e4",
  blue4: "#1c71d8",
  blue5: "#1a5fb4",

  green1: "#8ff0a4",
  green2: "#57e389",
  green3: "#33d17a",
  green4: "#2ec27e",
  green5: "#26a269",

  yellow1: "#f9f06b",
  yellow2: "#f8e45c",
  yellow3: "#f6d32d",
  yellow4: "#f5c211",
  yellow5: "#e5a50a",

  orange1: "#ffbe6f",
  orange2: "#ffa348",
  orange3: "#ff7800",
  orange4: "#e66100",
  orange5: "#c64600",

  red1: "#f66151",
  red2: "#ed333b",
  red3: "#e01b24",
  red4: "#c01c28",
  red5: "#a51d2d",

  purple1: "#dc8add",
  purple2: "#c061cb",
  purple3: "#9141ac",
  purple4: "#813d9c",
  purple5: "#613583",

  brown1: "#cdab8f",
  brown2: "#b5835a",
  brown3: "#986a44",
  brown4: "#865e3c",
  brown5: "#63452c",

  light1: "#E5E5E5",
  light2: "#CCCCCC",
  light3: "#B2B2B2",
  light4: "#999999",
  light5: "#7F7F7F",

  dark1: "#7F7F7F",
  dark2: "#666666",
  dark3: "#4C4C4C",
  dark4: "#333333",
  dark5: "#191919",
};

export const colorBase = {
  ...colorOptions,
  OXFORD_BLUE: "#001B33",
  SLATE_GRAY: "#667b88",
  CELADON_BLUE: "#007EA7",
  GAINSBORO: "#CCDBDC",
  CULTURED: "#EDEDED",

  DEFAULT: colorOptions.light3,
  PRIMARY: colorOptions.blue4,
  SECONDARY: colorOptions.dark2,
  SUCCESS: colorOptions.green3,
  ERROR: colorOptions.red3,
  WARNING: colorOptions.orange2,
  INFO: colorOptions.blue3,

  LIGHT: "#EDEDED",
  DARK: "#001B33",
  WHITE: "#ffffff",
  BLACK: "#000000",
};

/// ---------- coloriTema ----------------------
export const darkTheme = {
  // ...colorOptions,
  ...colorBase,
  DEFAULT_BACKGROUND_COLOR: colorBase.OXFORD_BLUE,
  PRIMARY_BACKGROUND_COLOR: colorBase.CELADON_BLUE,

  PRIMARY_TEXT_COLOR: colorBase.light1,
  SECONDARY_TEXT_COLOR: colorBase.light1,

  PRIMARY_TEXT_BACKGROUND_COLOR: colorBase.dark2,
  SECONDARY_TEXT_BACKGROUND_COLOR: colorBase.dark3,
};
export const lightTheme = {
  // ...colorOptions,
  ...colorBase,
  DEFAULT_BACKGROUND_COLOR: colorBase.CULTURED,
  PRIMARY_BACKGROUND_COLOR: colorBase.GAINSBORO,

  PRIMARY_TEXT_COLOR: colorBase.DARK,
  SECONDARY_TEXT_COLOR: colorBase.DARK,

  PRIMARY_TEXT_BACKGROUND_COLOR: colorBase.light3,
  SECONDARY_TEXT_BACKGROUND_COLOR: colorBase.light4,
};
/// ------------------------------------------------------------------

export default { lightTheme, darkTheme, colorBase, colorOptions };
