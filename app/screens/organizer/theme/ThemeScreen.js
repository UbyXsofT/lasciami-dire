import React, { useState } from "react";
import { View, Text, Picker, Switch } from "react-native";
import { lightTheme, darkTheme, colorOptions } from "@theme/index";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { bindActionCreators } from "redux";
import { changeBaseTheme, changeColorTheme } from "@actions/themeAction";

class ThemeScreen extends React.Component {
  render() {
    const ItemPicker = styled(Picker)`
      color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
      padding-top: 20;
    `;

    const Body = styled(View)`
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;
      background-color: ${(props) => props.theme.SECONDARY_BACKGROUND_COLOR};
      padding-top: 30;
      padding-bottom: 30;
      padding-left: 30;
      padding-right: 30;
    `;

    console.log(this.props);
    return (
      <ThemeProvider theme={this.props.theme}>
        <Body>
          <Text
            style={{
              color: this.props.theme.PRIMARY_TEXT_COLOR,
              backgroundColor: "red",
              fontFamily: "Cantarell",
              textAlign: "center",
            }}
          >
            THEME SCREEN - prepare test{" "}
          </Text>

          <ItemPicker
            style={{}}
            onValueChange={(itemValue, itemIndex) => {
              this.props.changeColorTheme(itemValue);
              // this.props.changeColorTheme("red");
              console.log("itemValue", itemValue);
              console.log("itemIndex", itemIndex);
            }}
          >
            <Picker.Item label='Seleziona un tema colore' value='0' />
            {Object.keys(colorOptions).map((option, i) => (
              //create options for each color option in our theme.js file
              <Picker.Item
                key={i}
                label={option}
                value={colorOptions[option]}
              />
            ))}
          </ItemPicker>

          {/* <Text>Switch Theme</Text>
          <Switch onValueChange={this.props.changeBaseTheme("darkTheme")} /> */}
        </Body>
      </ThemeProvider>
    );
  }
}
//* REDUX - //---------------------------------------
const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeBaseTheme: bindActionCreators(changeBaseTheme, dispatch),
  changeColorTheme: bindActionCreators(changeColorTheme, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeScreen);
