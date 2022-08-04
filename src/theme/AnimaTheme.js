import React, { useContext } from "react";
import ThemeContext from "@contexts/ThemeContext";
import { StyleSheet, StatusBar as StatusBarNative, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import SwitchTheme from "./SwitchTheme";

import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

// @@@ GESTISCO L'ATEZZA DELLA BARRA SUPERIORE
const BAR_HEIGHT =
  StatusBarNative.currentHeight === undefined
    ? 50
    : StatusBarNative.currentHeight;

// @@@ PREPARO ANIMAZIONE DEL CAMBIO THEMA
export default function AnimaTheme(theme) {
  // Assegna un theme per leggere il contesto del tema corrente.
  // React troverà il provider del tema più vicino sopra e ne utilizzerà il valore.
  // il tema corrente.
  const myContext = useContext(ThemeContext);
  //console.log("myContext", myContext);
  theme = myContext.theme;
  //console.log("theme", theme);

  // const progress = useDerivedValue(() => {
  //   return withTiming(theme.statoTheme === "dark" ? 1 : 0);
  // });

  // const rStyle = useAnimatedStyle(() => {
  //   const backgroundColor = interpolateColor(
  //     progress.value,
  //     [0, 1],
  //     [theme.colors.BACKGROUND_LIGHT, theme.colors.BACKGROUND_DARK]
  //   );

  //   return {
  //     backgroundColor,
  //   };
  // });
  // console.log(theme.colors.BACKGROUND);

  return (
    <Animated.View style={[styles(theme).container]}>
      <Text
        style={{
          color: theme.colors.FOREGROUND,
          fontFamily: theme.typography.fontFamily.CANTARELL,
          fontSize: theme.typography.fontSize.XXL,
        }}
      >
        THEME TEST 0
      </Text>
      <SwitchTheme />
      <StatusBar
        translucent={true}
        style={theme.isLightTheme ? "dark" : "light"}
      />
    </Animated.View>
  );
}

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.BACKGROUND,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: theme.typography.fontFamily.CANTARELL,
      width: theme.fullWidth,
      height: theme.fullHeight + BAR_HEIGHT,
      paddingTop: BAR_HEIGHT,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  });