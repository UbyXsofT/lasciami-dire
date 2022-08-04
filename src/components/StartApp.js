import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import * as Font from "expo-font";
import ThemeProvider from "@theme/ThemeProvider";
const pathFont = "../assets/fonts/Cantarell-VF.otf";

//@@@ CARICO LE RISORSE NECESSARIE
export default function StartApp({ children }) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      console.log(
        "Sono un'attività che viene eseguita prima che la schermata iniziale scompaia"
      );
      await Font.loadAsync({
        Cantarell: require(pathFont),
      });
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

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      {/* @@@ PREPARO IL THEME PROVIDER E CONTEXT */}
      <ThemeProvider>{children}</ThemeProvider>
    </View>
  );
}