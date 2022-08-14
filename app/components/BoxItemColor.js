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
  Button,
  SafeAreaView,
} from "react-native";
import * as Clipboard from "expo-clipboard";
///** CUSTOM */
import { BoxStl, TitleStl, ContainerStl, TextStl } from "./styled/index";
import { colors, typography, components } from "../theme/index";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ModalComp } from "./index";
///** REDUX */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeTheme } from "../actions/themeAction";

// const openModal = () => {
//   return <ModalComp open={open} onClose={() => setOpen(false)} />;
// };

const getRGB = (color) => {
  color = parseInt(color.substring(1), 16);
  let r = color >> 16;
  let g = (color - (r << 16)) >> 8;
  let b = color - (r << 16) - (g << 8);
  return [r, g, b];
};

const isSimilar = ([r1, g1, b1], [r2, g2, b2], tolerance) => {
  return Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2) < tolerance;
};

const BoxItemColor = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const nameColor = props.nameColor;
  const deskColorRgb = props.deskColorRgb;

  const changeStateModal = (isVisible) => {
    setModalVisible(isVisible);
  };
  const copyToClipboard = async (txt) => {
    console.log(txt);
    changeStateModal(true);
    await Clipboard.setStringAsync(txt);
  };
  const isSimilarChk = isSimilar(
    getRGB(deskColorRgb),
    getRGB(props.THEME.coloriTema.DARK),
    200
  );

  return (
    // <ThemeProvider theme={props.THEME}>
    //<Child updateTextCB={this.updateText1} />
    <ContainerStl
      Key='ContainerBoxItemColor'
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignSelf: "flexStart",
      }}
    >
      <ModalComp
        changeStateModal={changeStateModal}
        isVisible={modalVisible}
        txt1={`Color information copied to the clipboard! \n\n Nome: ${nameColor} -- RGB: ${deskColorRgb} `}
      />

      <TouchableOpacity>
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
            color={
              isSimilarChk === true
                ? props.THEME.coloriTema.LIGHT
                : props.THEME.coloriTema.DARK
            }
            style={{ margin: "5px" }}
          ></Ionicons>

          <TextStl
            style={{
              fontSize: typography.fontSize.H5,
              fontWeight: typography.fontWeight.XL,
              textAlign: "left",
              color:
                isSimilarChk === true
                  ? props.THEME.coloriTema.LIGHT
                  : props.THEME.coloriTema.DARK,
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
                fontWeight: typography.fontWeight.X,
                textAlign: "center",
                color:
                  isSimilarChk === true
                    ? props.THEME.coloriTema.LIGHT
                    : props.THEME.coloriTema.DARK,
              }}
            >
              {deskColorRgb}
            </TextStl>
          </BoxStl>
        </BoxStl>
      </TouchableOpacity>
    </ContainerStl>
    // </ThemeProvider>
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
