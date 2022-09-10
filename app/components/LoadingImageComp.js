import React, { useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Image from "react-native-image-progress";
import { ProgressPie } from "react-native-progress/Pie";

const LoadingImageComp = (props) => {
  console.log("LoadingImageComp", props);
  return (
    <Image
      source={props.source}
      imageStyle={props.style}
      indicator={ProgressPie}
      indicatorProps={{
        size: props.style.width,
        borderWidth: 0,
        color: "rgba(150, 150, 150, 1)",
        unfilledColor: "rgba(200, 200, 200, 0.2)",
      }}
      // style={props.style}
    />
  );
};

export default LoadingImageComp;
