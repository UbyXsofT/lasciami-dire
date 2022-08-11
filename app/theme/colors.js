export const colorOptions = {
  blue: {
    name: "blue",
    1: "#99c1f1",
    2: "#62a0ea",
    3: "#3584e4",
    4: "#1c71d8",
    5: "#1a5fb4",
  },
  green: {
    name: "green",
    1: "#8ff0a4",
    2: "#57e389",
    3: "#33d17a",
    4: "#2ec27e",
    5: "#26a269",
  },
  yellow: {
    name: "yellow",
    1: "#f9f06b",
    2: "#f8e45c",
    3: "#f6d32d",
    4: "#f5c211",
    5: "#e5a50a",
  },
  orange: {
    name: "orange",
    1: "#ffbe6f",
    2: "#ffa348",
    3: "#ff7800",
    4: "#e66100",
    5: "#c64600",
  },
  red: {
    name: "red",
    1: "#f66151",
    2: "#ed333b",
    3: "#e01b24",
    4: "#c01c28",
    5: "#a51d2d",
  },
  purple: {
    name: "purple",
    1: "#dc8add",
    2: "#c061cb",
    3: "#9141ac",
    4: "#813d9c",
    5: "#613583",
  },
  brown: {
    name: "brown",
    1: "#cdab8f",
    2: "#b5835a",
    3: "#986a44",
    4: "#865e3c",
    5: "#63452c",
  },
  light: {
    name: "light",
    1: "#E5E5E5",
    2: "#CCCCCC",
    3: "#B2B2B2",
    4: "#999999",
    5: "#7F7F7F",
  },
  dark: {
    name: "dark",
    1: "#7F7F7F",
    2: "#666666",
    3: "#4C4C4C",
    4: "#333333",
    5: "#191919",
  },
};

export const colorBase = {
  ...colorOptions,
  OXFORD_BLUE: "#001B33",
  SLATE_GRAY: "#667b88",
  CELADON_BLUE: "#007EA7",
  GAINSBORO: "#CCDBDC",
  CULTURED: "#EDEDED",

  DEFAULT: colorOptions.light[3],
  PRIMARY: colorOptions.blue[4],
  SECONDARY: colorOptions.dark[2],
  SUCCESS: colorOptions.green[3],
  ERROR: colorOptions.red[3],
  WARNING: colorOptions.orange[2],
  INFO: colorOptions.blue[3],

  LIGHT: "#EDEDED",
  DARK: "#001B33",
  WHITE: "#ffffff",
  BLACK: "#000000",
};

/// ---------- coloriTema ----------------------
export const darkTheme = {
  ...colorOptions,
  ...colorBase,
  DEFAULT_BACKGROUND_COLOR: colorBase.OXFORD_BLUE,
  PRIMARY_BACKGROUND_COLOR: colorOptions.dark[4],

  PRIMARY_TEXT_COLOR: colorOptions.light[1],
  SECONDARY_TEXT_COLOR: colorOptions.light[4],

  PRIMARY_TEXT_BACKGROUND_COLOR: colorOptions.dark[2],
  SECONDARY_TEXT_BACKGROUND_COLOR: colorOptions.dark[3],
};
export const lightTheme = {
  ...colorOptions,
  ...colorBase,
  DEFAULT_BACKGROUND_COLOR: colorBase.CULTURED,
  PRIMARY_BACKGROUND_COLOR: colorOptions.dark[4],

  PRIMARY_TEXT_COLOR: colorOptions.dark[3],
  SECONDARY_TEXT_COLOR: colorOptions.dark[2],

  PRIMARY_TEXT_BACKGROUND_COLOR: colorOptions.light[3],
  SECONDARY_TEXT_BACKGROUND_COLOR: colorOptions.light[4],
};
/// ------------------------------------------------------------------

export default { lightTheme, darkTheme, colorBase, colorOptions };
