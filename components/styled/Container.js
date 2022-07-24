import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import useThemedStyles from "../theme/useThemedStyles";

const Container = ({ children }) => {
  const style = useThemedStyles(styles);
  return <SafeAreaView style={style.container}>{children}</SafeAreaView>;
};

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.BACKGROUND,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      paddingTop: Constants.statusBarHeight,
    },
  });

export default Container;
