export const changeTheme = (isLightTheme) => {
  //invia un'azione per cambiare il tema
  return (dispatch) => {
    dispatch({ type: "CHANGE_THEME", IS_LIGHT_THEME: isLightTheme });
  };
};
