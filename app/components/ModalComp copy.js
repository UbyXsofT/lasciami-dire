import React, {useState} from "react";
import {Alert, Modal, StyleSheet, Text, Pressable, View, Button} from "react-native";
///** REDUX */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {RDX_InfoTheme} from "../store/actions/themeAction";
import {ButtonComp} from "./index";

const ModalComp = (props) => {
	console.log("ModalComp-props", props);
	const onPressOK = () => {
		console.log("onPressOK");
	};
	const onPressAnnulla = () => {
		console.log("onPressAnnulla");
	};
	return (
		<View style={styles(props).centeredView}>
			<Modal
				animationType='slide'
				transparent={true}
				visible={props.isVisible}
				onRequestClose={() => {
					props.changeStateModal(!props.isVisible);
				}}
			>
				<View style={styles(props).centeredView}>
					<View style={styles(props).modalView}>
						<Text style={styles(props).modalText}>{props.txt1}</Text>
						<View style={{display: "flex", flexDirection: "row"}}>
							<ButtonComp
								caption='OK'
								style={{
									height: 45,
									width: 40,
									borderRadius: 5,
									margin: 20,
									backgroundColor: props.THEME.colorsTheme.GREEN_5,
									color: "white",
								}}
								onPress={props.modalOnPressOK}
							></ButtonComp>
							<ButtonComp
								caption='NO'
								style={{
									height: 45,
									width: 40,
									borderRadius: 5,
									margin: 20,
									backgroundColor: props.THEME.colorsTheme.RED_5,
									color: "white",
								}}
								onPress={props.modalOnPressNO}
								//onPress={handleSubmit(onSignInPressed)}
							></ButtonComp>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = (props) =>
	StyleSheet.create({
		centeredView: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			marginTop: 22,
		},
		modalView: {
			margin: 20,
			backgroundColor: props.THEME.colorsTheme.WHITE,
			borderRadius: 20,
			padding: 35,
			alignItems: "center",
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.25,
			shadowRadius: 4,
			elevation: 5,
		},
		button: {
			borderRadius: 20,
			padding: 10,
			elevation: 2,
		},
		buttonOk: {
			backgroundColor: props.THEME.colorsTheme.GREEN_1,
			color: props.THEME.colorsTheme.TEXT_COLOR_1,
			marginRight: 15,
		},
		buttonNo: {
			backgroundColor: props.THEME.colorsTheme.RED_1,
			color: props.THEME.colorsTheme.TEXT_COLOR_1,
		},
		textStyle: {
			color: "white",
			fontWeight: "bold",
			textAlign: "center",
		},
		modalText: {
			marginBottom: 15,
			textAlign: "center",
		},
	});

//* REDUX - ///////////
const mapStateToProps = (state) => ({
	THEME: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
	RDX_InfoTheme: bindActionCreators(RDX_InfoTheme, dispatch),
});
/****** REDUX **************** */

export default connect(mapStateToProps, mapDispatchToProps)(ModalComp);
