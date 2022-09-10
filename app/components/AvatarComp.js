import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { typography } from "../theme/index";
import LoadingImageComp from "./LoadingImageComp";

const AvatarComp = ({
  onPress,
  styleImg,
  caption,
  textColor,
  source,
  contBackColor,
  contWidth,
  contFlexDirection,
  contBorderRadius,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: contBackColor,
          width: contWidth,
          flexDirection: contFlexDirection,
          borderRadius: contBorderRadius,
        },
      ]}
    >
      <LoadingImageComp source={source} style={styleImg} />

      <Text
        style={{
          color: textColor,
          fontFamily: typography.fontFamily.CANTARELL,
          fontSize: typography.fontSize.H2,
        }}
      >
        {caption || "Descrizione"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    padding: 20,
    marginBottom: 10,
  },
});

export default AvatarComp;
