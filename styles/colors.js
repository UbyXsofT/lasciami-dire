const gnome = {
  blue: {
    1: "#99c1f1",
    2: "#62a0ea",
    3: "#3584e4",
    4: "#1c71d8",
    5: "#1a5fb4",
  },
  green: {
    1: "#8ff0a4",
    2: "#57e389",
    3: "#33d17a",
    4: "#2ec27e",
    5: "#26a269",
  },
  yellow: {
    1: "#f9f06b",
    2: "#f8e45c",
    3: "#f6d32d",
    4: "#f5c211",
    5: "#e5a50a",
  },
  orange: {
    1: "#ffbe6f",
    2: "#ffa348",
    3: "#ff7800",
    4: "#e66100",
    5: "#c64600",
  },
  red: {
    1: "#f66151",
    2: "#ed333b",
    3: "#e01b24",
    4: "#c01c28",
    5: "#a51d2d",
  },
  purple: {
    1: "#dc8add",
    2: "#c061cb",
    3: "#9141ac",
    4: "#813d9c",
    5: "#613583",
  },
  brown: {
    1: "#cdab8f",
    2: "#b5835a",
    3: "#986a44",
    4: "#865e3c",
    5: "#63452c",
  },
  light: {
    1: "#ffffff",
    2: "#f6f5f4",
    3: "#deddda",
    4: "#c0bfbc",
    5: "#9a9996",
  },
  dark: {
    1: "#77767b",
    2: "#5e5c64",
    3: "#3d3846",
    4: "#241f31",
    5: "#000000",
  },
};

const OXFORD_BLUE = "#001B33";
const SLATE_GRAY = "#667b88";
const CELADON_BLUE = "#007EA7";
const GAINSBORO = "#CCDBDC";
const CULTURED = "#EDEDED";

const DEFAULT = "#DAE7DD";
const PRIMARY = "#1b78f4";
const SECONDARY = "#6c757d";
const SUCCESS = "#28a745";
const ERROR = "#dc3545";
const WARNING = "#fec146";
const INFO = "#1aa2b8";

const LIGHT = "#f7f9fa";
const DARK = "#343a40";
const WHITE = "#ffffff";

const common = {
  DEFAULT: DEFAULT,
  PRIMARY: PRIMARY,
  SECONDARY: SECONDARY,
  SUCCESS: SUCCESS,
  ERROR: ERROR,
  WARNING: WARNING,
  INFO: INFO,
  LIGHT: LIGHT,
  DARK: DARK,
  WHITE: WHITE,
  GNOME: gnome,
  BACKGROUND_LIGHT: CULTURED,
  BACKGROUND_DARK: OXFORD_BLUE,
};

const light = {
  ...common,
  BACKGROUND: common.BACKGROUND_LIGHT,
  FOREGROUND: common.BACKGROUND_DARK,
  SEPARATOR: SLATE_GRAY,
  TEXT: OXFORD_BLUE,
  TEXT_SECONDARY: SLATE_GRAY,
};

const dark = {
  ...common,
  BACKGROUND: common.BACKGROUND_DARK,
  FOREGROUND: common.BACKGROUND_LIGHT,
  SEPARATOR: CULTURED,
  text: {
    "PRIMO": "#ffffff",
    "2": "#f6f5f4",
    "3": "#deddda",
    "4": "#c0bfbc",
    "5": "#9a9996",
  },

  TEXT: CULTURED,
  TEXT_SECONDARY: GAINSBORO,
};

export const colors = { light, dark };
