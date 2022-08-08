import React from "react";
import { Button, Image, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeTheme } from "@actions/themeAction";
import { ThemeProvider } from "styled-components";
import {
  LOGO_APP,
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
  STATUS_BAR_HEIGHT,
} from "@constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ThemeScreen from "@organizer/theme/ThemeScreen";
import StartApp from "@utils/StartApp";

const STACK = createNativeStackNavigator();

const App = (theme) => {
  function LogoTitle() {
    return (
      <>
        <Image
          style={{ width: 50, height: 50, borderRadius: 5 }}
          source={LOGO_APP}
        />
      </>
    );
  }
  console.log(theme.theme);
  return (
    <StartApp>
      <ThemeProvider theme={theme.theme}>
        <NavigationContainer>
          <STACK.Navigator initialRouteName='Theme'>
            <STACK.Screen
              name='Theme'
              component={ThemeScreen}
              initialParams={{ Uby: "Test" }}
              options={{
                headerTitle: (props) => <LogoTitle {...props} />,
                headerRight: () => (
                  <Button
                    onPress={() => alert("This is a button!")}
                    title='Info'
                    color={theme.theme.coloriTema.DEFAULT_BACKGROUND_COLOR}
                    fontFamily='Cantarell'
                  />
                ),
              }}
            />
          </STACK.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </StartApp>
  );
};
//* REDUX - //
const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: bindActionCreators(changeTheme, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
