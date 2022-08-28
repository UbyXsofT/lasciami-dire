import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors, typography, components } from "../theme/index";

function ButtonComp({ onPress, style, caption }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        style,
        { backgroundColor: style.backgroundColor },
      ]}
    >
      <Text
        style={{
          color: style.color,
          fontFamily: typography.fontFamily.CANTARELL,
          fontSize: typography.fontSize.H3,
        }}
      >
        {caption || "BUTTON"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default ButtonComp;
