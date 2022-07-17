import { useColorScheme } from "react-native";
//import { StatusBar } from "expo-status-bar"; // automatically switches bar style based on theme!
import { darkTheme, lightTheme, ThemeButton, ThemeButtonText } from "./theme";
import React, { useCallback, useEffect, useState } from "react";
import StatusBar from "./components/StatusBar";
import { Container, PressableButton, Text } from "./components/styled/Index";
import styled, { ThemeProvider } from "styled-components/native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import style from "./style";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const App = () => {
  const colorScheme = useColorScheme();

  //THEME ------>
  const [theme, setTheme] = useState(colorScheme);
  const toggleTheme = async () => {
    const themeValue = theme === "dark" ? "light" : "dark";
    setTheme(themeValue);
  };
  /// THEME ////
  useEffect(() => {
    const themeValueScheme = colorScheme === "dark" ? "dark" : "light";
    setTheme(themeValueScheme);
  }, [colorScheme]);

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
        <Text txt='Lasciami Dire' />
        <ThemeButton>
          <ThemeButtonText onPress={() => toggleTheme()}>
            {theme === "dark" ? "Light" : "Dark"} Mode
          </ThemeButtonText>
        </ThemeButton>

        <StatusBar theme={theme} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
