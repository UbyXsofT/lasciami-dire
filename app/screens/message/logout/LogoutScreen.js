import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { TitleStl, ContainerStl } from "../../../components/styled/index";
import {
  ButtonComp,
  SeparatorXTxtComp,
  InputIconComp,
  ModalComp,
} from "../../../components/index";
import {
  LOGO_APP,
  PASSWORD_REQUIRED,
  PASSWORD_REQUIRED_MSG,
  MAX_LENGTH_INPUT_USER,
  MIN_LENGTH_INPUT_USER,
} from "../../../constants";
import { typography } from "../../../theme/index";
//REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RDX_InfoTheme } from "../../../store/actions/themeAction";
import { RDX_InfoUser } from "../../../store/actions/userAction";
import { useForm } from "react-hook-form";

const LogoutScreen = (props) => {
  console.log("LogoutScreen", props);
  const ColorMe = props.THEME.colorsTheme;
  const NavigateMe = props.navigation;

  const [modalVisible, setModalVisible] = useState(false);
  const changeStateModal = (isVisible) => {
    setModalVisible(isVisible);
  };

  const modalOnPressOK = (isOnPressOK) => {
    console.log("modalOnPressOK", isOnPressOK);
    changeStateModal(false);
    NavigateMe.navigate("SignIn");
  };
  const modalOnPressNO = (isOnPressNO) => {
    console.log("modalOnPressNO", isOnPressNO);
    NavigateMe.navigate("Home");
    // changeStateModal(false);
  };

  useEffect(() => {
    props.route.params.message
      ? changeStateModal(true)
      : changeStateModal(false);
  }, [modalVisible]);

  return (
    <ScrollView style={{ backgroundColor: ColorMe.BACK_COLOR_1 }}>
      <ContainerStl>
        <ModalComp
          modalOnPressOK={modalOnPressOK}
          modalOnPressNO={modalOnPressNO}
          isVisible={modalVisible}
          txt1={props.route.params.message || "message"}
        />
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

//* REDUX - //
const mapStateToProps = (state) => ({
  THEME: state.themeReducer.theme,
  USER: state.userReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  RDX_InfoTheme: bindActionCreators(RDX_InfoTheme, dispatch),
  RDX_InfoUser: bindActionCreators(RDX_InfoUser, dispatch),
});
/****** REDUX **************** */
export default connect(mapStateToProps, mapDispatchToProps)(LogoutScreen);
