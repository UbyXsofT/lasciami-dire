import React, { Children } from "react";
import styled from "styled-components/native";

const StyleText = styled.Text`
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.fontTextAlign};
  color: ${(props) => props.fontColor};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontFamily};
  letter-spacing: ${(props) => props.fontLetterSpacing};
`;

const TextStyled = ({
  children,
  fontSize,
  fontTextAlign,
  fontColor,
  fontWeight,
  fontFamily,
  fontLetterSpacing,
}) => (
  <StyleText
    fontSize={fontSize}
    fontTextAlign={fontTextAlign}
    fontColor={fontColor}
    fontWeight={fontWeight}
    fontFamily={fontFamily}
    fontLetterSpacing={fontLetterSpacing}
  >
    {children}
  </StyleText>
);

export default TextStyled;
