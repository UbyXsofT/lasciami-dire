export const colorOptions = {
	BLUE_1: "#99c1f1",
	BLUE_2: "#62a0ea",
	BLUE_3: "#3584e4",
	BLUE_4: "#1c71d8",
	BLUE_5: "#1a5fb4",

	GREEN_1: "#8ff0a4",
	GREEN_2: "#57e389",
	GREEN_3: "#33d17a",
	GREEN_4: "#2ec27e",
	GREEN_5: "#26a269",

	YELLOW_1: "#f9f06b",
	YELLOW_2: "#f8e45c",
	YELLOW_3: "#f6d32d",
	YELLOW_4: "#f5c211",
	YELLOW_5: "#e5a50a",

	ORANGE_1: "#ffbe6f",
	ORANGE_2: "#ffa348",
	ORANGE_3: "#ff7800",
	ORANGE_4: "#e66100",
	ORANGE_5: "#c64600",

	RED_1: "#f66151",
	RED_2: "#ed333b",
	RED_3: "#e01b24",
	RED_4: "#c01c28",
	RED_5: "#a51d2d",

	PURPLE_1: "#dc8add",
	PURPLE_2: "#c061cb",
	PURPLE_3: "#9141ac",
	PURPLE_4: "#813d9c",
	PURPLE_5: "#613583",

	BROWN_1: "#cdab8f",
	BROWN_2: "#b5835a",
	BROWN_3: "#986a44",
	BROWN_4: "#865e3c",
	BROWN_5: "#63452c",

	LIGHT_1: "#E5E5E5",
	LIGHT_2: "#CCCCCC",
	LIGHT_3: "#B2B2B2",
	LIGHT_4: "#999999",
	LIGHT_5: "#7F7F7F",

	DARK_1: "#7F7F7F",
	DARK_2: "#666666",
	DARK_3: "#4C4C4C",
	DARK_4: "#333333",
	DARK_5: "#191919",
};

export const colorBase = {
	...colorOptions,
	OXFORD_BLUE: "#001B33",
	SLATE_GRAY: "#667b88",
	CELADON_BLUE: "#007EA7",
	GAINSBORO: "#CCDBDC",
	CULTURED: "#EDEDED",

	DEFAULT: colorOptions.LIGHT_2, //#CCCCCC
	PRIMARY: colorOptions.BLUE_4, //#1c71d8
	SECONDARY: colorOptions.DARK_2, //#666666
	SUCCESS: colorOptions.GREEN_3, //#33d17a
	ERROR: colorOptions.RED_3, //#ed333b
	WARNING: colorOptions.ORANGE_2, //#ffa348
	INFO: colorOptions.BLUE_2, //#62a0ea

	LIGHT: colorOptions.LIGHT_1, //#E5E5E5
	DARK: "#001B33", //OXFORD_BLUE
	WHITE: "#ffffff",
	BLACK: "#000000",
};

/// ---------- colorsTheme ----------------------
export const darkTheme = {
	// ...colorOptions,
	...colorBase,
	BACK_COLOR_1: colorBase.OXFORD_BLUE,
	BACK_COLOR_2: colorBase.DARK_5,

	TEXT_COLOR_1: colorBase.LIGHT_1,
	TEXT_COLOR_2: colorBase.LIGHT_2,

	TEXT_BACK_COLOR_1: colorBase.DARK_2,
	TEXT_BACK_COLOR_2: colorBase.DARK_3,

	LINE_COLOR_1: "#444444",
};
export const lightTheme = {
	// ...colorOptions,
	...colorBase,
	BACK_COLOR_1: colorBase.CULTURED,
	BACK_COLOR_2: colorBase.LIGHT_1,

	TEXT_COLOR_1: colorBase.OXFORD_BLUE,
	TEXT_COLOR_2: colorBase.DARK_5,

	TEXT_BACK_COLOR_1: colorBase.LIGHT_3,
	TEXT_BACK_COLOR_2: colorBase.LIGHT_4,

	LINE_COLOR_1: "#8b8b8b",
};
/// ------------------------------------------------------------------

export default {lightTheme, darkTheme, colorBase, colorOptions};
