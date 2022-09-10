import React from "react";
import { Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { LOGO_APP } from "../constants";

const LogoAnimComp = ({ W, H, Radius, animationMe }) => {
  return (
    <Animatable.View animation={animationMe}>
      <Image
        style={{
          width: W,
          height: H,
          borderRadius: Radius,
          resizeMode: "contain",
        }}
        source={LOGO_APP}
      />
    </Animatable.View>
  );
};

export default LogoAnimComp;
