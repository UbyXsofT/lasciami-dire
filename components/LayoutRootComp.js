import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import * as Font from "expo-font";

export default function LayoutRootComp({ children }) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      console.log(
        "Sono un'attività che viene eseguita prima che la schermata iniziale scompaia"
      );
      await Font.loadAsync({
        Cantarell: require("../assets/fonts/Cantarell-VF.otf"),
      });
      setAppIsReady(true);
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return <View onLayout={onLayoutRootView}>{children}</View>;
}
