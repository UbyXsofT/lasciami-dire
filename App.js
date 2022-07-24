import React from "react";
import ThemeProvider from "./components/theme/ThemeProvider";
import { StatusBar, LoadAll } from "./components/Index";
import { Container } from "./components/styled/Index";

const App = () => {
  return (
    <ThemeProvider>
      <Container>
        <LoadAll />
        <StatusBar />
      </Container>
    </ThemeProvider>
  );
};

export default App;
