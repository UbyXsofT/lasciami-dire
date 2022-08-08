import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import * as Font from "expo-font";
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
        Cantarell: require("@assets/fonts/Cantarell-VF.otf"),
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
  onLayoutRootView();
  // if (!appIsReady) {
  //   return null;
  // }
  return <>{children}</>;
}
