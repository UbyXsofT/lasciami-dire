export const RDX_InfoUser = (isLoggedIn, userName) => {
  //invia un'azione per cambiare lo stato dell'eutente
  return (dispatch) => {
    dispatch({
      type: "INFO_USER",
      IS_LOGGED_IN: isLoggedIn,
      SET_USERNAME: userName,
    });
    // dispatch({ type: "INFO_USERNAME", SET_USERNAME: userName });
  };
};
