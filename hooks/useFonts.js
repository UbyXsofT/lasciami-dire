import * as Font from "expo-font";
import { useEffect, useCallback } from "react";

export default function useFonts() {
  useEffect(() => {
    async function prepare() {
      try {
        Font.useFonts({
          "Cantarell": require("../assets/fonts/Cantarell-VF.otf"),
        });
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        //alert("prepare");
      } catch (e) {
        console.warn(e);
      } finally {
        return true;
      }
    }

    prepare();
  }, []);
}
