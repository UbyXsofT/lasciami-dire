import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TextInput, Button, Pressable, Animated} from "react-native";
import {typography} from "../theme/index";
import {PHONE_MASK, DATE_MASK, PROVIDERS_ICONS, PLATFORM_OS} from "../constants";
import {Controller} from "react-hook-form";
import {MaskedTextInput} from "react-native-mask-text";
import InputMask from "react-input-mask";

const InputIconComp = ({
	control,
	name,
	rules = {},
	iconName,
	iconProvider,
	placeholder,
	secureTextEntry,
	iconColor,
	inputColor,
	inputBorderColor,
	maskType,
	maskChar,
	alwaysShowMask,
	permanents,
	backgroundColor,
}) => {
	const [useThisMask, setUseThisMask] = useState();
	const [valueMaskInput, setValueMaskInput] = useState("");
	const handleInput = ({target: {value}}) => {
		setValueMaskInput(value);
		console.log("value", value);
	};
	function ProviderIcon(props) {
		console.log("providerIcon", props);
		// Correct! JSX type can be a capitalized variable.
		const SpecificProviderIcon = PROVIDERS_ICONS[props.type.iconProvider];
		return (
			<SpecificProviderIcon
				name={props.name}
				style={props.style}
			/>
		);
	}

	useEffect(() => {
		maskType === PHONE_MASK ? setUseThisMask(PHONE_MASK) : "";
		maskType === DATE_MASK ? setUseThisMask(DATE_MASK) : "";
		//console.log("useThisMask", useThisMask);
	}, []);

	const onPressable = (name, error) => {
		if (name === "password" && error !== undefined) {
			setTimeout(() => setShowPanel(true), 200);
		} else {
			setTimeout(() => setShowPanel(false), 200);
		}
	};

	const [obyPsw, setObyPsw] = React.useState();

	const handleChange = (txtPsw) => {
		console.log("@@@@@ ---> txtPsw: ", txtPsw);
		setObyPsw(txtPsw);
	};

	// React.useEffect(() => {
	// 	console.log("@@@@@ ---> txtPsw: ", txtPsw);
	// 	//console.log("@@@@@ ---> props: ", props);
	// 	//console.log("@@@@@ ---> error: ", error);
	// 	// if (name === "password" && error !== undefined) {
	// 	// 	setTimeout(() => setShowPanel(true), 200);
	// 	// } else {
	// 	// 	setTimeout(() => setShowPanel(false), 200);
	// 	// }
	// }, [txtPsw]);

	const [errLowerCase, setErrLowerCase] = React.useState(true);
	const [errCapital, setErrCapital] = React.useState(true);
	const [errNumber, setErrNumber] = React.useState(true);
	const [errLength, setErrLength] = React.useState(true);
	const [errSpecial, setErrSpecial] = React.useState(true);

	const onChangeTxtPass = (value) => {
		if (name === "password") {
			console.log("value: ", value);
			const lengthRegex = new RegExp(/(?=^.{6,20}$)/g);
			const lowerCaseRegex = new RegExp(/(?=.*[a-z])/g);
			const upperCaseRegex = new RegExp(/(?=.*[A-Z])/g);
			const numberRegex = new RegExp(/(?=.*[0-9])/g);
			const specialRegex = new RegExp(/(?=.*[^A-Za-z0-9])/g);

			lowerCaseRegex.test(value) ? setErrLowerCase(false) : setErrLowerCase(true);
			console.log("@@@@ -- errLowerCase: ", errLowerCase);

			lengthRegex.test(value) ? setErrLength(false) : setErrLength(true);
			console.log("@@@@ -- errLength: ", errLength);

			upperCaseRegex.test(value) ? setErrCapital(false) : setErrCapital(true);
			console.log("@@@@ -- errCapital: ", errCapital);

			numberRegex.test(value) ? setErrNumber(false) : setErrNumber(true);
			console.log("@@@@ -- errNumber: ", errNumber);

			specialRegex.test(value) ? setErrSpecial(false) : setErrSpecial(true);
			console.log("@@@@ -- errSpecial: ", errSpecial);

			// (?=.*[^A-Za-z0-9])- Un carattere non alfanumerico.
		}
	};

	const [showPanel, setShowPanel] = React.useState(false);
	const scaleValue = React.useRef(new Animated.Value(0)).current;
	React.useEffect(() => {
		togglePanel();
	}, [showPanel]);

	const togglePanel = () => {
		if (showPanel) {
			setShowPanel(true);
			Animated.spring(scaleValue, {
				toValue: 200,
				duration: 300,
				useNativeDriver: true,
			}).start();
		} else {
			setTimeout(() => setShowPanel(false), 200);
			Animated.spring(scaleValue, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}).start();
		}
	};

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
				<>
					<View
						style={{
							backgroundColor: backgroundColor,
							borderWidth: 0.2,

							borderRadius: 5,
							// borderBottomWidth: maskType === null || undefined ? 1 : 0,
							marginBottom: 0,
							borderColor: error ? "red" : inputBorderColor,
							height: 30,
							padding: 3,
							paddingRight: 10,
							width: "100%",
						}}
					>
						<View style={{flexDirection: "row"}}>
							<ProviderIcon
								type={{iconProvider}}
								name={iconName}
								style={[
									styles.elevatedElement,
									{
										fontFamily: typography.fontFamily.CANTARELL,
										fontSize: 20,
										paddingLeft: 8,
										marginTop: 2,
										color: iconColor,
									},
								]}
							/>

							{/* {console.log(`${name} : ${maskType}`)} */}
							{[false, null, undefined].includes(maskType) ? (
								<Pressable
									style={styles.input}
									onPress={() => onPressable(name, error)}
								>
									<TextInput
										value={value || ""}
										//onChangeText={handleChange(value, name, error)}
										onChange={onChange}
										onChangeText={(newTxt) => {
											name === "password"
												? onChangeTxtPass(newTxt)
												: console.log("non controllo una password");
										}}
										onBlur={onPressable(name, error)}
										placeholder={placeholder}
										secureTextEntry={secureTextEntry || null}
										placeholderTextColor={inputBorderColor}
										maxLength={60}
										style={[
											{
												color: inputColor,
												backgroundColor: {backgroundColor},
												outlineStyle: "none",
											},
										]}
									/>
								</Pressable>
							) : PLATFORM_OS === "web" ? (
								<InputMask
									mask={useThisMask} //'999 999 9999'
									alwaysShowMask={alwaysShowMask}
									value={valueMaskInput}
									maskchar={maskChar}
									formatchars={{
										"9": "[0-9]",
										"a": "[A-Za-z]",
										"*": "[A-Za-z0-9]",
									}}
									permanents={permanents}
									// permanents is an array of indexes of the non-editable characters in the mask
									onChange={(event) => {
										console.log("nativeEvent", event.nativeEvent.data);
										value = valueMaskInput;
										onChange(event);
										handleInput(event);
									}}
									onBlur={onBlur}
									placeholder={placeholder}
									style={{
										color: inputColor,
										backgroundColor: "#00000000",
										border: "none",
										fontSize: 14,
										paddingBottom: 0,
										marginLeft: -30,
										paddingLeft: 40,
										marginRight: -15,
										height: 25,
										flex: 1,
										outlineStyle: "none",
									}}
								/>
							) : (
								<MaskedTextInput
									mask={useThisMask} //'999 999 9999'
									//value={valueMaskInput}
									onChangeText={(text, rawText) => {
										console.log(text);
										console.log(rawText);
										//value = valueMaskInput;
										onChange(text);
									}}
									placeholder={placeholder}
									keyboardType={
										useThisMask === PHONE_MASK || useThisMask === DATE_MASK ? "numeric" : "default"
									}
									onBlur={onBlur}
									style={{
										color: inputColor,
										backgroundColor: {backgroundColor},
										border: "none",
										fontSize: 14,
										paddingBottom: 0,
										// marginLeft: -30,
										paddingLeft: 10,
										// marginRight: 80,
										height: 25,
										flex: 1,
										outlineStyle: "none",
									}}
								/>
							)}

							{rules.required ? (
								<ProviderIcon
									type={{iconProvider: "fontisto"}}
									name={"asterisk"}
									style={{
										fontFamily: typography.fontFamily.CANTARELL,
										fontSize: 10,
										paddingLeft: 8,
										paddingTop: 9,
										fontWeight: "normal",
										fontStyle: "normal",
										color: "red",
									}}
								/>
							) : (
								<></>
							)}
						</View>
					</View>
					{/* {console.log(rules)} */}

					{name === "password" ? (
						<Animated.View
							style={{
								height: scaleValue,
								width: "100%",
								padding: 10,
								borderRadius: 5,
								marginTop: -25,
								marginBottom: 10,
								backgroundColor: "#f9f3f3",
								borderWidth: 0.2,
								borderRadius: 5,
								borderColor: error ? "red" : inputBorderColor,
								opacity: 1,
								zIndex: -1,
							}}
						>
							<View
								id='message'
								style={{marginTop: 16, display: error ? "flex" : "none"}}
							>
								<Text
									style={{
										fontFamily: typography.fontFamily.CANTARELL,
										color: inputColor,
										fontSize: typography.fontSize.H3,
										marginTop: 10,
									}}
								>
									Password must contain the following:
								</Text>
								<Text
									style={{
										fontFamily: typography.fontFamily.CANTARELL,
										color: errLowerCase ? "red" : "green",
										fontSize: typography.fontSize.H6,
										marginTop: 10,
									}}
									id='letter'
									className='invalid'
								>
									{errLowerCase ? <b>✖</b> : <b>✔</b>} A <b>lowercase</b> letter
								</Text>

								<Text
									style={{
										fontFamily: typography.fontFamily.CANTARELL,
										color: errCapital ? "red" : "green",
										fontSize: typography.fontSize.H6,
										marginTop: 10,
									}}
									id='capital'
									className='invalid'
								>
									{errCapital ? <b>✖</b> : <b>✔</b>} A <b>capital (uppercase)</b> letter
								</Text>
								<Text
									style={{
										fontFamily: typography.fontFamily.CANTARELL,
										color: errNumber ? "red" : "green",
										fontSize: typography.fontSize.H6,
										marginTop: 10,
									}}
									id='number'
									className='invalid'
								>
									{errNumber ? <b>✖</b> : <b>✔</b>} A <b>number</b>
								</Text>
								<Text
									style={{
										fontFamily: typography.fontFamily.CANTARELL,
										color: errSpecial ? "red" : "green",
										fontSize: typography.fontSize.H6,
										marginTop: 10,
									}}
									id='special'
									className='invalid'
								>
									{errSpecial ? <b>✖</b> : <b>✔</b>} A <b>special character</b>
								</Text>
								<Text
									style={{
										fontFamily: typography.fontFamily.CANTARELL,
										color: errLength ? "red" : "green",
										fontSize: typography.fontSize.H6,
										marginTop: 10,
									}}
									id='length'
									className='invalid'
								>
									{errLength ? <b>✖</b> : <b>✔</b>} A minimum: <b>6</b> and max:{" "}
									<b>20 characters</b>
								</Text>
							</View>
						</Animated.View>
					) : (
						<Text
							style={{
								color: "red",
								alignSelf: "stretch",
								height: "auto",
								opacity: error ? 1 : 0,
								marginBottom: error ? 10 : 0,
							}}
						>
							{error ? error.message : "Error"}
						</Text>
					)}
				</>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		marginLeft: -30,
		paddingLeft: 40,
		fontSize: 16,
		flex: 1,
		paddingTop: 5,
		paddingBottom: 0,
		marginRight: -30,
		height: 25,
	},
	elevatedElement: {
		zIndex: 3, // works on ios
		elevation: 3, // works on android
	},
});

export default InputIconComp;
