///** DEFAULT */
import React, {useState, useEffect} from "react";
import styled, {ThemeProvider} from "styled-components/native";
import {ScrollView} from "react-native";
import * as Clipboard from "expo-clipboard";
import Ionicons from "@expo/vector-icons/Ionicons";
///** REANIMATED */
import Animated, {LightSpeedInLeft, LightSpeedOutRight, Layout} from "react-native-reanimated";

///** REDUX */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {RDX_InfoTheme} from "../../store/actions/themeAction";

///** CUSTOM */
import {BoxStl, TitleStl, ContainerStl, TextStl} from "../../components/styled/index";
import {
	StatusBarComp,
	LogoImg,
	SwitchThemeComp,
	ModalComp,
	BoxItemColorComp,
	BoxItemTypographyComp,
	// OSpinnerComp,
} from "../../components/index";
import {colors, typography, components} from "../../theme/index";

const ThemeScreen = (props) => {
	console.log("props", props);
	const [isLoading, setIsLoading] = useState(false);
	const closeOverlay = () => setIsLoading(false);
	const [memRootTypo, setMemRootTypo] = useState(false);

	useEffect(() => {
		setIsLoading(true);
	}, []);

	const renderItem = (item, props) => {
		return item.Case === "COLOR" ? (
			<BoxItemColorComp
				key={item.nameColor + item.deskColorRgb}
				nameColor={item.nameColor}
				deskColorRgb={item.deskColorRgb}
				props={props}
			/>
		) : (
			<BoxItemTypographyComp
				key={item.rootTypo + item.nameTypo + item.deskTypo}
				rootTypo={item.rootTypo}
				nameTypo={item.nameTypo}
				deskTypo={item.deskTypo}
				props={props}
			/>
		);
	};

	return (
		<ScrollView>
			<ThemeProvider theme={props.THEME}>
				<ContainerStl Key='ContainerStl_Theme'>
					{/* <OSpinnerComp
            isLoading={isLoading}
            closeOverlay={() => closeOverlay()}
            message='Please wait ...'
          /> */}

					{/* <Animated.View
            entering={LightSpeedInLeft}
            exiting={LightSpeedOutRight}
            layout={Layout.damping}
          > */}
					<TitleStl style={{color: props.THEME.colorsTheme.TEXT_COLOR_1}}>Theme Screen</TitleStl>

					<TextStl
						style={{
							color: props.THEME.colorsTheme.TEXT_COLOR_1,
							fontSize: typography.fontSize.H3,
							textAlign: "left",
						}}
					>
						COLOR PALETTE:
					</TextStl>
					<ContainerStl
						Key='colorsContainer1'
						style={{
							alignItems: "center",
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							justifyContent: "space-evenly",
							alignSelf: "flex-start",
						}}
					>
						{Object.entries(props.THEME.colorsTheme).map((colorMe, index) => {
							return renderItem({
								"Case": "COLOR",
								"nameColor": colorMe[0],
								"deskColorRgb": colorMe[1],
							});
						})}
					</ContainerStl>
					{/** TYPOGRAPHY */}
					<TextStl
						style={{
							color: props.THEME.colorsTheme.TEXT_COLOR_1,
							fontSize: typography.fontSize.H3,
							textAlign: "left",
						}}
					>
						TYPOGRAPHY:
					</TextStl>

					<BoxStl
						Key='typographyContainer1'
						style={{
							backgroundColor: props.THEME.colorsTheme.BACK_COLOR_1,
							width: "auto",
							height: "auto",
							marginBottom: 50,
						}}
					>
						{Object.entries(typography).map((val, index) => {
							return Object.entries(val[1]).map((val2, index2) => {
								return renderItem({
									"Case": "TYPOGRAPHY",
									"rootTypo": val[0],
									"nameTypo": val2[0],
									"deskTypo": val2[1],
								});
							});
						})}
					</BoxStl>

					{/* </Animated.View> */}
				</ContainerStl>
			</ThemeProvider>
		</ScrollView>
	);
};

//* REDUX - ///////////
const mapStateToProps = (state) => ({
	THEME: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
	RDX_InfoTheme: bindActionCreators(RDX_InfoTheme, dispatch),
});
/****** REDUX **************** */

export default connect(mapStateToProps, mapDispatchToProps)(ThemeScreen);
