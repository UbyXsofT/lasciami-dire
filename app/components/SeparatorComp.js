import React from "react";
import { StyleSheet, View } from "react-native";

///** REDUX */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeTheme } from "../actions/themeAction";

const SeparatorComp = (props) => {
  return (
    <View
      style={{
        borderBottomColor: props.THEME.coloriTema.TEXT_COLOR_1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginLeft: 5,
        marginRight: 5,
      }}
    />
  );
};

//* REDUX - ///////////
const mapStateToProps = (state) => ({
  THEME: state.themeReducer.theme,
});
const mapDispatchToProps = (dispatch) => ({
  changeTheme: bindActionCreators(changeTheme, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(SeparatorComp);
