import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";
import {typography} from "../theme/index";
import {PHONE_MASK, DATE_MASK, PROVIDERS_ICONS} from "../constants";
import {Controller} from "react-hook-form";
import InputMask from "react-input-mask";

const InputIconComp = ({control, name, rules = {}, iconName, iconProvider, placeholder, secureTextEntry, iconColor, inputColor, inputBorderColor, maskType, maskChar, alwaysShowMask, permanents}) => {
	const [useThisMask, setUseThisMask] = useState();
	const [valueMaskInput, setValueMaskInput] = useState("");
	const handleInput = ({target: {value}}) => {
		setValueMaskInput(value);
		//console.log("value", value);
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
		console.log("useThisMask", useThisMask);
	}, []);

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
				<>
					<View
						style={{
							backgroundColor: "#00000000",
							borderBottomWidth: StyleSheet.hairlineWidth,

							// borderBottomWidth: maskType === null || undefined ? 1 : 0,
							marginBottom: 0,
							borderColor: error ? "red" : inputBorderColor,
							height: 30,
							padding: 3,
						}}
					>
						<View style={{flexDirection: "row"}}>
							<ProviderIcon
								type={{iconProvider}}
								name={iconName}
								style={{fontFamily: typography.fontFamily.CANTARELL, fontSize: 20, paddingLeft: 8, marginTop: 2, color: iconColor}}
							/>

							{/* {console.log(`${name} : ${maskType}`)} */}
							{[false, null, undefined].includes(maskType) ? (
								<TextInput
									value={value || ""}
									onChangeText={onChange}
									onBlur={onBlur}
									placeholder={placeholder}
									secureTextEntry={secureTextEntry || null}
									placeholderTextColor={inputBorderColor}
									style={[
										styles.input,
										{
											color: inputColor,
											backgroundColor: "#00000000",
										},
									]}
								/>
							) : (
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
										// paddingTop: 14,
										paddingBottom: 0,
										marginLeft: -30,
										paddingLeft: 40,
										marginRight: -15,
										height: 25,
										flex: 1,
									}}
								/>
							)}

							{rules.required ? (
								<ProviderIcon
									type={{iconProvider: "fontisto"}}
									name={"asterisk"}
									style={{fontFamily: typography.fontFamily.CANTARELL, fontSize: 10, paddingLeft: 8, paddingTop: 9, fontWeight: "normal", fontStyle: "normal", color: "red"}}
								/>
							) : (
								<></>
							)}
						</View>
					</View>
					{console.log(rules)}
					<Text
						style={{
							color: "red",
							alignSelf: "stretch",
							height: "auto",
							opacity: error ? 1 : 0,
							marginBottom: -5,
						}}
					>
						{error ? error.message : "Error"}
					</Text>
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
});

export default InputIconComp;
