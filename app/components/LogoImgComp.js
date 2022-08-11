import React from "react";
import { Image } from "react-native";
import { LOGO_APP } from "../constants";

const LogoTitle = ({ WH, Radius }) => {
  return (
    <>
      <Image
        style={{ width: WH, height: WH, borderRadius: Radius }}
        source={LOGO_APP}
      />
    </>
  );
};

export default LogoTitle;
