import React, { useState } from "react";
import CustomSwitch from "react-native-custom-switch";
///** REDUX */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeTheme } from "../actions/themeAction";

const SwitchThemeComp = (props) => {
  //console.log(props);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    console.log("isEnabled", isEnabled);
    setIsEnabled((previousState) => !previousState),
      props.changeTheme(isEnabled);
  };

  return (
    <>
      <CustomSwitch
        onSwitch={toggleSwitch}
        onSwitchReverse={toggleSwitch}
        buttonColor={"transparent"}
        buttonWidth={0}
        switchBorderColor={"#CCCCCC"}
        switchBorderWidth={2}
        buttonBorderColor={"#191919"}
        switchBackgroundColor={"black"}
        onSwitchBackgroundColor={"black"}
        switchLeftText={"☀️"}
        switchRightText={"🌙"}
        animationSpeed={1000}
        switchWidth={50}
        value={isEnabled}
        style={{ cursor: "pointer" }}
      />
    </>
  );
};

//* REDUX - ///////////
const mapStateToProps = (state) => ({
  THEME: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: bindActionCreators(changeTheme, dispatch),
});
/****** REDUX **************** */

export default connect(mapStateToProps, mapDispatchToProps)(SwitchThemeComp);
