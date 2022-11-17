import React from "react";
import {View, ScrollView, Text, StyleSheet, Image} from "react-native";
import {TitleStl, ContainerStl, TextStl} from "../../../components/styled/index";
import {
	ButtonComp,
	SeparatorXTxtComp,
	InputIconComp,
	AvatarComp,
	ModalComp,
} from "../../../components/index";
import {
	LOGO_APP,
	PASSWORD_REQUIRED,
	PASSWORD_REQUIRED_MSG,
	MAX_LENGTH_INPUT_USER,
	MIN_LENGTH_INPUT_USER,
	AVATAR_STUDENTS,
	AVATAR_PARENTS,
	AVATAR_TEACHERS,
} from "../../../constants";
import {typography} from "../../../theme/index";
import {connect} from "react-redux";
import {useForm} from "react-hook-form";

const SignUpScreen = (props) => {
	console.log("SignUpScreen", props);

	const ColorMe = props.THEME.colorsTheme;
	const NavigateMe = props.navigation;

	const {
		control,
		handleSubmit,
		formState: {errors},
	} = useForm();

	//console.log(errors);

	const onGroupPressed = (props) => {
		NavigateMe.navigate("SignUpGroup", {
			Group: props,
		});

		console.log("onGroupPressed", props);
	};

	const onSignInPressed = () => {
		console.log("onSignInPressed");
		NavigateMe.navigate("SignIn");
	};

	const createListComp = (meNum) => {
		//demo creazione lista componenti
		const rows = [];
		for (let i = 0; i < meNum; i++) {
			// note: we are adding a key prop here to allow react to uniquely identify each
			// element in this array. see: https://reactjs.org/docs/lists-and-keys.html
			rows
				.push
				// <AvatarComp
				//   source={AVATAR_TEACHERS}
				//   onPress={() => onGroupPressed("Teachers")}
				//   caption={"Teachers"}
				//   textColor={ColorMe.TEXT_COLOR_1}
				//   contBackColor={ColorMe.GREEN_1}
				//   contWidth='100%'
				//   contFlexDirection='row'
				//   contBorderRadius={5}
				//   styleImg={{
				//     backgroundColor: ColorMe.BACK_COLOR_1,
				//     width: 100,
				//     height: 100,
				//     borderRadius: 100,
				//     borderWidth: 4,
				//     borderColor: ColorMe.TEXT_COLOR_1,
				//     backgroundColor: ColorMe.GREEN_1,
				//     marginRight: 20,
				//     objectFit: "contain",
				//     position: "relative",
				//   }}
				// />
				();
		}
		return <>{rows}</>;
	};

	return (
		<ScrollView style={{backgroundColor: ColorMe.BACK_COLOR_1}}>
			<ContainerStl>
				<View style={[styles.container]}>
					<View style={styles.wrapHeader}>
						<Image
							source={LOGO_APP}
							resizeMode='contain'
							style={styles.imageLogo}
						></Image>

						<TextStl
							style={{
								color: ColorMe.TEXT_COLOR_1,
								marginTop: -25,
								fontSize: typography.fontSize.H3,
							}}
						>
							Select membership group:
						</TextStl>
					</View>

					<View style={styles.groupAvatars}>
						<AvatarComp
							source={AVATAR_TEACHERS}
							onPress={() => onGroupPressed("Teachers")}
							caption={"Teachers"}
							textColor={ColorMe.DARK}
							contBackColor={ColorMe.GREEN_1}
							contWidth='100%'
							contFlexDirection='row'
							contBorderRadius={5}
							styleImg={{
								backgroundColor: ColorMe.BACK_COLOR_1,
								width: 75,
								height: 75,
								borderRadius: 100,
								borderWidth: 4,
								borderColor: ColorMe.DARK,
								backgroundColor: ColorMe.GREEN_1,
								marginRight: 20,
								objectFit: "contain",
								position: "relative",
							}}
						/>

						<AvatarComp
							source={AVATAR_PARENTS}
							onPress={() => onGroupPressed("Parents")}
							caption={"Parents"}
							textColor={ColorMe.DARK}
							contBackColor={ColorMe.YELLOW_1}
							contWidth='100%'
							contFlexDirection='row'
							contBorderRadius={5}
							resizeMode='contain'
							styleImg={{
								backgroundColor: ColorMe.BACK_COLOR_1,
								width: 75,
								height: 75,
								borderRadius: 100,
								borderWidth: 4,
								borderColor: ColorMe.DARK,
								backgroundColor: ColorMe.YELLOW_1,
								marginRight: 20,
								objectFit: "contain",
								position: "relative",
							}}
						/>
					</View>

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
	imageLogo: {
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
	groupAvatars: {
		marginTop: 0,
		width: "100%",
		padding: 10,
	},
});

//* REDUX - *****************//
const mapStateToProps = (state) => ({
	THEME: state.themeReducer.theme,
	USER: state.userReducer.user,
});
/****** REDUX **************** */
export default connect(mapStateToProps)(SignUpScreen);
