import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  StatusBar as StatusBarNative,
  View,
} from "react-native";
import { Switch } from "react-native-gesture-handler";
import useTheme from "./theme/useTheme";
import useThemedStyles from "./theme/useThemedStyles";
import { StatusBar } from "expo-status-bar";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

const SWITCH_TRACK_COLOR = {
  true: "rgba(256, 0, 256, 0.2)",
  false: "rgba(0,0,0,0.1)",
};

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

const BAR_HEIGHT =
  StatusBarNative.currentHeight === undefined
    ? 50
    : StatusBarNative.currentHeight;

export default function AnimSwitchThemeComp({ children }) {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const progress = useDerivedValue(() => {
    return withTiming(theme.statoTheme === "dark" ? 1 : 0);
  });

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [theme.colors.BACKGROUND_LIGHT, theme.colors.BACKGROUND_DARK]
    );

    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View
      // onLayout={theme.toggleTheme}
      style={[style.container, rStyle]}
    >
      <Switch
        onValueChange={theme.toggleTheme}
        value={!theme.isLightTheme}
        trackColor={SWITCH_TRACK_COLOR}
        thumbColor={"violet"}
      />

      <StatusBar
        translucent={true}
        style={theme.isLightTheme ? "dark" : "light"}
      />

      {children}
    </Animated.View>
  );
}

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: theme.colors.BACKGROUND,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: theme.typography.fontFamily.CANTARELL,
      width: width,
      height: height + BAR_HEIGHT,
      // alignItems: "center",
      // justifyContent: "center",
      paddingTop: BAR_HEIGHT,
      //paddingBottom: BAR_HEIGHT,
    },
  });
