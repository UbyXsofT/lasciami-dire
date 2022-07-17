import { StatusBar } from "expo-status-bar";
import React from "react";

const MyStatusBar = ({ theme }) => {
  return <StatusBar style={theme === "dark" ? "light" : "dark"} />;
};

export default MyStatusBar;
