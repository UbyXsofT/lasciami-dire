import React from "react";
import { StyleSheet, Text, View, Button, Switch } from "react-native";
import useTheme from "../components/theme/useTheme";
import useThemedStyles from "../components/theme/useThemedStyles";

const ThemeTest = () => {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <View style={style.body}>
      <Text style={style.title}>ThemeTest</Text>
      <Text style={style.text}>Buttons</Text>

      <Button onPress={() => {}} title='Default' color={theme.colors.SUCCESS} />
      <Button onPress={() => {}} title='Primary' color={theme.colors.SUCCESS} />
      <Button onPress={() => {}} title='Success' color={theme.colors.SUCCESS} />
      <Button onPress={() => {}} title='Info' color={theme.colors.SUCCESS} />
      <Button onPress={() => {}} title='Warning' color={theme.colors.SUCCESS} />
      <Button onPress={() => {}} title='Danger' color={theme.colors.SUCCESS} />
      <Button onPress={() => {}} title='Link' color={theme.colors.SUCCESS} />

      <Text style={style.referralCode}>3XP4N510</Text>
      <Button onPress={() => {}} title='Accept' color={theme.colors.SUCCESS} />
      <Button onPress={() => {}} title='Decline' color={theme.colors.ERROR} />
      <Switch onValueChange={theme.toggleTheme} value={theme.isLightTheme} />
    </View>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    body: {
      // flex: 1,
      backgroundColor: theme.colors.BACKGROUND,
      // justifyContent: "space-evenly",
      // alignItems: "center",
      // padding: 20,
      fontFamily: theme.typography.fontFamily.CANTARELL,
    },
    title: {
      color: theme.colors.PRIMARY,
      fontSize: theme.typography.size.M,
      letterSpacing: theme.typography.letterSpacing.M,
      fontWeight: "bold",
      fontFamily: theme.typography.fontFamily.CANTARELL,
    },
    text: {
      color: theme.colors.TEXT,
      fontSize: theme.typography.size.S,
      letterSpacing: theme.typography.letterSpacing.S,
      textAlign: "justify",
      fontFamily: theme.typography.fontFamily.CANTARELL,
    },
    referralCode: {
      color: theme.colors.TEXT_SECONDARY,
      fontSize: theme.typography.size.S,
      letterSpacing: theme.typography.letterSpacing.L,
      fontWeight: "bold",
      fontFamily: theme.typography.fontFamily.CANTARELL,
    },
  });

export default ThemeTest;
