import React, { useState } from "react";
import {
  LOGO_APP,
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
  STATUS_BAR_HEIGHT,
} from "@constants";
import { colors, typography, components } from "@theme";
import { View, Picker, Switch, Text } from "react-native";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components/native";
import { bindActionCreators } from "redux";
import { changeTheme } from "@actions/themeAction";

const ThemeScreen = (theme) => {
  console.log(theme);
  let Theme = theme.theme;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState),
      theme.changeTheme(isEnabled);
    console.log(isEnabled);
  };

  const ContainerStyle = styled(View)`
    flex-direction: column;
    background-color: ${Theme.coloriTema.DEFAULT_BACKGROUND_COLOR};
    padding-left: 20px;
    padding-right: 20px;
    font-family: ${typography.fontFamily.CANTARELL};
    justify-content: space-between;
    align-items: stretch;
    width: ${Theme.coloriTema.DEFAULT_BACKGROUND_COLOR};
    height: ${WINDOW_HEIGHT - STATUS_BAR_HEIGHT};
  `;

  const TextTitle = styled(Text)`
    background-color: ${Theme.coloriTema.DEFAULT_BACKGROUND_COLOR};
    font-family: ${typography.fontFamily.CANTARELL};
    font-weight: ${typography.fontWeight.XXL};
    font-size: ${typography.fontSize.XL};
    padding: 5px;
    color: ${Theme.coloriTema.PRIMARY_TEXT_COLOR};
    text-align: center;
  `;

  // console.log(this.theme);

  return (
    <ThemeProvider theme={theme}>
      <ContainerStyle>
        <TextTitle>THEME T1</TextTitle>

        {/* <ItemPicker
            style={{}}
            onValueChange={(value) => {
              console.log(value);
              this.theme.changeTheme(value);
            }}
          >
            <Picker.Item label='Seleziona un tema colore' value='0' />
            {Object.keys(this.theme.theme.coloriExtra).map((option, i) => (
              //create options for each color option in our theme.js file
              <Picker.Item
                key={i}
                label={option}
                value={this.theme.theme.coloriExtra[option].itemValue}
              />
            ))}
          </ItemPicker> */}

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </ContainerStyle>
    </ThemeProvider>
  );
};

//* REDUX - //
const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: bindActionCreators(changeTheme, dispatch),
});
/****** ************************ */

export default connect(mapStateToProps, mapDispatchToProps)(ThemeScreen);
