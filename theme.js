import style from "./style";
import styled from "styled-components/native";

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
`;
const ThemeButtonText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme["BUTTON_COLOR"]};
`;

export { ThemeButton, ThemeButtonText, style };
