import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import {
  TitleStl,
  ContainerStl,
  TextStl,
} from "../../../../components/styled/index";
import {
  ButtonComp,
  SeparatorXTxtComp,
  InputIconComp,
  AvatarComp,
  ModalComp,
} from "../../../../components/index";
import {
  LOGO_APP,
  PASSWORD_REQUIREDS,
  PASSWORD_REQUIREDS_MSG,
  MAXLENGTH_INPUT_USER,
  MINLENGTH_INPUT_USER,
  AVATAR_STUDENTS,
  AVATAR_PARENTS,
  AVATAR_TEACHERS,
} from "../../../../constants";
import { typography } from "../../../../theme/index";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

const SignUpScreen = (props) => {
  console.log("SignUpScreen", props);

  const ColorMe = props.THEME.coloriTema;
  const NavigateMe = props.navigation;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors);

  const onGroupPressed = (props) => {
    //NavigateMe.navigate("SignUp");
    console.log("onGroupPressed", props.target.textContent);
  };

  const onSignInPressed = () => {
    console.log("onSignInPressed");
    NavigateMe.navigate("SignIn");
  };

  return (
    <ScrollView style={{ backgroundColor: ColorMe.BACK_COLOR_1 }}>
      <ContainerStl>
        <View style={[styles.container]}>
          <View style={styles.wrapHeader}>
            <Image
              source={LOGO_APP}
              resizeMode='contain'
              style={styles.imageLogo}
            ></Image>

            <TextStl
              style={{
                color: ColorMe.TEXT_COLOR_1,
                marginTop: -25,
                fontSize: typography.fontSize.H3,
              }}
            >
              Please select your access type:
            </TextStl>
          </View>

          <View style={styles.groupAvatars}>
            <AvatarComp
              source={AVATAR_STUDENTS}
              onPress={onGroupPressed}
              caption={"Students"}
              textColor={ColorMe.TEXT_COLOR_1}
              contBackColor={ColorMe.BLUE_1}
              contWidth='100%'
              contFlexDirection='row'
              contBorderRadius={5}
              styleImg={{
                backgroundColor: ColorMe.BACK_COLOR_1,
                width: 100,
                height: 100,
                borderRadius: 100,
                borderWidth: 4,
                borderColor: ColorMe.TEXT_COLOR_1,
                backgroundColor: ColorMe.BLUE_1,
                marginRight: 20,
              }}
            />
            <AvatarComp
              source={AVATAR_PARENTS}
              onPress={onGroupPressed}
              caption={"Parents"}
              textColor={ColorMe.TEXT_COLOR_1}
              contBackColor={ColorMe.YELLOW_1}
              contWidth='100%'
              contFlexDirection='row'
              contBorderRadius={5}
              styleImg={{
                backgroundColor: ColorMe.BACK_COLOR_1,
                width: 100,
                height: 100,
                borderRadius: 100,
                borderWidth: 4,
                borderColor: ColorMe.TEXT_COLOR_1,
                backgroundColor: ColorMe.YELLOW_1,
                marginRight: 20,
              }}
            />
            <AvatarComp
              source={AVATAR_TEACHERS}
              onPress={onGroupPressed}
              caption={"Teachers"}
              textColor={ColorMe.TEXT_COLOR_1}
              contBackColor={ColorMe.GREEN_1}
              contWidth='100%'
              contFlexDirection='row'
              contBorderRadius={5}
              styleImg={{
                backgroundColor: ColorMe.BACK_COLOR_1,
                width: 100,
                height: 100,
                borderRadius: 100,
                borderWidth: 4,
                borderColor: ColorMe.TEXT_COLOR_1,
                backgroundColor: ColorMe.GREEN_1,
                marginRight: 20,
              }}
            />
          </View>

          <SeparatorXTxtComp color={ColorMe} txt='Or' />
          <ButtonComp
            caption='Sign In'
            style={{
              height: 45,
              width: "100%",
              borderRadius: 5,
              marginTop: 20,
              backgroundColor: ColorMe.DARK_1,
              color: "white",
            }}
            onPress={onSignInPressed}
          ></ButtonComp>
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
  imageLogo: {
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
  groupAvatars: {
    marginTop: 0,
    width: "100%",
    padding: 10,
  },
});

//* REDUX - *****************//
const mapStateToProps = (state) => ({
  THEME: state.themeReducer.theme,
  USER: state.userReducer.user,
});
/****** REDUX **************** */
export default connect(mapStateToProps)(SignUpScreen);
