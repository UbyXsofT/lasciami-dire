import React, {useState, useEffect} from "react";
import {View, ScrollView, Text, Image, Switch} from "react-native";
import {TitleStl, ContainerStl, TextStl} from "../../../components/styled/index";
import {
	ButtonComp,
	SeparatorXTxtComp,
	InputIconComp,
	LoadingImageComp,
} from "../../../components/index";
import {
	LOGO_APP,
	PASSWORD_REQUIRED,
	PASSWORD_REQUIRED_MSG,
	MAX_LENGTH_INPUT_USER,
	MIN_LENGTH_INPUT_USER,
	AVATAR_PARENTS,
	AVATAR_TEACHERS,
	PHONE_MASK,
	PHONE_REQUIRED,
	DATE_MASK,
	DATE_REQUIRED,
	EMAIL_REQUIRED,
	EMAIL_REQUIRED_MSG,
	TEACHERS_LEVELS,
	GENDER_USER,
} from "../../../constants";
import {typography} from "../../../theme/index";
//REDUX
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {RDX_InfoTheme} from "../../../store/actions/themeAction";
import {RDX_InfoUser} from "../../../store/actions/userAction";

import {useForm} from "react-hook-form";
import SelectDropdown from "react-native-select-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {RadioButton} from "react-native-paper";
import StyleSheet from "react-native-stylesheet-extension";

const SignUpGroupScreen = (props) => {
	console.log("SignInScreen", props);
	const ColorMe = props.THEME.colorsTheme;
	const NavigateMe = props.navigation;
	const {
		control,
		handleSubmit,
		watch,
		getValues,
		formState: {errors},
	} = useForm();
	//console.log(errors);
	const pwd = watch("password");

	const [genderValue, setGenderValue] = React.useState(GENDER_USER[2]);
	const [teachersValue, setTeachersValue] = React.useState(TEACHERS_LEVELS[2]);

	let sourceImageGroup = "";
	props.route.params.Group == "Teachers"
		? (sourceImageGroup = AVATAR_TEACHERS)
		: (sourceImageGroup = AVATAR_PARENTS);

	const onSignInPressed = (data) => {
		NavigateMe.navigate("SignIn");
	};

	const onSignUpPressed = () => {
		NavigateMe.navigate("SignUp");
	};
	const onPrivacyPressed = () => {
		console.log("onPravacyPressed");
		NavigateMe.navigate("PrivacyScreen"); //onPolicyThermsPressed
	};
	const onTermsPressed = () => {
		console.log("onTermsScreenPressed");
		NavigateMe.navigate("TermsScreen"); //onPolicyThermsPressed
	};
	return (
		<ScrollView style={{backgroundColor: ColorMe.BACK_COLOR_1}}>
			<ContainerStl>
				<View style={styles.get("container", {ColorMe, typography})}>
					<View style={styles.get("wrapHeader", {ColorMe, typography})}>
						<LoadingImageComp
							source={sourceImageGroup}
							style={styles.get("loadingImageComp", {ColorMe, typography})}
						/>
						<TextStl
							style={{
								color: ColorMe.TEXT_COLOR_1,
								fontSize: typography.fontSize.H3,
							}}
						>
							Registration {props.route.params.Group}
						</TextStl>
					</View>

					<View style={styles.get("groupInputText", {ColorMe, typography})}>
						<SeparatorXTxtComp
							color={ColorMe}
							txt='Login information'
							style={{marginBottom: 10}}
						/>

						<InputIconComp
							name='username'
							//find icon: https://icons.expo.fyi
							iconName='user-alt'
							iconProvider='fontAwesome5'
							//Option iconProvider: AntDesign,Entypo,EvilIcons,Feather,FontAwesome,FontAwesome5,Fontisto,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons,Octicons,SimpleLineIcons,Zocial
							placeholder='User Name'
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

						<InputIconComp
							name='confirmPassword'
							iconName='form-textbox-password'
							iconProvider='materialCommunityIcons'
							placeholder='Confirm Password'
							secureTextEntry={true}
							maskType={false}
							maskChar='_'
							alwaysShowMask={true}
							rules={{
								validate: (value) => value === pwd || "Password do not match",
							}}
							control={control}
							inputColor={ColorMe.DARK}
							inputBorderColor={ColorMe.LINE_COLOR_1}
							iconColor={ColorMe.DARK}
							backgroundColor={ColorMe.LIGHT_1}
						/>
						<SeparatorXTxtComp
							color={ColorMe}
							txt='General information'
							style={{marginBottom: 10}}
						/>

						<InputIconComp
							name='firstname'
							//find icon: https://icons.expo.fyi
							iconName='user-alt'
							iconProvider='fontAwesome5'
							//Option iconProvider: AntDesign,Entypo,EvilIcons,Feather,FontAwesome,FontAwesome5,Fontisto,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons,Octicons,SimpleLineIcons,Zocial
							placeholder='First Name'
							secureTextEntry={false}
							maskType={false}
							maskChar='_'
							alwaysShowMask={true}
							rules={{
								required: "Firstname is required!",
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
							name='lastname'
							//find icon: https://icons.expo.fyi
							iconName='user-alt'
							iconProvider='fontAwesome5'
							//Option iconProvider: AntDesign,Entypo,EvilIcons,Feather,FontAwesome,FontAwesome5,Fontisto,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons,Octicons,SimpleLineIcons,Zocial
							placeholder='Last Name'
							secureTextEntry={false}
							maskType={false}
							maskChar='_'
							alwaysShowMask={true}
							rules={{
								required: "Lastname is required!",
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
							name='Birthday'
							//find icon: https://icons.expo.fyi
							iconName='calendar-alt'
							iconProvider='fontAwesome5'
							//Option iconProvider: AntDesign,Entypo,EvilIcons,Feather,FontAwesome,FontAwesome5,Fontisto,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons,Octicons,SimpleLineIcons,Zocial
							placeholder='Birthday'
							secureTextEntry={false}
							maskType={DATE_MASK}
							maskChar='-'
							alwaysShowMask={false}
							rules={{
								required: "Birthday is required!",
								pattern: {
									value: DATE_REQUIRED,
									message: "Birthday is required!",
								},
							}}
							control={control}
							inputColor={ColorMe.DARK}
							inputBorderColor={ColorMe.LINE_COLOR_1}
							iconColor={ColorMe.DARK}
							backgroundColor={ColorMe.LIGHT_1}
						/>
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

						<RadioButton.Group
							onValueChange={(newValue) => setGenderValue(newValue)}
							value={genderValue}
						>
							<View style={styles.get("radioGroup", {ColorMe, typography})}>
								<View>
									<Text>GENDER: </Text>
								</View>
								<View>
									<Text>{GENDER_USER[0]}</Text>
									<RadioButton value={GENDER_USER[0]} />
								</View>
								<View>
									<Text>{GENDER_USER[1]}</Text>
									<RadioButton value={GENDER_USER[1]} />
								</View>
								<View>
									<Text>{GENDER_USER[2]}</Text>
									<RadioButton value={GENDER_USER[2]} />
								</View>
							</View>
						</RadioButton.Group>

						<InputIconComp
							name='phone'
							//find icon: https://icons.expo.fyi
							iconName='phone'
							iconProvider='feather'
							//Option iconProvider: AntDesign,Entypo,EvilIcons,Feather,FontAwesome,FontAwesome5,Fontisto,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons,Octicons,SimpleLineIcons,Zocial
							placeholder='Phone number'
							secureTextEntry={false}
							maskType={PHONE_MASK}
							maskChar='-'
							alwaysShowMask={false}
							rules={{
								required: "Phone number is required!",
								pattern: {
									value: PHONE_REQUIRED,
									message: "Phone number is required!",
								},
							}}
							control={control}
							inputColor={ColorMe.DARK}
							inputBorderColor={ColorMe.LINE_COLOR_1}
							iconColor={ColorMe.DARK}
							backgroundColor={ColorMe.LIGHT_1}
						/>

						<InputIconComp
							name='street'
							//find icon: https://icons.expo.fyi
							iconName='enviroment'
							iconProvider='antDesign'
							//Option iconProvider: AntDesign,Entypo,EvilIcons,Feather,FontAwesome,FontAwesome5,Fontisto,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons,Octicons,SimpleLineIcons,Zocial
							placeholder='Address'
							secureTextEntry={false}
							maskType={false}
							maskChar='_'
							alwaysShowMask={false}
							rules
							control={control}
							inputColor={ColorMe.DARK}
							inputBorderColor={ColorMe.LINE_COLOR_1}
							iconColor={ColorMe.DARK}
							backgroundColor={ColorMe.LIGHT_1}
						/>
						<InputIconComp
							name='Zipcode'
							//find icon: https://icons.expo.fyi
							iconName='zip-box'
							iconProvider='materialCommunityIcons'
							//Option iconProvider: AntDesign,Entypo,EvilIcons,Feather,FontAwesome,FontAwesome5,Fontisto,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons,Octicons,SimpleLineIcons,Zocial
							placeholder='ZIP Code'
							secureTextEntry={false}
							maskType={false}
							maskChar='_'
							alwaysShowMask={false}
							rules
							control={control}
							inputColor={ColorMe.DARK}
							inputBorderColor={ColorMe.LINE_COLOR_1}
							iconColor={ColorMe.DARK}
							backgroundColor={ColorMe.LIGHT_1}
						/>

						<InputIconComp
							name='City'
							//find icon: https://icons.expo.fyi
							iconName='location-city'
							iconProvider='materialIcons'
							//Option iconProvider: AntDesign,Entypo,EvilIcons,Feather,FontAwesome,FontAwesome5,Fontisto,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons,Octicons,SimpleLineIcons,Zocial
							placeholder='City'
							secureTextEntry={false}
							maskType={false}
							maskChar='_'
							alwaysShowMask={false}
							rules
							control={control}
							inputColor={ColorMe.DARK}
							inputBorderColor={ColorMe.LINE_COLOR_1}
							iconColor={ColorMe.DARK}
							backgroundColor={ColorMe.LIGHT_1}
						/>

						<InputIconComp
							name='Nation'
							//find icon: https://icons.expo.fyi
							iconName='flag'
							iconProvider='fontAwesome'
							//Option iconProvider: AntDesign,Entypo,EvilIcons,Feather,FontAwesome,FontAwesome5,Fontisto,Foundation,Ionicons,MaterialCommunityIcons,MaterialIcons,Octicons,SimpleLineIcons,Zocial
							placeholder='Country'
							secureTextEntry={false}
							maskType={false}
							maskChar='_'
							alwaysShowMask={false}
							rules
							control={control}
							inputColor={ColorMe.DARK}
							inputBorderColor={ColorMe.LINE_COLOR_1}
							iconColor={ColorMe.DARK}
							backgroundColor={ColorMe.LIGHT_1}
						/>
						<RadioButton.Group
							onValueChange={(newValue) => setTeachersValue(newValue)}
							value={teachersValue}
						>
							<View style={styles.get("radioGroup", {ColorMe, typography})}>
								<View>
									<Text>LEVEL: </Text>
								</View>
								<View>
									<Text>{TEACHERS_LEVELS[0]}</Text>
									<RadioButton value={TEACHERS_LEVELS[0]} />
								</View>
								<View>
									<Text>{TEACHERS_LEVELS[1]}</Text>
									<RadioButton value={TEACHERS_LEVELS[1]} />
								</View>
								<View>
									<Text>{TEACHERS_LEVELS[2]}</Text>
									<RadioButton value={TEACHERS_LEVELS[2]} />
								</View>
							</View>
						</RadioButton.Group>

						<ButtonComp
							caption='Sign-Up'
							style={{
								height: 45,
								width: "100%",
								borderRadius: 5,
								marginTop: 30,
								backgroundColor: ColorMe.BLUE_5,
								color: "white",
							}}
							type='submit'
							onPress={handleSubmit(onSignUpPressed)}
						></ButtonComp>

						<Text
							style={{
								fontFamily: typography.fontFamily.CANTARELL,
								color: ColorMe.TEXT_COLOR_1,
								fontSize: typography.fontSize.H6,
								marginTop: 10,
							}}
							onPress={() => onSignInPressed()}
						>
							By registering, you confirm that you accept our{" "}
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
								onPress={() => onTermsPressed()}
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
								onPress={() => onPrivacyPressed()}
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
								Change membership group
							</Text>
						</View>
					</View>
				</View>
			</ContainerStl>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: (params) => ({
		flex: 1,
		alignItems: "center",
		paddingBottom: 40,
		maxWidth: 800,
		width: "100%",
		marginLeft: "auto",
		marginRight: "auto",
	}),
	image: (params) => ({
		width: 200,
		height: 200,
	}),
	wrapHeader: (params) => ({
		width: "100%",
		height: "auto",
		marginLeft: "auto",
		marginRight: "auto",
		textAlign: "center",
		alignItems: "center",
		textAlignVertical: "center",
	}),
	groupInputText: (params) => ({
		marginTop: 0,
		width: "100%",
		padding: 10,
		// backgroundColor: params.ColorMe.DARK_1,
	}),

	radioGroup: (params) => ({
		fontFamily: params.typography.fontFamily.CANTARELL,
		color: params.ColorMe.TEXT_COLOR_1,
		backgroundColor: params.ColorMe.LIGHT,
		borderRadius: 5,
		fontSize: params.typography.fontSize.H5,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		marginBottom: 20,
		padding: 5,
		borderWidth: 0.2,
		borderColor: params.ColorMe.LINE_COLOR_1,
	}),

	loadingImageComp: (params) => ({
		backgroundColor: params.ColorMe.BACK_COLOR_1,
		width: 75,
		height: 75,
		borderRadius: 100,
		borderWidth: 4,
		borderColor: params.ColorMe.TEXT_COLOR_1,
		backgroundColor: params.ColorMe.GREEN_1,
		objectFit: "contain",
		position: "relative",
		marginTop: 40,
	}),
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUpGroupScreen);
