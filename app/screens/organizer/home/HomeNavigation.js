///** DEFAULT */
import React, {useState, useEffect} from "react";
import "react-native-gesture-handler";
import {ThemeProvider} from "styled-components/native";
import {View, ScrollView, SafeAreaView} from "react-native";
///** CUSTOM */
import {StatusBarComp, LogoImgComp, ThemeChangeComp, SeparatorComp, ModalComp} from "../../../components/index";
import {colors, typography, components} from "../../../theme/index";
///** CUSTOM */
import {BoxStl, TitleStl, ContainerStl, TextStl} from "../../../components/styled/index";

///** REDUX */
import {connect, useSelector, useDispatch} from "react-redux";
import {RDX_InfoUser} from "../../../store/actions/userAction";
///** NAVIGATION */
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from "@react-navigation/drawer";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeScreen} from "../../index";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STACK = createNativeStackNavigator();
const DRAWER = createDrawerNavigator();
const TAB = createBottomTabNavigator();

const HomeNavigation = (props) => {
	console.log("HomeNavigation", props);

	const ColorMe = props.THEME.colorsTheme;
	const NavigateMe = props.navigation;

	const dispatch = useDispatch();

	const [modalVisible, setModalVisible] = useState(false);
	const changeStateModal = (isVisible) => {
		setModalVisible(isVisible);
	};

	const forgetUser = async () => {
		console.log("forgetUser");
		try {
			await AsyncStorage.removeItem("USER-OPTION-KEY");
		} catch (error) {
			console.log("forgetUser error:", error);
		}
	};

	const logOut_Me = () => {
		console.log("logOut_Me");
		forgetUser();
		dispatch(RDX_InfoUser(false, null));
		// NavigateMe.navigate("SignIn");
	};

	const modalOnPressOK = (isOnPressOK) => {
		console.log("modalOnPressOK", isOnPressOK);

		dispatch(RDX_InfoUser(false));

		changeStateModal(false);
		NavigateMe.navigate("SignIn");
	};
	const modalOnPressNO = (isOnPressNO) => {
		console.log("modalOnPressNO", isOnPressNO);
		NavigateMe.navigate("Home");
		// changeStateModal(false);
	};

	// useEffect(() => {
	//   props.route.params.message
	//     ? changeStateModal(true)
	//     : changeStateModal(false);
	// }, [modalVisible]);

	const screenOptionStyle = {
		headerStyle: {
			backgroundColor: ColorMe.BACK_COLOR_1,
		},
		headerTintColor: ColorMe.TEXT_COLOR_2,
		// headerBackTitle: ColorMe.BACK_COLOR_1,
	};

	const colorTxtSwitch = {
		color: ColorMe.TEXT_COLOR_2,
		fontSize: typography.fontSize.H2,
	};

	const ViewStyle = {
		alignItems: "center",
		placeContent: "center",
		display: "flex",
		flexDirection: "row",
		padding: 10,
	};

	return (
		<>
			<DRAWER.Navigator
				drawerContent={(props) => {
					return (
						<DrawerContentScrollView {...props}>
							<View style={ViewStyle}>
								<LogoImgComp
									W={40}
									H={40}
									Radius={5}
								/>
								<TextStl style={colorTxtSwitch}>Lasciami Dire</TextStl>
								<ThemeChangeComp {...props} />
							</View>
							<SeparatorComp />
							<DrawerItemList {...props} />
							<DrawerItem
								label='Logout'
								onPress={() => logOut_Me()}
							/>
						</DrawerContentScrollView>
					);
				}}
				screenOptions={screenOptionStyle}
			>
				<DRAWER.Screen
					name='Home'
					component={HomeScreen}
				/>
				{/* <DRAWER.Screen name='Test' component={TestScreen} /> */}
				{/* <DRAWER.Screen name='Theme' component={ThemeScreen} /> */}
				{/* <DRAWER.Screen
          name='Logout'
          component={
            <ModalComp
              modalOnPressOK={modalOnPressOK}
              modalOnPressNO={modalOnPressNO}
              isVisible={modalVisible}
              txt1={"Are you sure you want to log out?"}
            />
          }
        /> */}
			</DRAWER.Navigator>

			<StatusBarComp
				colorTheme={props.THEME.descTheme}
				backgroundColorTheme={ColorMe.BACK_COLOR_1}
			/>
		</>
	);
};

//* REDUX - *****************//
const mapStateToProps = (state) => ({
	THEME: state.themeReducer.theme,
	USER: state.userReducer.user,
});
/****** REDUX **************** */

export default connect(mapStateToProps)(HomeNavigation);
