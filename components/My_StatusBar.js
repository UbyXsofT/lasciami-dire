import { StatusBar } from "expo-status-bar";
import React from "react";

const My_StatusBar = ({ theme }) => {
  return <StatusBar style={theme === "dark" ? "light" : "dark"} />;
};

export default My_StatusBar;
