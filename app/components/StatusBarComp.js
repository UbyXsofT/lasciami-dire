import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";

const StatusBarComp = ({ colorTheme, backgroundColorTheme }) => {
  let ColorStyle = colorTheme === "dark" ? "light" : "dark";
  {
    Platform.OS === "ios" ? (ColorStyle = "auto") : (ColorStyle = ColorStyle);
  }
  return (
    <StatusBar
      backgroundColor={backgroundColorTheme}
      style={colorTheme === "dark" ? "light" : "dark"}
    />
  );
};

export default StatusBarComp;
