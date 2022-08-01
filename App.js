import React from "react";
import ThemeProvider from "./components/theme/ThemeProvider";
import LayoutRootComp from "./components/LayoutRootComp";
import AnimSwitchThemeComp from "./components/AnimSwitchThemeComp";
import IndexScreen from "./screens/IndexScreen";
import { ScrollView } from "react-native";

const App = () => {
  return (
    <ThemeProvider>
      <LayoutRootComp>
        <AnimSwitchThemeComp>
          <ScrollView>
            <IndexScreen />
          </ScrollView>
        </AnimSwitchThemeComp>
      </LayoutRootComp>
    </ThemeProvider>
  );
};

export default App;
