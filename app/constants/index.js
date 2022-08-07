import Constants from "expo-constants";
import { Dimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const LOGO_APP = require("@assets/image/favicon-96x96.png");
export const STACK = createNativeStackNavigator();
export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;
export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;