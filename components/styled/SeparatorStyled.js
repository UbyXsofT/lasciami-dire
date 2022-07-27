import React from "react";
import { StyleSheet, View } from "react-native";
// import useTheme from "../theme/useTheme";
import useThemedStyles from "../theme/useThemedStyles";

const SeparatorStyled = () => {
  // const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <View style={style.separator}>
      {/* <Text style={style.title}>separator</Text> */}
    </View>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    separator: {
      marginVertical: 8,
      borderBottomColor: theme.colors.SEPARATOR,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

export default SeparatorStyled;
