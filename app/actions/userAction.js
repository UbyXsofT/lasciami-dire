export const changeUser = (isLoggedIn) => {
  //invia un'azione per cambiare il tema
  return (dispatch) => {
    dispatch({ type: "CHANGE_USER", IS_LOGGED_IN: isLoggedIn });
  };
};
