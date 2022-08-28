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

///** NAVIGATION */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const STACK = createNativeStackNavigator();
const DRAWER = createDrawerNavigator();
const TAB = createBottomTabNavigator();

const HomeScreen = (props) => {
  console.log("HomeScreen", props);
  const ColorMe = props.THEME.coloriTema;

  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: ColorMe.BACK_COLOR_1,
    },
    headerTintColor: ColorMe.TEXT_COLOR_2,
    // headerBackTitle: ColorMe.BACK_COLOR_1,
  };

  const colorTxtSwitch = {
    color: ColorMe.TEXT_COLOR_2,
    fontSize: typography.fontSize.H2,
  };

  const ViewStyle = {
    alignItems: "center",
    placeContent: "center",
    display: "flex",
    flexDirection: "row",
    padding: 10,
  };

  return (
    <>
      {/* <DRAWER.Navigator
        drawerContent={(props) => {
          return (
            <DrawerContentScrollView {...props}>
              <View style={ViewStyle}>
                <LogoImgComp W={40} H={40} Radius={5} />
                <TextStl style={colorTxtSwitch}>Lasciami Dire</TextStl>
                <ThemeChangeComp {...props} />
              </View>
              <SeparatorComp />
              <DrawerItemList {...props} />
              <DrawerItem
                label='Setting'
                onPress={() => props.navigation.navigate("Setting")}
              />
              <DrawerItem
                label='LogOut'
                onPress={() => props.navigation.navigate("LogOut")}
              />
            </DrawerContentScrollView>
          );
        }}
        screenOptions={screenOptionStyle}
      >
        <DRAWER.Screen name='HomeScreen' component={HomeScreen} />
        <DRAWER.Screen name='Theme Test' component={ThemeScreen} />
        <DRAWER.Screen name='TestScreen' component={TestScreen} />
        <DRAWER.Screen name='SignIn' component={SignInScreen} />
      </DRAWER.Navigator> */}

      <TextStl style={colorTxtSwitch}>BOOOM HOME</TextStl>

      <StatusBarComp
        colorTheme={props.THEME.descTema}
        backgroundColorTheme={ColorMe.BACK_COLOR_1}
      />
    </>
  );
};

//* REDUX - *****************//
const mapStateToProps = (state) => ({
  THEME: state.themeReducer.theme,
  USER: state.userReducer.user,
});
/****** REDUX **************** */

export default connect(mapStateToProps)(HomeScreen);
