import * as React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { TitleStl, ContainerStl } from "../../components/styled/index";
import {
  ButtonComp,
  SeparatorXTxtComp,
  InputIconComp,
} from "../../components/index";
import {
  LOGO_APP,
  PASSWORD_REQUIRED,
  PASSWORD_REQUIRED_MSG,
} from "../../constants";
import { typography } from "../../theme/index";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

const TestScreen = (props) => {
  const ColorMe = props.THEME.colorsTheme;
  return (
    <ScrollView style={{ backgroundColor: ColorMe.BACK_COLOR_1 }}>
      <ContainerStl>
        <View style={[styles.container]}>
          <View style={styles.wrapHeader}>
            <Image
              source={LOGO_APP}
              resizeMode='contain'
              style={styles.image}
            ></Image>

            <TitleStl style={{ color: ColorMe.TEXT_COLOR_1, marginTop: -25 }}>
              TEST SCREEN
            </TitleStl>
          </View>
        </View>
      </ContainerStl>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 40,
    maxWidth: 800,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    width: 200,
    height: 200,
  },
  wrapHeader: {
    width: "100%",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  groupInputText: {
    marginTop: 0,
    width: "100%",
    padding: 10,
  },
});

//* REDUX - *****************//
const mapStateToProps = (state) => ({
  THEME: state.themeReducer.theme,
});
/****** REDUX **************** */
export default connect(mapStateToProps)(TestScreen);
