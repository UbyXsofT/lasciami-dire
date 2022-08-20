import { registerRootComponent } from "expo";
import { Text, TextInput } from "react-native";
import { createRoot } from "react-dom/client";
import React from "react";
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.maxFontSizeMultiplier = 1; // the maximum amount the font size will scale.
TextInput.defaultProps = Text.defaultProps || {};
TextInput.defaultProps.maxFontSizeMultiplier = 1; // the maximum amount the font size will scale.

import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./app/store/configureStore.js";

const store = configureStore();
//const container = document.getElementById("root");
//const root = createRoot(container);

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
