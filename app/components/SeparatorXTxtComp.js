import { View, Text } from "react-native";
import React from "react";
import { colors, typography, components } from "../theme/index";

const SeparatorXTxtComp = (props) => {
  //   console.log(props);
  const ColorMe = props.color;

  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
      <View
        style={{
          flex: 1,
          height: 1,
          width: 0,
          backgroundColor: ColorMe.TEXT_BACK_COLOR_1,
        }}
      />
      <View>
        <Text
          style={{
            width: 50,
            textAlign: "center",
            fontFamily: typography.fontFamily.CANTARELL,
            color: ColorMe.TEXT_COLOR_1,
            fontSize: typography.fontSize.H5,
            fontWeight: typography.fontWeight.XL,
          }}
        >
          {props.txt}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          height: 1,
          width: 200,
          backgroundColor: ColorMe.TEXT_BACK_COLOR_1,
        }}
      />
    </View>
  );
};

export default SeparatorXTxtComp;
