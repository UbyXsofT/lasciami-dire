import React from "react";
import {
	View,
	StyleSheet,
	Button,
	Modal,
	Image,
	Text,
	TouchableOpacity,
	Animated,
} from "react-native";

import {ModalComp} from "../../components";

///** REDUX */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {RDX_InfoTheme} from "../../store/actions/themeAction";
import {RDX_InfoUser} from "../../store/actions/userAction";
import {RDX_InfoModal} from "../../store/actions/modalAction";

const DialogBoxScreen = (props) => {
	console.log("DialogBoxScreen", props);
	const ColorMe = props.THEME.colorsTheme;
	const NavigateMe = props.navigation;
	return (
		<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
			<ModalComp></ModalComp>

			<Button
				title='Open Modal'
				onPress={() => props.RDX_InfoModal(true)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	modalBackGround: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
	modalContainer: {
		width: "80%",
		backgroundColor: "white",
		paddingHorizontal: 20,
		paddingVertical: 30,
		borderRadius: 20,
		elevation: 20,
		maxWidth: 600,
	},
	header: {
		width: "100%",
		height: 40,
		alignItems: "flex-end",
		justifyContent: "center",
	},
});

//* REDUX - //
const mapStateToProps = (state) => ({
	THEME: state.themeReducer.theme,
	USER: state.userReducer.user,
	MODAL: state.modalReducer.modalMe,
});

const mapDispatchToProps = (dispatch) => ({
	RDX_InfoTheme: bindActionCreators(RDX_InfoTheme, dispatch),
	RDX_InfoUser: bindActionCreators(RDX_InfoUser, dispatch),
	RDX_InfoModal: bindActionCreators(RDX_InfoModal, dispatch),
});
/****** REDUX **************** */
export default connect(mapStateToProps, mapDispatchToProps)(DialogBoxScreen);
