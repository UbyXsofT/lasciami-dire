///** DEFAULT */
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";
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
import { StatusBarComp, LogoImg } from "../../../components/index";
import { colors, typography, components } from "../../../theme/index";

const ThemeScreen = (props) => {
  //console.log("props", props);

  // let b = props.THEME.coloriTema.map((item) => item + 1);
  // console.log(b);
  // props.THEME.coloriTema.map((anObjectMapped, index) => {
  //   console.log(`${anObjectMapped.name}`);
  //   //return <p key={`${anObjectMapped.name}`}>{anObjectMapped.name}</p>;
  // });

  //console.log(colorArray);

  const copyToClipboard = async (txt) => {
    console.log(txt);
    await Clipboard.setStringAsync(txt);
  };

  useEffect(() => {
    const colorArray = colors;
    console.log("SampleFunction", colorArray.darkTheme);

    Object.entries(colorArray).map(([key, v]) => {
      console.log("key", key);
      console.log("v", v);

      // return (
      //   <BoxStl key={key}>
      //     <Text>{v}</Text>
      //   </BoxStl>
      // );
    });

    // colorArray.map((v, index) => {
    //   console.log("v", v);
    //   console.log("index", index);
    //   // return (
    //   //   <BoxStl key={index}>
    //   //     <Text>{v}</Text>
    //   //   </BoxStl>
    //   // );
    // });
  }, []);
  return (
    <ThemeProvider theme={props.THEME}>
      <ContainerStl>
        <Animated.View
          entering={LightSpeedInLeft}
          exiting={LightSpeedOutRight}
          layout={Layout.damping}
        >
          <TitleStl
            style={{ color: props.THEME.coloriTema.PRIMARY_TEXT_COLOR }}
          >
            Theme Screen
          </TitleStl>

          <BoxStl
            style={{
              backgroundColor: props.THEME.coloriTema.PRIMARY_BACKGROUND_COLOR,
              padding: 5,
            }}
          >
            <TextStl
              style={{ color: props.THEME.coloriTema.PRIMARY_TEXT_COLOR }}
              onPress={(props) => {
                copyToClipboard(
                  props.target.childNodes[0].nodeValue +
                    " " +
                    props.target.childNodes[1].nodeValue +
                    " " +
                    props.target.childNodes[2].nodeValue
                );
              }}
            >
              Color: green {"\n"} #1: "#8ff0a4"
            </TextStl>
          </BoxStl>

          <BoxStl
            style={{
              backgroundColor: props.THEME.coloriTema.PRIMARY_BACKGROUND_COLOR,
              padding: 5,
            }}
          >
            {/* ESTRARRE ARRAY */}
            {}
            {/* Object .map */}
            {/* {Object.entries(colorArray).map(([key, v]) => {
              return (
                <BoxStl key={key}>
                  <Text>{v}</Text>
                </BoxStl>
              );
            })} */}
          </BoxStl>

          {/* {colorArray.map((item, key) => (
            <Text
              key={key}
              style={styles.TextStyle}
              onPress={SampleFunction.bind(this, item)}
            >
              {" "}
              {item}{" "}
            </Text>
          ))} */}

          {/* <ItemPicker
            style={{}}
            onValueChange={(value) => {
              console.log(value);
              this.theme.changeTheme(value);
            }}
          >
            <Picker.Item label='Seleziona un tema colore' value='0' />
            {Object.keys(this.theme.theme.coloriExtra).map((option, i) => (
              //create options for each color option in our theme file
              <Picker.Item
                key={i}
                label={option}
                value={this.theme.theme.coloriExtra[option].itemValue}
              />
            ))}
          </ItemPicker> */}
        </Animated.View>
      </ContainerStl>
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
/****** REDUX **************** */

export default connect(mapStateToProps, mapDispatchToProps)(ThemeScreen);
