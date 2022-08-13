///** DEFAULT */
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import {
  Alert,
  Modal,
  StyleSheet,
  Pressable,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Clipboard from "expo-clipboard";
///** CUSTOM */
import { BoxStl, TitleStl, ContainerStl, TextStl } from "./styled/index";
import { colors, typography, components } from "../theme/index";
import Ionicons from "@expo/vector-icons/Ionicons";
///** REDUX */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeTheme } from "../actions/themeAction";

const copyToClipboard = async (txt) => {
  console.log(txt);
  await Clipboard.setStringAsync(txt);
};

const BoxItemColor = (props) => {
  // console.log("nameColor", props.nameColor);
  // console.log("deskColorRgb", props.deskColorRgb);
  // console.log("props", props);
  const nameColor = props.nameColor;
  const deskColorRgb = props.deskColorRgb;

  return (
    <ThemeProvider theme={props.THEME}>
      <BoxStl
        onStartShouldSetResponder={() =>
          copyToClipboard(`Nome: ${nameColor} -- RGB: ${deskColorRgb} `)
        }
        style={{
          backgroundColor: deskColorRgb,
          width: "200px",
          marginBottom: "10px",
          paddingBottom: "5px",
          cursor: "pointer",
          borderRadius: "5px",
          height: "auto",
          display: "inline-block",
          paddingTop: "5px",
          border: "1px solid black",
        }}
      >
        <Ionicons
          name='copy'
          size={16}
          color='black'
          style={{ margin: "5px" }}
        ></Ionicons>

        <TextStl
          style={{
            fontSize: typography.fontSize.H5,
            fontWeight: typography.fontWeight.XXXS,
            textAlign: "left",
            color: props.THEME.coloriTema.DARK,
          }}
        >
          {nameColor}
        </TextStl>
        <BoxStl
          style={{
            backgroundColor: deskColorRgb,
            width: "100%",
          }}
        >
          <TextStl
            style={{
              fontSize: typography.fontSize.H4,
              textAlign: "center",
              color: props.THEME.coloriTema.DARK,
            }}
          >
            {deskColorRgb}
          </TextStl>
        </BoxStl>
      </BoxStl>
    </ThemeProvider>
  );
};

//* REDUX - ///////////
const mapStateToProps = (state) => ({
  THEME: state.themeReducer.theme,
});
const mapDispatchToProps = (dispatch) => ({
  changeTheme: bindActionCreators(changeTheme, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(BoxItemColor);
