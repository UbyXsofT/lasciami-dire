import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

const animaColor = function (colorOne, colorDue, timingValue) {
  console.log("colorOne", colorOne);
  console.log("colorDue", colorDue);
  console.log("timingValue", timingValue);

  const progress = useDerivedValue(() => {
    // "worklet";
    return withTiming(timingValue);
  });

  let Color = "";
  const rStyle = useAnimatedStyle(() => {
    // "worklet";
    Color = interpolateColor(progress.value, [0, 1], [colorOne, colorDue]);
    console.log("Color", Color);
    return {
      Color,
    };
  });
  return rStyle;
};
export default animaColor;
