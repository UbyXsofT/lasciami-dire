import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
} from "react-native";
///** REDUX */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeTheme } from "../actions/themeAction";

const ModalComp = (props) => {
  //console.log("ModalComp-props", props);

  return (
    <View style={styles(props).centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={props.isVisible}
        onRequestClose={() => {
          props.changeStateModal(!props.isVisible);
        }}
      >
        <View style={styles(props).centeredView}>
          <View style={styles(props).modalView}>
            <Text style={styles(props).modalText}>{props.txt1}</Text>
            <Pressable
              style={[styles(props).button, styles(props).buttonClose]}
              onPress={() => props.changeStateModal(!props.isVisible)}
            >
              <Text style={styles(props).textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = (props) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: props.THEME.coloriTema.WHITE,
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: props.THEME.coloriTema.INFO,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalComp);
