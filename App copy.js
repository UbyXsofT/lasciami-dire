import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { darkTheme, lightTheme, ThemeButton, ThemeButtonText } from "./theme";
import { Container, PressableButton, Text } from "./components/styled/Index";
import styled, { ThemeProvider } from "styled-components/native";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = async () => {
    const themeValue = theme === "dark" ? "light" : "dark";
    setTheme(themeValue);
  };

  SplashScreen.preventAutoHideAsync();
  //COMMENTARE PER IL PASSAGGIO IN PRODUZIONE
  setTimeout(SplashScreen.hideAsync, 5000);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Container>
        {/* <PressableButton onPress={() => true} title='First button' bgColor='red'/> */}

        <Text label='Lasciami Dire' />

        <ThemeButton>
          <ThemeButtonText onPress={() => toggleTheme()}>
            {theme === "dark" ? "Light" : "Dark"} Mode
          </ThemeButtonText>
        </ThemeButton>

        <StatusBar style='auto' />
      </Container>
    </ThemeProvider>
  );
}
