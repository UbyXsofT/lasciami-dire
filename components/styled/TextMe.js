import React from "react";
import styled from "styled-components/native";
import style from "../../style";

const StyleText = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme["PRIMARY_COLOR"]};
  font-weight: 500;
  font-family: ${style.fontFamily};
`;

const TextMe = ({ label }) => <StyleText>{label}</StyleText>;

export default TextMe;
