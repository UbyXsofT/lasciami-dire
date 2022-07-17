import style from "./style";
import styled from "styled-components/native";

// const Theme = () => {
//   const colorScheme = useColorScheme();

// const Containeri = styled.SafeAreaView`
//     background-color: ${colorScheme === "light"
//       ? style.theme.lightTheme["BACKGROUND_COLOR"]
//       : style.theme.darkTheme["BACKGROUND_COLOR"]};
//     flex: 1;
//     align-items: center;
//     justify-content: center;
//     padding: 20px;
//     padding-top: ${Constants.statusBarHeight + "px"};
//   `;
//   return <Containeri />;

// };

// export { Theme };

// const MyContainer = () => {
//   const colorScheme = useColorScheme();

//   const styleContainer = styled.SafeAreaView`
//     background-color: ${colorScheme === "light"
//       ? style.theme.lightTheme["BACKGROUND_COLOR"]
//       : style.theme.darkTheme["BACKGROUND_COLOR"]};
//     flex: 1;
//     align-items: center;
//     justify-content: center;
//     padding: 20px;
//     padding-top: ${Constants.statusBarHeight + "px"};
//   `;
//   () => {
//     return <View style={styleContainer} />;
//   };
// };

// export default MyContainer;

// const darkTheme = {
//   PRIMARY_COLOR: style.colors.gnome.light[3],
//   SECONDARY_COLOR: style.colors.gnome.blue[1],
//   BACKGROUND_COLOR: style.colors.gnome.dark[4],
//   BUTTON_COLOR: style.colors.gnome.blue[1],
// };
// const lightTheme = {
//   PRIMARY_COLOR: style.colors.gnome.light[5],
//   SECONDARY_COLOR: style.colors.gnome.blue[1],
//   BACKGROUND_COLOR: style.colors.gnome.light[2],
//   BUTTON_COLOR: style.colors.gnome.blue[4],
// };

const ThemeButton = styled.Pressable`
  padding: 10px;
  border: 1px solid ${(props) => props.theme["BUTTON_COLOR"]};
  margin-top: 20px;
`;
const ThemeButtonText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme["BUTTON_COLOR"]};
`;

export { ThemeButton, ThemeButtonText, style };
