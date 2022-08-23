import React from "react";
import { Image } from "react-native";
import { LOGO_APP } from "../constants";

const LogoTitle = ({ W, H, Radius }) => {
  return (
    <>
      <Image
        style={{
          width: W,
          height: H,
          borderRadius: Radius,
          resizeMode: "contain",
        }}
        source={LOGO_APP}
      />
    </>
  );
};

export default LogoTitle;
