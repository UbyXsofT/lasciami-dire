import { colors } from "@theme/index";

let tema = {
  coloriTema: colors.darkTheme,
  descTema: "dark",
  isLightTheme: false,
};

const initialState = {
  theme: tema,
};
// Usa initialState come valore predefinito
const themeReducer = (state = initialState, action) => {
  // Il riduttore normalmente esamina il campo del tipo di azione per decidere cosa succede
  switch (action.type) {
    // Fai qualcosa qui in base ai diversi tipi di azioni
    case "CHANGE_THEME":
      // Dobbiamo restituire un nuovo oggetto di stato
      let newState = {
        //che ha tutti i dati di stato esistenti
        ...state,
        // ma ha le nuove modifiche del tema
        theme: {
          coloriTema: action.IS_LIGHT_THEME
            ? colors.lightTheme
            : colors.darkTheme,
          descTema: action.IS_LIGHT_THEME ? "light" : "dark",
          isLightTheme: action.IS_LIGHT_THEME,
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

export default themeReducer;
