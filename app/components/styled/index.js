import React from "react";
import styled from "styled-components/native";

import {
  compose,
  system,
  get,
  background,
  BackgroundProps,
  border,
  BorderProps,
  borders,
  BordersProps,
  buttonStyle,
  ButtonStyleProps,
  color,
  ColorProps,
  colorStyle,
  ColorStyleProps,
  display,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  style,
  variant,
  styles,
  Theme,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  shadow,
  ShadowProps,
} from "styled-system";

import {
  colors,
  typography as typographys,
  components,
} from "../../theme/index";

///******** BOX *********** */
export const BoxStl = styled.View`
  ${color}
  ${space}
  ${typography}
  ${layout}
  ${flexbox}
  ${border}
  ${background}
  ${color}
  ${display}
  ${background}
  ${borders}
  ${position}
  ${shadow}
  ${colorStyle}
`;

BoxStl.defaultProps = {
  boxSizing: "border-box",
  minWidth: 0,
  fontFamily: typographys.fontFamily.CANTARELL,
  backgroundColor: "white",
  width: 100,
  height: "auto",
};

///******** TITLE *********** */
export const TitleStl = styled.Text`
  ${color}
  ${space}
  ${typography}
`;

TitleStl.defaultProps = {
  p: 2,
  fontSize: typographys.fontSize.H1,
  fontWeight: typographys.fontWeight.XL,
  color: "white",
  verticalAlign: "center",
  textAlign: "center",
  fontFamily: typographys.fontFamily.CANTARELL,
};

///----------  CONTAINER --------------------------
export const ContainerStl = styled.View`
  ${color}
  ${space}
  ${typography}
`;

ContainerStl.defaultProps = {
  flexDirection: "row",
  pl: 20,
  pr: 20,
  justifyContent: "space-evenly",
  alignItems: "center",
};

///******** TextStl *********** */
export const TextStl = styled.Text`
  ${color}
  ${space}
  ${typography}
`;

TextStl.defaultProps = {
  p: 2,
  fontSize: typographys.fontSize.H6,
  fontWeight: typographys.fontWeight.XXXS,
  lineHeight: typographys.lineHeight.S,
  color: "white",
  verticalAlign: "center",
  textAlign: "left",
  fontFamily: typographys.fontFamily.CANTARELL,
};
