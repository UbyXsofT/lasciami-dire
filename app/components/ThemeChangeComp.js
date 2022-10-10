import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Switch} from "react-native";
import {Ionicons} from "@expo/vector-icons";
///** REDUX */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {RDX_InfoTheme} from "../store/actions/themeAction";
import AsyncStorage from "@react-native-async-storage/async-storage";

const rememberColorTheme = async (isLightTheme) => {
	//console.log("@@@ rememberColorTheme", isLightTheme);
	// console.log(" ColorMe.descTheme", ColorMe.descTheme);
	try {
		let parseJsonVal = null;
		const jsonValue = await AsyncStorage.getItem("USER-OPTION-KEY");
		jsonValue != null ? (parseJsonVal = JSON.parse(jsonValue)) : null;

		const rememberMe = parseJsonVal.DATI_UTENTE[0].USER_LOGIN_OPTIONS.REMEMBER_ME;
		const userName = parseJsonVal.DATI_UTENTE[0].USER_LOGIN_OPTIONS.USER_NAME;
		const psw = parseJsonVal.DATI_UTENTE[0].USER_LOGIN_OPTIONS.PASSWORD;

		const jsonOby = {
			"DATI_UTENTE": [
				{
					"USER_LOGIN_OPTIONS": {
						"REMEMBER_ME": rememberMe,
						"USER_NAME": userName,
						"PASSWORD": psw,
						"COLOR_THEME": isLightTheme,
					},
				},
			],
		};
		const jsonValue2 = JSON.stringify(jsonOby);
		//console.log("@@@ rememberColorTheme", jsonValue2);
		await AsyncStorage.setItem("USER-OPTION-KEY", jsonValue2);
	} catch (error) {
		//console.log("@@@ rememberColorTheme error:", error);
	}
};

const ThemeChangeComp = (props) => {
	//console.log("ThemeChangeComp props:", props);
	const [isEnabled, setIsEnabled] = useState(props.THEME.isLightTheme);

	const toggleSwitch = async () => {
		//console.log("toggleSwitch isEnabled: ", isEnabled);
		setIsEnabled(isEnabled ? false : true);
		await props.RDX_InfoTheme(isEnabled);
		rememberColorTheme(isEnabled);
	};

	const getStato = async () => {
		//console.log("@@@ getStato @@@");
		try {
			//se esiste la chiave salvata prendo il valore memorizzato del isLightTheme
			let parseJsonVal = null;
			const jsonValue = await AsyncStorage.getItem("USER-OPTION-KEY");
			jsonValue != null ? (parseJsonVal = JSON.parse(jsonValue)) : null;
			const COLOR_THEME = parseJsonVal.DATI_UTENTE[0].USER_LOGIN_OPTIONS.COLOR_THEME;
			//console.log("@@@ COLOR_THEME", COLOR_THEME);
			props.RDX_InfoTheme(COLOR_THEME ? true : false);

			//console.log("@@@ COLOR_THEME isEnabled", isEnabled);
		} catch (error) {
			//console.log("@@@ COLOR_THEME error", error);
			props.RDX_InfoTheme(true);
			//toggleSwitch;
		}
	};

	useEffect(() => {
		setTimeout(getStato, 100);
		//console.log("USEEFFECT IS: ", isEnabled);
	}, []);

	return (
		<View style={styles.container}>
			<Switch
				trackColor={{false: "#767577", true: "#81b0ff"}}
				thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
				ios_backgroundColor='#3e3e3e'
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
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

export default connect(mapStateToProps, mapDispatchToProps)(ThemeChangeComp);
