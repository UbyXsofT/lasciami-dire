import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import {
  Entypo,
  FontAwesome,
  Fontisto,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { colors, typography, components } from "../theme/index";

import { Controller } from "react-hook-form";
import { color } from "styled-system";

const InputIconComp = ({
  control,
  name,
  rules = {},
  iconName,
  placeholder,
  secureTextEntry,
  iconColor,
  inputColor,
}) => {
  //console.log(control);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              {
                backgroundColor: "#00000000",
                borderColor: error ? "red" : inputColor,
              },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <Entypo
                name={iconName}
                style={[
                  styles.icon,
                  {
                    color: error ? "red" : iconColor,
                    fontFamily: typography.fontFamily.CANTARELL,
                  },
                ]}
              />

              <TextInput
                value={value || ""}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry || null}
                style={[
                  styles.input,
                  {
                    color: inputColor,
                    backgroundColor: "#00000000",
                  },
                ]}
              />
            </View>
          </View>

          <Text
            style={{
              color: "red",
              alignSelf: "stretch",
              height: "auto",
              opacity: error ? 1 : 0,
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
  container: {
    // borderWidth: 1,
    borderBottomWidth: 1,
    //borderRadius: 5,
    marginBottom: 0,
  },
  icon: {
    fontSize: 24,
    paddingLeft: 8,
    paddingTop: 8,
  },
  input: {
    marginLeft: -30,
    paddingLeft: 40,
    fontSize: 16,
    flex: 1,
    paddingTop: 14,
    paddingBottom: 0,
  },
});

export default InputIconComp;
