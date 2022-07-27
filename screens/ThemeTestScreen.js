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
import {
  SeparatorStyled,
  ButtonStyled,
  TextStyled,
  CardStyled,
  NotifyStyled,
} from "../components/styled/IndexStyled";

const ThemeTestScreen = () => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const _TestFunction = (passMe) => {
    alert("_TestFunction successful: " + passMe);
  };

  return (
    <View style={style.body}>
      {/* <Text style={style.title}>THEME TEST</Text> */}

      <TextStyled
        fontSize={theme.typography.fontSize.M + "px"}
        fontTextAlign='left'
        fontColor={theme.colors.PRIMARY}
        fontWeight='500'
        fontFamily={theme.typography.fontFamily.CANTARELL}
        fontLetterSpacing={theme.typography.letterSpacing.S + "px"}
      >
        THEME TEST
      </TextStyled>

      <SeparatorStyled />

      <TextStyled
        fontSize={theme.typography.fontSize.M + "px"}
        fontTextAlign='center'
        fontColor={theme.colors.SECONDARY}
        fontWeight='500'
        fontFamily={theme.typography.fontFamily.CANTARELL}
        fontLetterSpacing={theme.typography.letterSpacing.S + "px"}
      >
        Buttons
      </TextStyled>

      <SeparatorStyled />

      <ButtonStyled
        btnTitle='1ButtonStyled-use: GnomePalet Size:S open GOOGLE '
        btnBgColor={theme.colors.GNOME.purple[5]}
        btnTextColor={theme.colors.GNOME.orange[1]}
        btnTextSize={theme.typography.fontSize.S + "px"}
        btnPress={() => Linking.openURL("https://www.google.it/")}
        btnPadding='5px'
        btnWidth='auto'
        btnRadius='5px'
        btnTextAlign='center'
        btnFontWeight='500'
        btnFontFamily={theme.typography.fontFamily.CANTARELL}
        btnLetterSpacing={theme.typography.letterSpacing.S + "px"}
      ></ButtonStyled>

      <ButtonStyled
        btnTitle='2ButtonStyled-use: GnomePalet Size:M call Function '
        btnBgColor={theme.colors.GNOME.yellow[1]}
        btnTextColor={theme.colors.GNOME.dark[1]}
        btnTextSize={theme.typography.fontSize.M + "px"}
        btnPress={() => _TestFunction("2ButtonStyled")}
        btnPadding='5px'
        btnWidth='auto'
        btnRadius='5px'
        btnTextAlign='right'
        btnFontWeight='500'
        btnFontFamily={theme.typography.fontFamily.CANTARELL}
        btnLetterSpacing={theme.typography.letterSpacing.S + "px"}
      ></ButtonStyled>

      <SeparatorStyled />

      <TextStyled
        fontSize={theme.typography.fontSize.M + "px"}
        fontTextAlign='center'
        fontColor={theme.colors.SECONDARY}
        fontWeight='500'
        fontFamily={theme.typography.fontFamily.CANTARELL}
        fontLetterSpacing={theme.typography.letterSpacing.S + "px"}
      >
        Colors
      </TextStyled>

      <SeparatorStyled />

      <CardStyled width={"100%"} height={"auto"} alignItems={"center"}>
        <NotifyStyled title='Notification' />
      </CardStyled>

      <SeparatorStyled />

      <Button onPress={() => {}} title='Default' color={theme.colors.DEFAULT} />
      <Button onPress={() => {}} title='Primary' color={theme.colors.PRIMARY} />
      <Button onPress={() => {}} title='Success' color={theme.colors.SUCCESS} />
      <Button onPress={() => {}} title='Info' color={theme.colors.INFO} />
      <Button onPress={() => {}} title='Warning' color={theme.colors.WARNING} />
      <Button onPress={() => {}} title='Danger' color={theme.colors.ERROR} />
      <Button onPress={() => {}} title='Link' color={theme.colors.LINK} />
      <Button onPress={() => {}} title='Accept' color={theme.colors.SUCCESS} />
      <Button onPress={() => {}} title='Decline' color={theme.colors.ERROR} />

      <Button
        title='Press me'
        color='#f194ff'
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />

      <SeparatorStyled />

      <Text style={style.text}>ActivityIndicator</Text>
      <View style={[styles.containerActInd, styles.horizontal]}>
        <ActivityIndicator />
        <ActivityIndicator size={theme.components.size.S} />
        <ActivityIndicator
          size={theme.components.size.M}
          color={theme.colors.SUCCESS}
        />
      </View>

      <Text style={style.text}>Switch Theme</Text>
      <Switch onValueChange={theme.toggleTheme} value={theme.isLightTheme} />
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
      flex: 1,
      backgroundColor: theme.colors.BACKGROUND,
      // justifyContent: "space-evenly",
      // alignItems: "center",
      padding: 20,
      // fontFamily: theme.typography.fontFamily.CANTARELL,
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
