import React from "react";
import { StyleSheet, Text, View, Button, Switch } from "react-native";
//import useTheme from "../components/oldtheme/useTheme";
const LoginScreen = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.SUCCESS,
        width: "100%",
        height: "100%",
      }}
    >
      <Text>Login Screen</Text>
    </View>
  );
};

export default LoginScreen;
