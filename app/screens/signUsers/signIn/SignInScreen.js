import React, {useState, useEffect} from "react";
import {View, ScrollView, Text, StyleSheet, Image, Switch, input} from "react-native";
import {TitleStl, ContainerStl} from "../../../components/styled/index";
import {ButtonComp, SeparatorXTxtComp, InputIconComp, LogoAnimComp} from "../../../components/index";
import {PASSWORD_REQUIRED, PASSWORD_REQUIRED_MSG, MAX_LENGTH_INPUT_USER, MIN_LENGTH_INPUT_USER} from "../../../constants";
import {typography} from "../../../theme/index";
//REDUX
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {RDX_InfoTheme} from "../../../store/actions/themeAction";
import {RDX_InfoUser} from "../../../store/actions/userAction";

import {useForm} from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
		try {
			const jsonOby = {
				"DATI_UTENTE": [
					{
						"USER_LOGIN_OPTIONS": {
							"REMEMBER_ME": rememberMe,
							"USER_NAME": data.username,
							"PASSWORD": data.password,
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
							inputColor={ColorMe.TEXT_COLOR_2}
							inputBorderColor={ColorMe.LINE_COLOR_1}
							iconColor={ColorMe.TEXT_COLOR_1}
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
							inputColor={ColorMe.TEXT_COLOR_2}
							inputBorderColor={ColorMe.LINE_COLOR_1}
							iconColor={ColorMe.TEXT_COLOR_1}
						/>

						<View
							style={{
								display: "flex",
								flexDirection: "row-reverse",
								justifyContent: "flex-start",
								alignItems: "center",
								marginTop: 10,
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

						<SeparatorXTxtComp
							color={ColorMe}
							txt='Or'
						/>

						<View
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-evenly",
								marginTop: 10,
							}}
						>
							<Text
								style={{
									fontFamily: typography.fontFamily.CANTARELL,
									color: ColorMe.TEXT_COLOR_1,
									fontSize: typography.fontSize.H4,
									fontWeight: typography.fontWeight.XXL,
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
								marginTop: 30,
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
