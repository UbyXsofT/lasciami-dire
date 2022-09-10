export const RDX_InfoTheme = (isLightTheme) => {
  //invia un'azione per cambiare il tema
  return (dispatch) => {
    dispatch({ type: "INFO_THEME", IS_LIGHT_THEME: isLightTheme });
  };
};
