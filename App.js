import React from "react";
import ThemeProvider from "./components/theme/ThemeProvider";
import { StatusBar, LoadAll } from "./components/Index";
import Container from "./components/styled/Container";
import IndexScreen from "./screens/IndexScreen";

const App = () => {
  return (
    <ThemeProvider>
      <LoadAll />
      <Container>
        <IndexScreen />
        <StatusBar />
      </Container>
    </ThemeProvider>
  );
};

export default App;
