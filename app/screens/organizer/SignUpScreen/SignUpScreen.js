import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
///** CUSTOM */
import {
  StatusBarComp,
  LogoImgComp,
  ThemeChangeComp,
  SeparatorComp,
  CustomInputComp,
  MaterialIconTextboxComp,
  MaterialButtonVioletComp,
  MaterialButtonShareComp,
} from "../../../components/index";
import { colors, typography, components } from "../../../theme/index";
///** CUSTOM */
import {
  BoxStl,
  TitleStl,
  ContainerStl,
  TextStl,
} from "../../../components/styled/index";
///** REDUX */
import { connect } from "react-redux";

import { Formik, Field, Form } from "formik";
import { LOGO_APP } from "../../../constants";

const SignUpScreen = (color) => {
  const ColorMe = color.color;
  console.log(ColorMe);

  return (
    <View style={[styles.container, { backgroundColor: ColorMe.BACK_COLOR_1 }]}>
      <View style={styles.imageStack}>
        <Image
          source={LOGO_APP}
          resizeMode='contain'
          style={styles.image}
        ></Image>

        <Text
          style={[
            styles.signup,
            { fontFamily: typography.fontFamily.CANTARELL },
          ]}
        >
          Signup
        </Text>
        <Text
          style={[
            styles.textHaveAccount,
            { fontFamily: typography.fontFamily.CANTARELL },
          ]}
        >
          Already have account?
        </Text>
        <Text
          style={[
            styles.linkLogin,
            { fontFamily: typography.fontFamily.CANTARELL },
          ]}
        >
          Login
        </Text>
      </View>

      <MaterialIconTextboxComp
        iconStyleName='user-secret'
        inputStyle='Username'
        iconStyle='user-secret'
        style={styles.textboxUsername}
      ></MaterialIconTextboxComp>

      <MaterialIconTextboxComp
        iconStyleName='Email'
        inputStyle='Email'
        iconStyle='envelope'
        style={styles.textboxEmail}
      ></MaterialIconTextboxComp>

      <MaterialIconTextboxComp
        iconStyle='key'
        inputStyle='Password'
        style={styles.textboxPassword}
      ></MaterialIconTextboxComp>
      <MaterialIconTextboxComp
        iconStyle='key'
        inputStyle='Confirm Password'
        style={styles.textboxConfirmPassword}
      ></MaterialIconTextboxComp>
      <MaterialButtonVioletComp
        caption='REGISTER NOW'
        style={styles.buttonRegisterNow}
      ></MaterialButtonVioletComp>
      <View style={styles.groupSeparator}>
        <View style={styles.rectRow}>
          <View style={styles.rect}></View>
          <Text style={styles.or6}>Or</Text>
          <View style={styles.rect2}></View>
        </View>
      </View>
      <View style={styles.groupSocialButton}>
        <View style={styles.buttonShareGoogleRow}>
          <MaterialButtonShareComp
            iconName='share-variant'
            icon='google'
            style={styles.buttonShareGoogle}
          ></MaterialButtonShareComp>
          <MaterialButtonShareComp
            iconName='share-variant'
            icon='facebook'
            style={styles.buttonShareFacebook}
          ></MaterialButtonShareComp>
          <MaterialButtonShareComp
            iconName='share-variant'
            icon='twitter'
            style={styles.buttonShareTwitter}
          ></MaterialButtonShareComp>
          <MaterialButtonShareComp
            iconName='share-variant'
            icon='apple'
            style={styles.buttonShareApple}
          ></MaterialButtonShareComp>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 0,
    left: 0,
  },
  signup: {
    // fontFamily: "cantarell-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 48,
    letterSpacing: -4,
    position: "absolute",
    top: 128,
    left: 82,
    height: 70,
    width: 183,
  },
  textHaveAccount: {
    // fontFamily: "cantarell-regular",
    color: "#121212",
    position: "absolute",
    top: 195,
    left: 57,
    height: 20,
    width: 198,
    fontSize: 18,
  },
  linkLogin: {
    // fontFamily: "cantarell-700",
    color: "#121212",
    position: "absolute",
    top: 195,
    left: 249,
    height: 20,
    width: 69,
    fontSize: 18,
  },
  imageStack: {
    width: 318,
    height: 215,
    marginTop: 20,
  },
  textboxUsername: {
    width: 319,
    height: 43,
    marginTop: 40,
    marginLeft: 28,
  },
  textboxEmail: {
    width: 319,
    height: 43,
    marginTop: 20,
    marginLeft: 28,
  },
  textboxPassword: {
    width: 319,
    height: 43,
    marginTop: 20,
    marginLeft: 28,
  },
  textboxConfirmPassword: {
    width: 319,
    height: 43,
    marginTop: 20,
    marginLeft: 28,
  },
  buttonRegisterNow: {
    height: 45,
    width: 319,
    borderRadius: 5,
    marginTop: 30,
    marginLeft: 28,
  },
  groupSeparator: {
    width: 319,
    height: 20,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 36,
  },
  rect: {
    width: 133,
    height: 2,
    borderWidth: 1,
    borderColor: "#000000",
    borderTopWidth: 1,
    opacity: 0.4,
    marginTop: 10,
  },
  or6: {
    // fontFamily: "cantarell-regular",
    color: "#121212",
    marginLeft: 11,
  },
  rect2: {
    width: 133,
    height: 2,
    borderWidth: 1,
    borderColor: "#000000",
    borderTopWidth: 1,
    opacity: 0.4,
    marginLeft: 11,
    marginTop: 10,
  },
  rectRow: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: 14,
  },
  groupSocialButton: {
    width: 319,
    height: 56,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 28,
  },
  buttonShareGoogle: {
    height: 56,
    width: 56,
    backgroundColor: "rgba(255,97,15,1)",
  },
  buttonShareFacebook: {
    width: 56,
    height: 56,
    backgroundColor: "rgba(0,145,255,1)",
    marginLeft: 27,
  },
  buttonShareTwitter: {
    width: 56,
    height: 56,
    backgroundColor: "rgba(0,189,223,1)",
    marginLeft: 35,
  },
  buttonShareApple: {
    width: 56,
    height: 56,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 33,
  },
  buttonShareGoogleRow: {
    height: 56,
    flexDirection: "row",
    flex: 1,
  },
});

//* REDUX - ///////////
// const mapStateToProps = (state) => ({
//   THEME: state.themeReducer.theme,
// });
/****** REDUX **************** */

export default SignUpScreen;
