import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { ScrollView, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ThemeScreen from "@organizer/theme/ThemeScreen";
import ThemeProvider from "@theme/ThemeProvider";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <ThemeProvider>
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
      </ThemeProvider>
    </>
  );
};

export default App;
