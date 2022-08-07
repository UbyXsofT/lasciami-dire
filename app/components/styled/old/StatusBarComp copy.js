import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";

const StatusBarComp = ({ backgroundColor, ...props }) => {
  return (
    <View style={[styles.statusBar, backgroundColor.backgroundColor]}>
      <StatusBar backgroundColor={backgroundColor.backgroundColor} {...props} />
    </View>
  );
};

const BAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: BAR_HEIGHT,
  },
});

export default StatusBarComp;
