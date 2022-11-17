const initialState = {
	modalMe: {
		isVisible: false,
		modalType: "info",
		optSelected: "null",
		btnSelected: "null",
		userInputText: "null",
		modalTitle: "INFORMATION",
		modalBody: "",
	},
};

// Usa initialState come valore predefinito
const modalReducer = (state = initialState, action) => {
	// Il riduttore normalmente esamina il campo del tipo di azione per decidere cosa succede
	switch (action.type) {
		// Fai qualcosa qui in base ai diversi tipi di azioni
		case "INFO_MODAL":
			// Dobbiamo restituire un nuovo oggetto di stato
			let newState = {
				//che ha tutti i dati di stato esistenti
				...state,
				// ma ha le nuove modifiche delL'UTENTE
				modalMe: {
					isVisible: action.IS_VISIBLE,
					modalType: action.MODAL_TYPE,
					optSelected: action.OPT_SELECTED,
					btnSelected: action.BTN_SELECTED,
					userInputText: action.USER_INPUT_TEXT,
					modalTitle: action.MODAL_TITLE,
					modalBody: action.MODAL_BODY,
				},
			};
			console.log("@@@ > modalReducer newState", newState);
			return newState;

		default:
			//Se questo riduttore non riconosce il tipo di azione, oppure no
			//interessa questa azione specifica, restituisce lo stato esistente invariato
			return state;
	}
};

export default modalReducer;
