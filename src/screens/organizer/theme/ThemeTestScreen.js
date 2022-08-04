import React, { useState, useContext } from "react";
import ThemeContext from "../styles/ThemeContext";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Switch,
  Text,
  View,
  Alert,
  Linking,
} from "react-native";
import {
  SeparatorStyled,
  ButtonStyled,
  TextStyled,
  CardStyled,
  NotifyStyled,
} from "../../../components/styled/IndexStyled";

const ThemeTestScreen = (theme) => {
  // Assegna un theme per leggere il contesto del tema corrente.
  // React troverà il provider del tema più vicino sopra e ne utilizzerà il valore.
  // il tema corrente.
  // const myContext = useContext(ThemeContext);
  // console.log("myContext", myContext);
  // theme = myContext.theme;
  // console.log("theme", theme);

  const _TestFunction = (passMe) => {
    alert("_TestFunction successful: " + passMe);
  };

  return (
    <View>
      <Text style={{ backgroundColor: "red" }}>THEME TEST</Text>
    </View>

    // <Text style={styles.text}>Switch Theme</Text>
    // <Switch
    //   onValueChange={myContext.toggleTheme}
    //   value={theme.isLightTheme}
    // />
  );
};

export default ThemeTestScreen;
