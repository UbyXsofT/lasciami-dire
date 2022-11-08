import React, {useState, useEffect, useCallback} from "react";
import {
	View,
	ScrollView,
	Text,
	StyleSheet,
	Image,
	Switch,
	input,
	Linking,
	Button,
} from "react-native";
import {TitleStl, ContainerStl} from "../../../components/styled/index";
import {
	ButtonComp,
	SeparatorXTxtComp,
	InputIconComp,
	LogoAnimComp,
} from "../../../components/index";
import {
	PASSWORD_REQUIRED,
	PASSWORD_REQUIRED_MSG,
	MAX_LENGTH_INPUT_USER,
	MIN_LENGTH_INPUT_USER,
} from "../../../constants";
import {typography} from "../../../theme/index";
//REDUX
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {RDX_InfoTheme} from "../../../store/actions/themeAction";
import {RDX_InfoUser} from "../../../store/actions/userAction";

import {useForm} from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyCrypto from "../../../utils/MyCrypto";

import {PRIVACY_URL} from "../../../constants";
import {TERMS_URL} from "../../../constants";

const SignInScreen = (props) => {
	console.log("SignInScreen", props);
	const ColorMe = props.THEME.colorsTheme;
	const NavigateMe = props.navigation;
	const [rememberMe, setRememberMe] = useState(false);

	const {
		control,
		handleSubmit,
		formState: {errors},
	} = useForm();
	//console.log(errors);

	const onMyUrlPressed = (OpenLink) => {
		console.log("TERMS_URL: ", TERMS_URL);
		console.log("PRIVACY_URL: ", PRIVACY_URL);

		let url = "";
		switch (OpenLink) {
			case "TermsOfUse":
				url = TERMS_URL;
				break;

			case "PrivacyPolicy":
				url = PRIVACY_URL;
				break;

			default:
				url = "";
		}
		Linking.openURL(url);
	};

	const onSignInAnonymPressed = (data) => {
		console.log("onSignInAnonymPressed");
		rememberMe === true
			? //SI memorizzo i dati
			  rememberUser(data)
			: //NON memorizzo e quindi rimuovo eventuali vecchi dati
			  forgetUser();

		props.RDX_InfoUser(true, "Anonymous");
		NavigateMe.navigate("HomeNavigation");
	};

	const onSignInPressed = (data) => {
		console.log("onSignInPressed", JSON.stringify(data));
		//memorizzo le credenziali UserName e PassWord
		//in Locale sul dispositivo per i prossimi accessi, in base alla scelta dell'utente
		rememberMe === true
			? //SI memorizzo i dati
			  rememberUser(data)
			: //NON memorizzo e quindi rimuovo eventuali vecchi dati
			  forgetUser();

		props.RDX_InfoUser(true, data.username);
		NavigateMe.navigate("HomeNavigation");
	};

	const rememberUser = async (data) => {
		console.log("rememberUser", data);
		console.log(" ColorMe.descTheme", ColorMe.descTheme);

		const myEncryptData = MyCrypto("encryptData", data.password, data.username);
		//const myRESTEncryptData = MyCrypto("dencryptData", myEncryptData, "username");
		try {
			const jsonOby = {
				"DATI_UTENTE": [
					{
						"USER_LOGIN_OPTIONS": {
							"REMEMBER_ME": rememberMe,
							"USER_NAME": data.username,
							"PASSWORD": myEncryptData,
							"COLOR_THEME": props.THEME.isLightTheme,
						},
					},
				],
			};
			const jsonValue = JSON.stringify(jsonOby);
			console.log("rememberUser", jsonValue);
			await AsyncStorage.setItem("USER-OPTION-KEY", jsonValue);
		} catch (error) {
			console.log("rememberUser error:", error);
		}
	};

	const forgetUser = async () => {
		console.log("forgetUser");
		try {
			await AsyncStorage.removeItem("USER-OPTION-KEY");
		} catch (error) {
			console.log("forgetUser error:", error);
		}
	};

	const toggleRememberMe = (value) => {
		console.log("toggleRememberMe", value);
		setRememberMe(value);
	};

	const onForgotPasswordPressed = () => {
		NavigateMe.navigate("ForgotPassword");
	};

	const onSignUpPressed = () => {
		NavigateMe.navigate("SignUp");
	};

	return (
		<ScrollView style={{backgroundColor: ColorMe.BACK_COLOR_1}}>
			<ContainerStl>
				<View style={[styles.container]}>
					<View style={styles.wrapHeader}>
						<LogoAnimComp
							W={200}
							H={200}
							Radius={0}
							animationMe='zoomIn'
						/>
					</View>

					<View style={styles.groupInputText}>
						<InputIconComp
							name='username'
							iconName='user-alt'
							iconProvider='fontAwesome5'
							placeholder='Username'
							secureTextEntry={false}
							maskType={false}
							maskChar='_'
							alwaysShowMask={true}
							rules={{
								required: "Username is required!",
								maxLength: {
									value: MAX_LENGTH_INPUT_USER,
									message: "Maximum text length: " + MAX_LENGTH_INPUT_USER,
								},
								minLength: {
									value: MIN_LENGTH_INPUT_USER,
									message: "Minimum text length: " + MIN_LENGTH_INPUT_USER,
								},
							}}
							control={control}
							inputColor={ColorMe.DARK}
							inputBorderColor={ColorMe.LINE_COLOR_1}
							iconColor={ColorMe.DARK}
							backgroundColor={ColorMe.LIGHT_1}
						/>

						<InputIconComp
							name='password'
							iconName='form-textbox-password'
							iconProvider='materialCommunityIcons'
							placeholder='Password'
							secureTextEntry={true}
							maskType={false}
							maskChar='_'
							alwaysShowMask={true}
							rules={{
								required: "Password is required!",
								pattern: {
									value: PASSWORD_REQUIRED,
									message: PASSWORD_REQUIRED_MSG,
								},
							}}
							control={control}
							inputColor={ColorMe.DARK}
							inputBorderColor={ColorMe.LINE_COLOR_1}
							iconColor={ColorMe.DARK}
							backgroundColor={ColorMe.LIGHT_1}
						/>

						<View
							style={{
								display: "flex",
								flexDirection: "row-reverse",
								justifyContent: "flex-start",
								alignItems: "center",
								marginTop: 5,
							}}
						>
							<Switch
								value={rememberMe}
								onValueChange={(value) => toggleRememberMe(value)}
								style={{marginLeft: 10}}
							/>
							<Text
								style={{
									fontFamily: typography.fontFamily.CANTARELL,
									color: ColorMe.TEXT_COLOR_1,
									fontSize: typography.fontSize.H4,
									fontWeight: typography.fontWeight.S,
								}}
							>
								Remember Me
							</Text>
						</View>

						<ButtonComp
							caption='Log-In'
							style={{
								height: 45,
								width: "100%",
								borderRadius: 5,
								marginTop: 10,
								backgroundColor: ColorMe.BLUE_5,
								color: "white",
							}}
							type='submit'
							onPress={handleSubmit(onSignInPressed)}
						></ButtonComp>
						<ButtonComp
							caption='Log-In anonymously'
							style={{
								height: 45,
								width: "100%",
								borderRadius: 5,
								marginTop: 10,
								backgroundColor: ColorMe.DARK_5,
								color: "white",
							}}
							type='submit'
							onPress={() => onSignInAnonymPressed()}
						></ButtonComp>

						<Text
							style={{
								fontFamily: typography.fontFamily.CANTARELL,
								color: ColorMe.TEXT_COLOR_1,
								fontSize: typography.fontSize.H6,
								marginTop: 10,
							}}
						>
							By log-in, you confirm that you accept our{" "}
							<Text
								style={{
									fontFamily: typography.fontFamily.CANTARELL,
									color: ColorMe.TEXT_COLOR_1,
									fontSize: typography.fontSize.H5,
									fontWeight: typography.fontWeight.XXL,
									borderBottom: 1,
									borderBottomStyle: "solid",
									borderBottomColor: ColorMe.TEXT_COLOR_1,
								}}
								onPress={() => onMyUrlPressed("TermsOfUse")}
							>
								Terms of Use
							</Text>{" "}
							and{" "}
							<Text
								style={{
									fontFamily: typography.fontFamily.CANTARELL,
									color: ColorMe.TEXT_COLOR_1,
									fontSize: typography.fontSize.H5,
									fontWeight: typography.fontWeight.XXL,
									borderBottom: 1,
									borderBottomStyle: "solid",
									borderBottomColor: ColorMe.TEXT_COLOR_1,
								}}
								onPress={() => onMyUrlPressed("PrivacyPolicy")}
							>
								Privacy Policy
							</Text>
						</Text>

						<SeparatorXTxtComp
							color={ColorMe}
							txt='Or'
						/>

						<View
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-evenly",
								marginTop: 5,
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
								onPress={() => onForgotPasswordPressed()}
							>
								Forgot password?
							</Text>
						</View>

						<View
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								marginTop: 10,
							}}
						>
							<Text
								style={{
									fontFamily: typography.fontFamily.CANTARELL,
									color: ColorMe.TEXT_COLOR_1,
									fontSize: typography.fontSize.H4,
								}}
							>
								Don't have an account?
							</Text>
							<Text
								style={{
									fontFamily: typography.fontFamily.CANTARELL,
									color: ColorMe.TEXT_COLOR_1,
									fontSize: typography.fontSize.H4,
									fontWeight: typography.fontWeight.XXL,
									marginLeft: 5,
									borderBottom: 1,
									borderBottomStyle: "solid",
									borderBottomColor: ColorMe.TEXT_COLOR_1,
								}}
								onPress={() => onSignUpPressed()}
							>
								Create one
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
		width: 200,
		height: 200,
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
});

const mapDispatchToProps = (dispatch) => ({
	RDX_InfoTheme: bindActionCreators(RDX_InfoTheme, dispatch),
	RDX_InfoUser: bindActionCreators(RDX_InfoUser, dispatch),
});
/****** REDUX **************** */
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
