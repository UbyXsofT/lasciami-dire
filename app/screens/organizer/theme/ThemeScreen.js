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
import Ionicons from "@expo/vector-icons/Ionicons";
///** REANIMATED */
import Animated, {
  LightSpeedInLeft,
  LightSpeedOutRight,
  Layout,
} from "react-native-reanimated";

///** REDUX */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeTheme } from "../../../actions/themeAction";

///** CUSTOM */
import {
  BoxStl,
  TitleStl,
  ContainerStl,
  TextStl,
} from "../../../components/styled/index";
import {
  StatusBarComp,
  LogoImg,
  SwitchThemeComp,
  ModalComp,
  BoxItemColor,
} from "../../../components/index";
import { colors, typography, components } from "../../../theme/index";

const ThemeScreen = (props) => {
  //console.log("props", props);
  const renderItem = (item, props) =>
    item.Case === "COLOR" ? (
      <BoxItemColor
        key={item.nameColor + item.deskColorRgb}
        nameColor={item.nameColor}
        deskColorRgb={item.deskColorRgb}
        props={props}
      />
    ) : (
      <></>
      //TYPOGRAPHY
      // (console.log("rootTypo", item.rootTypo),
      // console.log("nameTypo", item.nameTypo),
      // console.log("deskTypo", item.deskTypo))

      // <BoxItemColor
      //   key={item.nameColor + item.deskColorRgb}
      //   nameColor={item.nameColor}
      //   deskColorRgb={item.deskColorRgb}
      // />
    );

  return (
    <ScrollView>
      <ThemeProvider theme={props.THEME}>
        <ContainerStl Key='ContainerStl_Theme'>
          {/* <Animated.View
            entering={LightSpeedInLeft}
            exiting={LightSpeedOutRight}
            layout={Layout.damping}
          > */}
          <TitleStl style={{ color: props.THEME.coloriTema.TEXT_COLOR_1 }}>
            Theme Screen
          </TitleStl>

          <TextStl
            style={{
              color: props.THEME.coloriTema.TEXT_COLOR_1,
              fontSize: typography.fontSize.H3,
              textAlign: "left",
            }}
          >
            COLOR PALETTE:
          </TextStl>

          <ContainerStl
            Key='colorsContainer1'
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignSelf: "flexStart",
            }}
          >
            {/** CONTAINER */}
            {Object.entries(props.THEME.coloriTema).map((colorMe, index) => {
              return renderItem({
                "Case": "COLOR",
                "nameColor": colorMe[0],
                "deskColorRgb": colorMe[1],
              });
            })}
          </ContainerStl>
          {/** TYPOGRAPHY */}
          <TextStl
            style={{
              color: props.THEME.coloriTema.TEXT_COLOR_1,
              fontSize: typography.fontSize.H3,
              textAlign: "left",
            }}
          >
            TYPOGRAPHY:
          </TextStl>

          <BoxStl
            Key='typographyContainer1'
            style={{
              backgroundColor: props.THEME.coloriTema.BACK_COLOR_1,
              width: "auto",
              height: "auto",
              marginBottom: "50px",
            }}
          >
            {/** CONTAINER */}
            {Object.entries(typography).map((val, index) => {
              // console.log("NOME: ", val);
              // console.log("index", index);

              Object.entries(val[1]).map((val2, index2) => {
                // console.log("NOME2: ", val2[0]);
                // console.log("VALORE2: ", val2[1]);
                return renderItem({
                  "Case": "TYPOGRAPHY",
                  "rootTypo": val[0],
                  "nameTypo": val2[0],
                  "deskTypo": val2[1],
                });
              });
            })}
          </BoxStl>

          {/* </Animated.View> */}
        </ContainerStl>
      </ThemeProvider>
    </ScrollView>
  );
};

//* REDUX - ///////////
const mapStateToProps = (state) => ({
  THEME: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: bindActionCreators(changeTheme, dispatch),
});
/****** REDUX **************** */

export default connect(mapStateToProps, mapDispatchToProps)(ThemeScreen);
