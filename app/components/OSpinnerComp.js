import React, {Component} from "react";

import {View, StyleSheet} from "react-native";

// import { Image, Card, Text, Overlay } from "react-native-elements";

import PropTypes from "prop-types";

import {colors, typography, components} from "../theme/index";

const OSpinnerComp = (props) => {
	//console.log(props);

	const closeOverlay = () => {
		props.closeOverlay();
	};

	return (
		<Overlay
			isVisible={props.isLoading}
			onBackdropPress={() => closeOverlay()}
		>
			<View style={styles.overlayContainerStyle}>
				<Image
					source={require("../assets/image/spinner.gif")}
					style={styles.image}
					transition
				/>

				<Text style={styles.textStyle}>{props.message}</Text>
			</View>
		</Overlay>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 60,
		height: 60,
	},

	textStyle: {
		fontSize: 16,
		fontFamily: typography.fontFamily.CANTARELL,
	},

	overlayContainerStyle: {
		width: 250,
		height: 60,
		flexDirection: "row",
		alignItems: "center",
	},
});

export default OSpinnerComp;
