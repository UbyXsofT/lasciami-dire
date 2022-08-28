import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { TitleStl, ContainerStl } from "../../../../components/styled/index";
import {
  ButtonComp,
  SeparatorXTxtComp,
  InputIconComp,
} from "../../../../components/index";
import {
  LOGO_APP,
  PASSWORD_REQUIREDS,
  PASSWORD_REQUIREDS_MSG,
  MAXLENGTH_INPUT_USER,
  MINLENGTH_INPUT_USER,
} from "../../../../constants";
import { typography } from "../../../../theme/index";
//REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeTheme } from "../../../../actions/themeAction";
import { changeUser } from "../../../../actions/userAction";

import { useForm } from "react-hook-form";

const SignInScreen = (props) => {
  console.log("SignInScreen", props);

  const ColorMe = props.THEME.coloriTema;
  const NavigateMe = props.navigation;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors);

  const onSignInPressed = (data) => {
    console.log(JSON.stringify(data));

    props.changeUser(true);
    NavigateMe.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    NavigateMe.navigate("ForgotPassword");
  };

  const onSignUpPressed = () => {
    NavigateMe.navigate("SignUp");
  };

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

            {/* <TitleStl style={{ color: ColorMe.TEXT_COLOR_1, marginTop: -25 }}>
              Sign In
            </TitleStl> */}
          </View>

          <View style={styles.groupImputText}>
            <InputIconComp
              name='username'
              rules={{
                required: "Username is required!",
                maxLength: {
                  value: MAXLENGTH_INPUT_USER,
                  message: "Maximum text length: " + MAXLENGTH_INPUT_USER,
                },
                minLength: {
                  value: MINLENGTH_INPUT_USER,
                  message: "Minimum text length: " + MINLENGTH_INPUT_USER,
                },
              }}
              placeholder='Username'
              iconName='user'
              control={control}
              inputColor={ColorMe.TEXT_COLOR_2}
              iconColor={ColorMe.TEXT_COLOR_1}
            />

            <InputIconComp
              name='password'
              rules={{
                required: "Password is required!",
                pattern: {
                  value: PASSWORD_REQUIREDS,
                  message: PASSWORD_REQUIREDS_MSG,
                },
              }}
              placeholder='Password'
              iconName='key'
              secureTextEntry
              control={control}
              inputColor={ColorMe.TEXT_COLOR_2}
              iconColor={ColorMe.TEXT_COLOR_1}
            />

            <ButtonComp
              caption='Sign In'
              style={{
                height: 45,
                width: "100%",
                borderRadius: 5,
                marginTop: 20,
                backgroundColor: ColorMe.BLUE_5,
                color: "white",
              }}
              type='submit'
              onPress={handleSubmit(onSignInPressed)}
            ></ButtonComp>
            <SeparatorXTxtComp color={ColorMe} txt='Or' />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: typography.fontFamily.CANTARELL,
                  color: ColorMe.TEXT_COLOR_1,
                  fontSize: typography.fontSize.H4,
                  fontWeight: typography.fontWeight.XXL,
                }}
                onPress={() => onForgotPasswordPressed()}
              >
                Forgot password?
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  fontFamily: typography.fontFamily.CANTARELL,
                  color: ColorMe.TEXT_COLOR_1,
                  fontSize: typography.fontSize.H4,
                }}
              >
                Don't have an account?
              </Text>
              <Text
                style={{
                  fontFamily: typography.fontFamily.CANTARELL,
                  color: ColorMe.TEXT_COLOR_1,
                  fontSize: typography.fontSize.H4,
                  fontWeight: typography.fontWeight.XXL,
                  marginLeft: 5,
                }}
                onPress={() => onSignUpPressed()}
              >
                Create one
              </Text>
            </View>
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
  groupImputText: {
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
  changeTheme: bindActionCreators(changeTheme, dispatch),
  changeUser: bindActionCreators(changeUser, dispatch),
});
/****** REDUX **************** */
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
