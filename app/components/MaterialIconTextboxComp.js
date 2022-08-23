import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function MaterialIconTextboxComp(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name={props.iconStyle} style={styles.iconStyle}></Icon>
      <TextInput
        placeholder={props.inputStyle}
        selectTextOnFocus={true}
        blurOnSubmit={true}
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    paddingLeft: 8,
  },
  inputStyle: {
    color: "#000",
    marginLeft: 16,
    paddingRight: 5,
    fontFamily: "cantarell-regular",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8,
  },
});

export default MaterialIconTextboxComp;
