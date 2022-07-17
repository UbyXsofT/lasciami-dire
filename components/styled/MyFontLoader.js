import React, { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";

export default function MyFontLoader() {
  return Font.useFonts({
    "Cantarell": require("../../assets/fonts/Cantarell-VF.otf"),
  });
}
