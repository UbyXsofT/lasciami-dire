import React from "react";
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
import useTheme from "../components/theme/useTheme";
import useThemedStyles from "../components/theme/useThemedStyles";
import { TitleStyled } from "../components/styled/IndexStyled";

const ThemeTestScreen = () => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const _TestFunction = (passMe) => {
    alert("_TestFunction successful: " + passMe);
  };

  return (
    <View style={style.body}>
      <TitleStyled>THEME</TitleStyled>
      {/* <Box
  fontSize={4}
  fontWeight='bold'
  p={3}
  mb={[ 4, 5 ]}
  color='white'
  bg='primary'>
  Hello
</Box> */}

      {/* <Text style={style.text}>THEME</Text>

      <Text style={style.title}>Switch Theme</Text> */}
    </View>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    containerActInd: {
      flex: 1,
      justifyContent: "center",
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
    },
    body: {
      //flex: 1,
      width: "100%",
      backgroundColor: theme.colors.ERROR,
      // justifyContent: "space-evenly",
      // alignItems: "center",
      //padding: 20,
      fontFamily: theme.typography.fontFamily.CANTARELL,
    },
    title: {
      color: theme.colors.PRIMARY,
      fontSize: theme.typography.fontSize.M,
      letterSpacing: theme.typography.letterSpacing.M,
      fontWeight: "bold",
      // fontFamily: theme.typography.fontFamily.CANTARELL,
    },
    text: {
      color: theme.colors.TEXT,
      fontSize: theme.typography.fontSize.M,
      letterSpacing: theme.typography.letterSpacing.S,
      textAlign: "justify",
      fontFamily: theme.typography.fontFamily.CANTARELL,
    },
    referralCode: {
      color: theme.colors.TEXT_SECONDARY,
      fontSize: theme.typography.fontSize.S,
      letterSpacing: theme.typography.letterSpacing.L,
      fontWeight: "bold",
      // fontFamily: theme.typography.fontFamily.CANTARELL,
    },
  });

export default ThemeTestScreen;
