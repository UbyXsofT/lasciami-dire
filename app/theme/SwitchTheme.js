import React, { useContext } from "react";
import { Switch } from "react-native";
import ThemeContext from "@contexts/ThemeContext";

const SwitchTheme = (theme) => {
  // Assegna un theme per leggere il contesto del tema corrente.
  // React troverà il provider del tema più vicino sopra e ne utilizzerà il valore.
  // il tema corrente.
  const myContext = useContext(ThemeContext);
  //console.log("myContext", myContext);
  theme = myContext.theme;
  //console.log("theme", theme);
  const SWITCH_TRACK_COLOR = {
    true: "rgba(256, 0, 256, 0.2)",
    false: "rgba(0,0,0,0.1)",
  };
  return (
    <Switch
      onValueChange={myContext.toggleTheme}
      value={!theme.isLightTheme}
      trackColor={SWITCH_TRACK_COLOR}
      thumbColor={"violet"}
    />
  );
};

export default SwitchTheme;
