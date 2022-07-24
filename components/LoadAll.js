import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import * as Font from "expo-font";

export default function LoadAll() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      {
        /* Mantieni visibile la schermata iniziale */
      }
      await SplashScreen.preventAutoHideAsync();
      {
        /* Fai quello che ti serve prima che la schermata iniziale venga nascosta */
      }
      console.log(
        "Sono un'attività che viene eseguita prima che la schermata iniziale scompaia"
      );
      await Font.loadAsync({
        Cantarell: require("../assets/fonts/Cantarell-VF.otf"),
      });
      {
        /* Quindi indica all'applicazione di eseguire il rendering */
      }
      setAppIsReady(true);
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      {
        /* Hide the splash screen */
      }
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return <View onLayout={onLayoutRootView}></View>;
}
