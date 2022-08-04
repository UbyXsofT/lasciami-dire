import React, { useContext } from "react";
//import ThemeContext from "@contexts/ThemeContext";
import { View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import SwitchTheme from "@theme/SwitchTheme";

export default function ThemeScreen(theme, { children }) {
  // Assegna un theme per leggere il contesto del tema corrente.
  // React troverà il provider del tema più vicino sopra e ne utilizzerà il valore.
  // il tema corrente.
  //const myContext = useContext(ThemeContext);
  //console.log("myContext", myContext);
  //theme = myContext.theme;
  //console.log("theme", theme);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Theme Screen</Text>
      {/* 
      <Text
        style={{
          color: theme.colors.FOREGROUND,
          fontFamily: theme.typography.fontFamily.CANTARELL,
          fontSize: theme.typography.fontSize.XXL,
        }}
      >
        THEME TEST 0
      </Text>
      <SwitchTheme /> */}
    </View>
  );
}
