export const RDX_InfoModal = (
	isVisible,
	modalType,
	optSelected,
	btnSelected,
	userInputText,
	modalTitle,
	modalBody
) => {
	//invia un'azione per cambiare lo stato della finestra modale
	return (dispatch) => {
		dispatch({
			type: "INFO_MODAL",
			IS_VISIBLE: isVisible, // true / false
			MODAL_TYPE: modalType, //info /warning /alert /error
			OPT_SELECTED: optSelected, // 0 -1 - 2 ecc
			BTN_SELECTED: btnSelected, //Ok - Annulla - Chiudi
			USER_INPUT_TEXT: userInputText,
			MODAL_TITLE: modalTitle,
			MODAL_BODY: modalBody,
		});
	};
};
