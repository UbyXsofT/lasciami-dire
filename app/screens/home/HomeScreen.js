///** DEFAULT */
import React from "react";
import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import { View, ScrollView, SafeAreaView } from "react-native";
///** CUSTOM */
import {
  StatusBarComp,
  LogoImgComp,
  ThemeChangeComp,
  SeparatorComp,
  ModalComp,
} from "../../components/index";
import { colors, typography, components } from "../../theme/index";
///** CUSTOM */
import {
  BoxStl,
  TitleStl,
  ContainerStl,
  TextStl,
} from "../../components/styled/index";

///** REDUX */
import { connect } from "react-redux";

const HomeScreen = (props) => {
  console.log("HomeScreen", props);
  const ColorMe = props.THEME.colorsTheme;

  return (
    <ScrollView style={{ backgroundColor: ColorMe.BACK_COLOR_1 }}>
      <ContainerStl>
        <TitleStl style={{ color: ColorMe.TEXT_COLOR_1, marginTop: -25 }}>
          home
        </TitleStl>

        <StatusBarComp
          colorTheme={props.THEME.descTheme}
          backgroundColorTheme={ColorMe.BACK_COLOR_1}
        />
      </ContainerStl>
    </ScrollView>
  );
};

//* REDUX - *****************//
const mapStateToProps = (state) => ({
  THEME: state.themeReducer.theme,
  USER: state.userReducer.user,
});
/****** REDUX **************** */

export default connect(mapStateToProps)(HomeScreen);
