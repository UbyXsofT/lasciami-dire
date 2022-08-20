import React from "react";
import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity`
  margin: 5;
  width: ${(props) => props.btnWidth};
  height: auto;
  padding: ${(props) => props.btnPadding};
  border-radius: ${(props) => props.btnRadius};
  background-color: ${(props) => props.btnBgColor};
`;

const ButtonText = styled.Text`
  font-size: ${(props) => props.btnTextSize};
  text-align: ${(props) => props.btnTextAlign};
  color: ${(props) => props.btnTextColor};
  font-weight: ${(props) => props.btnFontWeight};
  font-family: ${(props) => props.btnFontFamily};
  letter-spacing: ${(props) => props.btnLetterSpacing};
`;

const ButtonStyled = ({
  btnTitle,
  btnBgColor,
  btnTextColor,
  btnTextSize,
  btnTextAlign,
  btnPress,
  btnPadding,
  btnWidth,
  btnRadius,
  btnFontFamily,
  btnFontWeight,
  btnLetterSpacing,
}) => (
  <ButtonContainer
    btnBgColor={btnBgColor}
    onPress={btnPress}
    btnPadding={btnPadding}
    btnWidth={btnWidth}
    btnRadius={btnRadius}
  >
    <ButtonText
      btnTextColor={btnTextColor}
      btnTextSize={btnTextSize}
      btnTextAlign={btnTextAlign}
      btnTitle={btnTitle}
      btnFontFamily={btnFontFamily}
      btnFontWeight={btnFontWeight}
      btnLetterSpacing={btnLetterSpacing}
    >
      {btnTitle}
    </ButtonText>
  </ButtonContainer>
);

export default ButtonStyled;
