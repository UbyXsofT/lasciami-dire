import React, { useState } from "react";
import CustomSwitchComp from "./CustomSwitchComp";
///** REDUX */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeTheme } from "../../actions/themeAction";

const SwitchThemeComp = (props) => {
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = async () => {
    console.log("isEnabled", isEnabled);
    props.navigation.toggleDrawer();
    setIsEnabled((previousState) => !previousState);
    await props.changeTheme(isEnabled);
  };

  return (
    <>
      <CustomSwitchComp
        onSwitch={toggleSwitch}
        onSwitchReverse={toggleSwitch}
        buttonColor={props.THEME.coloriTema.DAFAULT}
        buttonWidth={20}
        switchBorderColor={props.THEME.coloriTema.DAFAULT}
        switchBorderWidth={1}
        buttonBorderColor={props.THEME.coloriTema.DAFAULT}
        buttonBorderWidth={1}
        switchBackgroundColor={props.THEME.coloriTema.BLACK}
        onSwitchBackgroundColor={props.THEME.coloriTema.BLACK}
        switchLeftText={"☀️"}
        switchRightText={"🌙"}
        animationSpeed={25}
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
