///** DEFAULT */
import React, { useState } from "react";
import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import { View, ScrollView } from "react-native";
///** CUSTOM */
import {
  StatusBarComp,
  LogoImgComp,
  ThemeChangeComp,
  SeparatorComp,
} from "./app/components/index";
import { colors, typography, components } from "./app/theme/index";
///** CUSTOM */
import {
  BoxStl,
  TitleStl,
  ContainerStl,
  TextStl,
} from "./app/components/styled/index";

import {
  ThemeScreen,
  HomeScreen,
  LoginScreen,
  SignUpScreen,
} from "./app/screens/index";
import StartApp from "./app/utils/StartApp";

///** REDUX */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeTheme } from "./app/actions/themeAction";

///** NAVIGATION */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const STACK = createNativeStackNavigator();
const DRAWER = createDrawerNavigator();
const TAB = createBottomTabNavigator();

const App = (props) => {
  const ColorMe = props.THEME.coloriTema;

  const NavTheme = {
    //tema del componente di navigazione
    dark: false,
    colors: {
      primary: ColorMe.TEXT_COLOR_1,
      background: ColorMe.BACK_COLOR_1,
      card: ColorMe.BACK_COLOR_1,
      text: ColorMe.TEXT_COLOR_1,
      border: ColorMe.SLATE_GRAY,
      notification: ColorMe.ERROR,
    },
  };

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
    <StartApp>
      <ThemeProvider theme={ColorMe}>
        <SignUpScreen color={ColorMe} />
        {/* <NavigationContainer theme={NavTheme}>
          <DRAWER.Navigator
            initialRouteName='SignIn'
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
            <DRAWER.Screen name='Theme Test' component={ThemeScreen} />
            <DRAWER.Screen name='Login' component={LoginScreen} />
            <DRAWER.Screen name='Home' component={HomeScreen} />
            <DRAWER.Screen name='SignIn' component={SignUpScreen} />
          </DRAWER.Navigator> */}

        {/* <STACK.Navigator
            initialRouteName='Theme'
            screenOptions={screenOptionStyle}
          >
            <STACK.Screen name='Theme' component={ThemeScreen} />
            <STACK.Screen name='Login' component={LoginScreen} />
            <STACK.Screen name='Home' component={HomeScreen} />
          </STACK.Navigator> */}

        {/* <TAB.Navigator>
            <TAB.Screen
              name='Theme'
              component={ThemeScreen}
              options={{
                headerTitle: () => <LogoImg WH={30} Radius={5} />,
                headerRight: () => <SwitchThemeComp />,
              }}
            />
            <TAB.Screen name='Login' component={LoginScreen} />
            <TAB.Screen name='Home' component={HomeScreen} />
          </TAB.Navigator> */}

        {/* <STACK.Navigator initialRouteName='Theme'>
            <STACK.Screen
              name='Theme'
              component={ThemeScreen}
              initialParams={{ Uby: "Test" }}
              options={{
                headerTitle: (props) => <LogoTitle {...props} />,
                headerRight: () => (
                  <Button
                    onPress={() => alert("This is a button!")}
                    title='Info'THEME
                    color={theme.theme.coloriTema.BACK_COLOR_1}
                    fontFamily='Cantarell'
                  />
                ),
              }}
            />
          </STACK.Navigator> */}
        {/* </NavigationContainer> */}

        <StatusBarComp
          colorTheme={props.THEME.descTema}
          backgroundColorTheme={ColorMe.BACK_COLOR_1}
        />
      </ThemeProvider>
    </StartApp>
    // </View>
  );
};
//* REDUX - //
const mapStateToProps = (state) => ({
  THEME: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: bindActionCreators(changeTheme, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
