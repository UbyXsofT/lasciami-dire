import React from "react";
import { Button, Image } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeBaseTheme, changeColorTheme } from "@actions/themeAction";
import { ThemeProvider } from "styled-components";
import { STACK, LOGO_APP } from "@constants";
import { NavigationContainer } from "@react-navigation/native";
import ThemeScreen from "@organizer/theme/ThemeScreen";
import StartApp from "@components/StartApp";

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, borderRadius: 5 }}
      source={LOGO_APP}
    />
  );
}

class App extends React.Component {
  render() {
    return (
      <StartApp>
        <ThemeProvider theme={this.props.theme}>
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
                      color={this.props.theme.PRIMARY_BACKGROUND_COLOR}
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
  }
}
//* REDUX - //
const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeBaseTheme: bindActionCreators(changeBaseTheme, dispatch),
  changeColorTheme: bindActionCreators(changeColorTheme, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
