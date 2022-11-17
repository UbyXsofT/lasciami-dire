///** DEFAULT */
import React from "react";
import "react-native-gesture-handler";
import {ThemeProvider} from "styled-components/native";
import {View, ScrollView, SafeAreaView} from "react-native";
///** CUSTOM */
import {
	StatusBarComp,
	LogoImgComp,
	ThemeChangeComp,
	SeparatorComp,
	ModalComp,
} from "../../components/index";
import {colors, typography, components} from "../../theme/index";
///** CUSTOM */
import {BoxStl, TitleStl, ContainerStl, TextStl} from "../../components/styled/index";
import {PROVIDERS_ICONS} from "../../constants";
///** REDUX */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {RDX_InfoTheme} from "../../store/actions/themeAction";
import {RDX_InfoUser} from "../../store/actions/userAction";
import {RDX_InfoModal} from "../../store/actions/modalAction";

const HomeScreen = (props) => {
	console.log("HomeScreen", props);
	const ColorMe = props.THEME.colorsTheme;
	const SpecificProviderIcon = PROVIDERS_ICONS["antDesign"];
	return (
		<ScrollView style={{backgroundColor: ColorMe.BACK_COLOR_1}}>
			<ContainerStl>
				<TextStl style={{color: ColorMe.TEXT_COLOR_1, marginTop: -25, fontSize: 24}}>
					{`Hi ${props.USER.userName}`}
				</TextStl>

				<StatusBarComp
					colorTheme={props.THEME.descTheme}
					backgroundColorTheme={ColorMe.BACK_COLOR_1}
				/>
			</ContainerStl>
		</ScrollView>
	);
};

//* REDUX - //
const mapStateToProps = (state) => ({
	THEME: state.themeReducer.theme,
	USER: state.userReducer.user,
	MODAL: state.modalReducer.modalMe,
});

const mapDispatchToProps = (dispatch) => ({
	RDX_InfoTheme: bindActionCreators(RDX_InfoTheme, dispatch),
	RDX_InfoUser: bindActionCreators(RDX_InfoUser, dispatch),
	RDX_InfoModal: bindActionCreators(RDX_InfoModal, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
