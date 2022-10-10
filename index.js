import {registerRootComponent} from "expo";
import {Text, TextInput} from "react-native";
import {createRoot} from "react-dom/client";
import React, {StrictMode} from "react";
import Constants from "expo-constants";
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.maxFontSizeMultiplier = 1; //la quantità massima di ridimensionamento della dimensione del carattere.
TextInput.defaultProps = Text.defaultProps || {};
TextInput.defaultProps.maxFontSizeMultiplier = 1; //la quantità massima di ridimensionamento della dimensione del carattere.

import App from "./App";
import {Provider} from "react-redux";
import configureStore from "./app/store/configureStore.js";

//one signal ****
import OneSignal from "react-native-onesignal";
//import ONESIGNAL_APP_ID from "./app/constants";

// OneSignal Initialization
OneSignal.setAppId(Constants.manifest.extra.oneSignalAppId);

// promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
// We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
OneSignal.promptForPushNotificationsWithUserResponse();

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler((notificationReceivedEvent) => {
	console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
	let notification = notificationReceivedEvent.getNotification();
	console.log("notification: ", notification);
	const data = notification.additionalData;
	console.log("additionalData: ", data);
	// Complete with null means don't show a notification.
	notificationReceivedEvent.complete(notification);
});

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler((notification) => {
	console.log("OneSignal: notification opened:", notification);
});

//one signal ****

const store = configureStore();
// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
//   <StrictMode>
//     <Provider store={store}>
//       {" "}
//       <App />
//     </Provider>
//   </StrictMode>
// );

const RNRedux = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// registerRootComponent chiama AppRegistry.registerComponent('main', () => App);
// Garantisce inoltre che, indipendentemente dal caricamento dell'app in Expo Go o in una build nativa,
// l'ambiente è impostato in modo appropriato
registerRootComponent(RNRedux);
