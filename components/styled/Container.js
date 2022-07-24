import styled from "styled-components/native";
import Constants from "expo-constants";

const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colors["BACKGROUND"]};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: ${Constants.statusBarHeight + "px"};
`;

export default Container;

// import React from "react";
// import { StyleSheet, Text, SafeAreaView } from "react-native";
// import { styled } from "styled-components/native";
// import Constants from "expo-constants";
// import useTheme from "../theme/useTheme";

// const Container = () => {
//   const theme = useTheme();
//   // const style = useThemedStyles(styles);

//   return (
//     <SafeAreaView style={theme.colors.BACKGROUND}>
//       <Text style={styles.text}>Page content</Text>
//     </SafeAreaView>
//   );
// };

// const styles = () =>
//   StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: useTheme.theme.colors.BACKGROUND,
//       alignItems: "center",
//       justifyContent: "center",
//       padding: 20,
//       paddingTop: Constants.statusBarHeight,
//     },
//   });

// export default Container;
