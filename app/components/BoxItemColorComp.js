///** DEFAULT */
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";
///** CUSTOM */
import { BoxStl, ContainerStl, TextStl } from "./styled/index";
import { typography } from "../theme/index";
import Ionicons from "@expo/vector-icons/Ionicons";
import ModalComp from "./ModalComp";
import getRGB from "../utils/getRGB";
import isSimilarRGB from "../utils/isSimilarRGB";
///** REDUX */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RDX_InfoTheme } from "../store/actions/themeAction";
import { borderColor, borderStyle } from "styled-system";

const BoxItemColorComp = (props) => {
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
  const isSimilarChk = isSimilarRGB(
    getRGB(deskColorRgb),
    getRGB(props.THEME.colorsTheme.DARK),
    200
  );

  return (
    <ContainerStl
      Key='ContainerBoxItemColorComp'
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignSelf: "flex-start",
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
            width: 200,
            marginBottom: 10,
            paddingBottom: 5,
            cursor: "pointer",
            borderRadius: 5,
            height: "auto",
            // display: "inline-block",
            paddingTop: 5,
            border: 1,
            borderColor: "black",
            borderStyle: "solid",
          }}
        >
          <Ionicons
            name='copy'
            size={16}
            color={
              isSimilarChk === true
                ? props.THEME.colorsTheme.LIGHT
                : props.THEME.colorsTheme.DARK
            }
            style={{ margin: 5 }}
          ></Ionicons>

          <TextStl
            style={{
              fontSize: typography.fontSize.H5,
              fontWeight: typography.fontWeight.XL,
              textAlign: "left",
              color:
                isSimilarChk === true
                  ? props.THEME.colorsTheme.LIGHT
                  : props.THEME.colorsTheme.DARK,
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
                    ? props.THEME.colorsTheme.LIGHT
                    : props.THEME.colorsTheme.DARK,
              }}
            >
              {deskColorRgb}
            </TextStl>
          </BoxStl>
        </BoxStl>
      </TouchableOpacity>
    </ContainerStl>
  );
};

//* REDUX - ///////////
const mapStateToProps = (state) => ({
  THEME: state.themeReducer.theme,
});
const mapDispatchToProps = (dispatch) => ({
  RDX_InfoTheme: bindActionCreators(RDX_InfoTheme, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(BoxItemColorComp);
