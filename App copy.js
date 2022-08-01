import React from "react";
import ThemeProvider from "./components/theme/ThemeProvider";
import { LoadAll } from "./components/Index";
import ContainerStyled from "./components/styled/ContainerStyled";
import IndexScreen from "./screens/IndexScreen";
import { ScrollView, StatusBar } from "react-native";

const App = () => {
  return (
    <ThemeProvider>
      <LoadAll />
      <ContainerStyled>
        <ScrollView>
          <IndexScreen />
          <StatusBar />
        </ScrollView>
      </ContainerStyled>
    </ThemeProvider>
  );
};

export default App;
