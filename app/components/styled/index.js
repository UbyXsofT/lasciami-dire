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

import {colors, typography as typographys, components} from "../../theme/index";

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
  ${layout}
  ${flexbox}
  ${border}
  ${background}
  ${color}
  ${display}
  ${borders}
  ${position}
  ${shadow}
  ${colorStyle}
`;

TitleStl.defaultProps = {
	p: 2,
	fontSize: typographys.fontSize.H1,
	fontWeight: typographys.fontWeight.XXXL,
	color: "white",
	textAlignVertical: "center",
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
	p: 20,
	alignItems: "center",
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	justifyContent: "space-evenly",
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
	textAlignVertical: "center",
	textAlign: "left",
	fontFamily: typographys.fontFamily.CANTARELL,
};
