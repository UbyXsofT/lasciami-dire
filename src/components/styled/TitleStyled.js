import styled from "styled-components/native";
import { color, space, typography } from "styled-system";
//import useTheme from "../oldtheme/useTheme";

const Title = styled.Text`
  ${color}
  ${space}
  ${typography}
`;

Title.defaultProps = {
  p: 2,
  fontSize: 4,
  fontWeight: "bold",
  color: "red",
  verticalAlign: "center",
};

export default Title;
