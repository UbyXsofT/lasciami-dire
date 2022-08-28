const initialState = {
  user: {
    isLoggedIn: false,
  },
};
// Usa initialState come valore predefinito
const userReducer = (state = initialState, action) => {
  // Il riduttore normalmente esamina il campo del tipo di azione per decidere cosa succede
  switch (action.type) {
    // Fai qualcosa qui in base ai diversi tipi di azioni
    case "CHANGE_USER":
      // Dobbiamo restituire un nuovo oggetto di stato
      let newState = {
        //che ha tutti i dati di stato esistenti
        ...state,
        // ma ha le nuove modifiche delL'UTENTE
        user: {
          isLoggedIn: action.IS_LOGGED_IN,
        },
      };
      // console.log("newState", newState);
      return newState;
    default:
      //Se questo riduttore non riconosce il tipo di azione, oppure no
      //interessa questa azione specifica, restituisce lo stato esistente invariato
      return state;
  }
};

export default userReducer;
