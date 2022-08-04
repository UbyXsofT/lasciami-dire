import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ThemeScreen from "@organizer/theme/ThemeScreen";

const Stack = createNativeStackNavigator();

export default function NavigationTheme() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Theme'>
        <Stack.Screen
          name='Theme'
          component={ThemeScreen}
          options={{
            title: "The Theme",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
