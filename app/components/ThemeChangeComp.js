import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
///** REDUX */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeTheme } from "../actions/themeAction";

const ThemeChangeComp = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);

  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch = async () => {
    // console.log("isEnabled", isEnabled);
    // props.navigation.toggleDrawer();
    setIsEnabled((previousState) => !previousState);
    await props.changeTheme(isEnabled);
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor='#3e3e3e'
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

//* REDUX - ///////////
const mapStateToProps = (state) => ({
  THEME: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: bindActionCreators(changeTheme, dispatch),
});
/****** REDUX **************** */

export default connect(mapStateToProps, mapDispatchToProps)(ThemeChangeComp);
