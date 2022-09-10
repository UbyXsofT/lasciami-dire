import * as SplashScreen from "expo-splash-screen";
import React, {useCallback, useEffect, useState} from "react";
import * as Font from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
///** REDUX */
import {connect, useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {RDX_InfoTheme} from "../store/actions/themeAction";
import {RDX_InfoUser} from "../store/actions/userAction";
import MyCrypto from "./MyCrypto";
//@@@ CARICO LE RISORSE NECESSARIE

const StartApp = ({children}) => {
	const [appIsReady, setAppIsReady] = useState(false);

	const dispatch = useDispatch();
	//const user = useSelector((store) => store.userReducer.user);
	//console.log("userReducer", user);

	const getRememberedUser = async () => {
		try {
			let parseJsonVal = null;
			const jsonValue = await AsyncStorage.getItem("USER-OPTION-KEY");
			jsonValue != null ? (parseJsonVal = JSON.parse(jsonValue)) : null;
			console.log("getRememberedUser RETURN:", parseJsonVal);

			const rememberMe = parseJsonVal.DATI_UTENTE[0].USER_LOGIN_OPTIONS.REMEMBER_ME;
			const userName = parseJsonVal.DATI_UTENTE[0].USER_LOGIN_OPTIONS.USER_NAME;
			const psw = parseJsonVal.DATI_UTENTE[0].USER_LOGIN_OPTIONS.PASSWORD;

			dispatch(RDX_InfoUser(rememberMe, userName));

			console.log("rememberMe:", rememberMe, "userName:", userName, "psw:", psw);
		} catch (error) {
			console.log("getRememberedUser error:", error);
		}
	};

	useEffect(() => {
		let mounted = true;
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
			console.log("Sono un'attività che viene eseguita prima che la schermata iniziale scompaia");
			//QUINDI CARICO TUTTE LE RISORSE
			await Font.loadAsync({
				Cantarell: require("../assets/fonts/Cantarell-VF.otf"),
			});

			const myEncryptData = MyCrypto("encryptData", "la mia password", "username");
			const myRESTEncryptData = MyCrypto("dencryptData", myEncryptData, "username");

			//VERIFICO i DATI SALVATI IN LOCALSTORAGE
			await getRememberedUser();
			setAppIsReady(true);
		}
		prepare();
		return function cleanup() {
			mounted = false;
		};
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);
	onLayoutRootView();
	if (!appIsReady) {
		return null;
	} else {
		return <>{children}</>;
	}
};

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
export default connect(mapStateToProps, mapDispatchToProps)(StartApp);
