import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  //margin-vertical: 40px;
  margin-top: 40px;
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

const PressableButton = ({ onPress, bgColor, title }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export default PressableButton;