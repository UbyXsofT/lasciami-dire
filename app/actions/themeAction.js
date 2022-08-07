export const changeBaseTheme = (BaseTheme) => {
  //invia un'azione per cambiare il tema chiaro o scuro
  return (dispatch) => {
    dispatch({
      type: "CHANGE_BASE_THEME",
      baseTheme: BaseTheme,
    });
  };
};

export const changeColorTheme = (ColorTheme) => {
  //invia un'azione per cambiare il tema > del tema del colore dell'accento
  return (dispatch) => {
    dispatch({
      type: "CHANGE_COLOR_THEME",
      colorTheme: ColorTheme,
    });
  };
};
