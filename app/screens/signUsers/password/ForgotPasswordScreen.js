import React from "react";
import {View, ScrollView, Text, StyleSheet, Image} from "react-native";
import {TitleStl, TextStl, ContainerStl} from "../../../components/styled/index";
import {ButtonComp, SeparatorXTxtComp, InputIconComp} from "../../../components/index";
import {
	LOGO_APP,
	PASSWORD_REQUIRED,
	PASSWORD_REQUIRED_MSG,
	MAX_LENGTH_INPUT_USER,
	MIN_LENGTH_INPUT_USER,
	EMAIL_REQUIRED,
	EMAIL_REQUIRED_MSG,
} from "../../../constants";
import {typography} from "../../../theme/index";
///** REDUX */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {RDX_InfoTheme} from "../../../store/actions/themeAction";
import {RDX_InfoUser} from "../../../store/actions/userAction";
import {RDX_InfoModal} from "../../../store/actions/modalAction";

import {useForm} from "react-hook-form";

import client from "../../../api/client";

const ForgotPasswordScreen = (props) => {
	console.log("ForgotPasswordScreen", props);
	const ColorMe = props.THEME.colorsTheme;
	const NavigateMe = props.navigation;

	const {
		control,
		handleSubmit,
		formState: {errors},
	} = useForm();

	//console.log(errors);

	const onSignInPressed = () => {
		console.log("onSignInPressed");
		NavigateMe.navigate("SignIn");
	};

	const onOkPressed = async (data) => {
		console.log(JSON.stringify(data));
		//------> SEND EMAIL
		const res = await client.post("/request-password-reset", {
			...data,
		});
		console.log(res.data);
		//NavigateMe.navigate("ForgotPassword");
	};

	const onSignUpPressed = () => {
		console.log("onSignUpPressed");
		NavigateMe.navigate("SignUp");
	};

	return (
		<ScrollView style={{backgroundColor: ColorMe.BACK_COLOR_1}}>
			<ContainerStl>
				<View style={[styles.container]}>
					<View style={styles.wrapHeader}>
						<Image
							source={LOGO_APP}
							resizeMode='contain'
							style={styles.image}
						></Image>

						<TextStl
							style={{
								color: ColorMe.TEXT_COLOR_1,
								marginTop: -25,
								fontSize: typography.fontSize.H3,
							}}
						>
							Recover password
						</TextStl>
					</View>
					<Text
						style={{
							fontFamily: typography.fontFamily.CANTARELL,
							color: ColorMe.TEXT_COLOR_1,
							fontSize: typography.fontSize.H6,
							marginTop: 10,
						}}
						onPress={() => onSignInPressed()}
					>
						Use the same e-mail address indicated during registration
					</Text>
					<View style={styles.groupInputText}>
						<InputIconComp
							name='email'
							//find icon: https://icons.expo.fyi
							iconName='mail'
							iconProvider='entypo'
							//Option iconProvider: AntDesign,Entypo,EvilIcons,Feather,FontAwesome,FontAwesome5,Fontisto,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons,Octicons,SimpleLineIcons,Zocial
							placeholder='youremail@email.com'
							secureTextEntry={false}
							maskType={false}
							maskChar='_'
							alwaysShowMask={true}
							rules={{
								required: "Email is required!",
								pattern: {
									value: EMAIL_REQUIRED,
									message: EMAIL_REQUIRED_MSG,
								},
							}}
							control={control}
							inputColor={ColorMe.DARK}
							inputBorderColor={ColorMe.LINE_COLOR_1}
							iconColor={ColorMe.DARK}
							backgroundColor={ColorMe.LIGHT_1}
						/>

						<ButtonComp
							caption='OK'
							style={{
								height: 45,
								width: "100%",
								borderRadius: 5,
								marginTop: 20,
								backgroundColor: ColorMe.BLUE_5,
								color: "white",
							}}
							type='submit'
							onPress={handleSubmit(onOkPressed)}
						></ButtonComp>
						<SeparatorXTxtComp
							color={ColorMe}
							txt='Or'
						/>

						<View
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								marginTop: 10,
							}}
						>
							<Text
								style={{
									fontFamily: typography.fontFamily.CANTARELL,
									color: ColorMe.TEXT_COLOR_1,
									fontSize: typography.fontSize.H4,
									fontWeight: typography.fontWeight.XXL,
									borderBottom: 1,
									borderBottomStyle: "solid",
									borderBottomColor: ColorMe.TEXT_COLOR_1,
								}}
								onPress={() => onSignInPressed()}
							>
								Log-In
							</Text>
							<Text
								style={{
									fontFamily: typography.fontFamily.CANTARELL,
									color: ColorMe.TEXT_COLOR_1,
									fontSize: typography.fontSize.H4,
									fontWeight: typography.fontWeight.XXL,
									borderBottom: 1,
									borderBottomStyle: "solid",
									borderBottomColor: ColorMe.TEXT_COLOR_1,
								}}
								onPress={() => onSignUpPressed()}
							>
								Sign-Up
							</Text>
						</View>
					</View>
				</View>
			</ContainerStl>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingBottom: 40,
		maxWidth: 800,
		width: "100%",
		marginLeft: "auto",
		marginRight: "auto",
	},
	image: {
		width: 225,
		height: 225,
	},
	wrapHeader: {
		width: "100%",
		height: "auto",
		marginLeft: "auto",
		marginRight: "auto",
		textAlign: "center",
		alignItems: "center",
		textAlignVertical: "center",
	},
	groupInputText: {
		marginTop: 0,
		width: "100%",
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);
