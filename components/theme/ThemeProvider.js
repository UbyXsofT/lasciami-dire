import React, { useState } from "react";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { components } from "../../styles/components";
export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [isLightTheme, setLightTheme] = useState(false);
  //const [statoTheme, setStatoTheme] = useState("light");

  const toggleTheme = () => setLightTheme((previousState) => !previousState);

  const theme = {
    colors: isLightTheme ? colors.light : colors.dark,
    statoTheme: isLightTheme ? "light" : "dark",
    typography,
    toggleTheme,
    isLightTheme,
    components,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
