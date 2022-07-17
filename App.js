import React, { useCallback, useEffect, useState } from "react";
import My_StatusBar from "./components/My_StatusBar";
import { darkTheme, lightTheme, ThemeButton, ThemeButtonText } from "./theme";
import { Container, PressableButton, TextMe } from "./components/styled/Index";
import styled, { ThemeProvider } from "styled-components/native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import style from "./style";
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const App = () => {
  //THEME ------>
  const [theme, setTheme] = useState("light");
  const toggleTheme = async () => {
    const themeValue = theme === "dark" ? "light" : "dark";
    setTheme(themeValue);
  };
  /// THEME ////

  /// LOAD FONT ------>
  const [fontsLoaded] = Font.useFonts({
    "Cantarell": require("./assets/fonts/Cantarell-VF.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  /////// LOAD FONT /////////////////////////
  console.log("theme ", theme);
  return (
    <ThemeProvider
      theme={theme === "dark" ? style.theme.darkTheme : style.theme.lightTheme}
    >
      <Container onLayout={onLayoutRootView}>
        {/* <PressableButton onPress={() => true} title='First button' bgColor='red'/> */}
        {/* <Ionicons
          name='md-checkmark-circle'
          size={32}
          color={theme["PRIMARY_COLOR"]}
        /> */}

        <TextMe label='Lasciami Dire' />

        <ThemeButton>
          <ThemeButtonText onPress={() => toggleTheme()}>
            {theme === "dark" ? "Light" : "Dark"} Mode
          </ThemeButtonText>
        </ThemeButton>

        <My_StatusBar theme={theme} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
