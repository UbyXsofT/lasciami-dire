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
    props.navigation.toggleDrawer();
  };

  return (
    <>
      <CustomSwitch
        onSwitch={toggleSwitch}
        onSwitchReverse={toggleSwitch}
        buttonColor={"#CCCCCC"}
        buttonWidth={20}
        switchBorderColor={"#CCCCCC"}
        switchBorderWidth={1}
        buttonBorderColor={"#191919"}
        buttonBorderWidth={1}
        switchBackgroundColor={"black"}
        onSwitchBackgroundColor={"black"}
        switchLeftText={"☀️"}
        switchRightText={"🌙"}
        animationSpeed={5}
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
