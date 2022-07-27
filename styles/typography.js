const fontFamily = {
  CANTARELL: "Cantarell",
};

import { ScrollView, StatusBar, useWindowDimensions } from "react-native";
// const { fontScale } = useWindowDimensions(); // import useWindowDimensions()
// const styles = makeStyles(fontScale); // pass in fontScale to the StyleSheet

// example fontSizes scale as an array
const fontSizes = [10, 11, 12, 14, 16, 20, 24, 32, 40, 56, 72];
const fontSize = {
  S: fontSizes[0],
  M: fontSizes[4],
  L: fontSizes[6],
  XL: fontSizes[7],
  XXL: fontSizes[9],
  XXXL: fontSizes[10],
};

// example space scale with aliases
const space = [0, 4, 8, 16, 32];
const letterSpacing = {
  S: space[1],
  M: space[2],
  L: space[3],
};

export const typography = { fontSize, letterSpacing, fontFamily };
