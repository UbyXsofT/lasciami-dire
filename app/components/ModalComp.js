import React, {useState} from "react";
import {TitleStl, ContainerStl} from "../components/styled/index";
import {
	View,
	StyleSheet,
	Button,
	Modal,
	Image,
	Text,
	TouchableOpacity,
	Animated,
	Alert,
} from "react-native";
import {typography} from "../theme/index";
///** REDUX */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {RDX_InfoTheme} from "../store/actions/themeAction";
import {RDX_InfoUser} from "../store/actions/userAction";
import {RDX_InfoModal} from "../store/actions/modalAction";
import {ButtonComp} from "./index";

import Lottie from "lottie-react-native";

const ModalComp = (props) => {
	console.log("ModalComp-props", props);
	let isVisible = props.MODAL.isVisible;
	let modalTitle = props.MODAL.modalTitle;
	let modalBody = props.MODAL.modalBody;
	let modalType = props.MODAL.modalType;
	let optSelected = props.MODAL.optSelected;
	let userInputText = props.MODAL.userInputText;
	let btnSelected = props.MODAL.btnSelected;

	const ColorMe = props.THEME.colorsTheme;

	console.log("@@@@ --- isVisible: ", isVisible);

	//let imgPath = "../assets/image/info_anim.json";
	let lottieName = modalType + "_anim";
	if (modalType === undefined) {
		lottieName = "info_anim";
	}

	const closeModal = () => {
		props.RDX_InfoModal(
			false,
			modalType,
			optSelected,
			btnSelected,
			userInputText,
			modalTitle,
			modalBody
		);
	};

	const [showModal, setShowModal] = React.useState(isVisible);

	const scaleValue = React.useRef(new Animated.Value(0)).current;
	React.useEffect(() => {
		toggleModal();
	}, [isVisible]);

	const toggleModal = () => {
		if (isVisible) {
			setShowModal(true);
			Animated.spring(scaleValue, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true,
			}).start();
		} else {
			setTimeout(() => setShowModal(false), 200);
			Animated.timing(scaleValue, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}).start();
		}
	};
	return (
		<View style={styles(props).centeredView}>
			<Modal
				transparent
				visible={showModal}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					props.RDX_InfoModal(false);
				}}
			>
				<View style={styles(props).modalBackGround}>
					<Animated.View style={[styles(props).modalContainer, {transform: [{scale: scaleValue}]}]}>
						<View>
							<View style={styles(props).header}>
								<TitleStl
									style={{
										fontFamily: typography.fontFamily.CANTARELL,
										color: ColorMe.DARK,
										fontSize: typography.fontSize.H2,
										fontWeight: typography.fontWeight.L,
										display: "flex",
										width: "90%",
									}}
								>
									{modalTitle}
								</TitleStl>

								<TouchableOpacity onPress={() => closeModal()}>
									<Image
										source={require("../assets/image/x.png")}
										style={{height: 30, width: 30, marginRight: 5}}
									/>
								</TouchableOpacity>
							</View>
						</View>

						<View style={{alignItems: "center"}}>
							{/* <Image
								source={require("../assets/image/success.png")}
								style={{height: 100, width: 100, marginVertical: 10}}
							/> */}

							<Lottie
								source={require("../assets/image/" + lottieName + ".json")}
								style={{height: 100, width: 100, marginVertical: 10}}
								autoPlay='true'
								loop={false}
							/>
						</View>

						<TitleStl
							style={{
								fontFamily: typography.fontFamily.CANTARELL,
								color: ColorMe.DARK,
								fontSize: typography.fontSize.H2,
								fontWeight: typography.fontWeight.S,
							}}
						>
							{modalBody}
						</TitleStl>
					</Animated.View>
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
			height: "auto",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			marginTop: -25,
			marginBottom: 10,
			borderBottomColor: "darkgray",
			borderBottomStyle: "solid",
			borderBottomWidth: 1,
			padding: 10,
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalComp);
