// // theme.js
import React, { useState } from "react";
import { colors, typography, components } from "@layout/";

import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { Dimensions } from "react-native";
import AnimaTheme from "./AnimaTheme";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@constants";
import ThemeContext from "@contexts/ThemeContext";
// Il contesto ci consente di passare un valore in profondità nell'albero dei componenti
// senza infilarlo esplicitamente in ogni componente.
// Crea un contesto per il tema corrente (con oggetti dello style e DARK come impostazione predefinita).

// @@@ PREPARO IL THEME PROVIDER E CONTEXT
const ThemeProvider = ({ children }) => {
  const [isLightTheme, setLightTheme] = useState(false);
  const [statoTheme, setStatoTheme] = useState("dark");

  const toggleTheme = () => setLightTheme((previousState) => !previousState);

  const theme = {
    colors: isLightTheme ? colors.light : colors.dark,
    colorsAll: colors,
    statoTheme: isLightTheme ? "light" : "dark",
    typography,
    isLightTheme,
    components,
    fullWidth: WINDOW_WIDTH,
    fullHeight: WINDOW_HEIGHT,
  };

  return (
    // ThemeProviderStyled per utilizzarlo come styled componets.
    <ThemeProviderStyled theme={{ theme }}>
      {/* //  Utilizzare un provider per passare il tema corrente all'albero sottostante.
    //  Qualsiasi componente può leggerlo, non importa quanto sia profondo.
    //  In questo esempio, stiamo passando l'oggetto theme come valore corrente. */}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {/* @@@ PREPARO ANIMAZIONE DEL CAMBIO THEMA */}
        <AnimaTheme>{children}</AnimaTheme>
      </ThemeContext.Provider>
    </ThemeProviderStyled>
  );
};

export default ThemeProvider;
