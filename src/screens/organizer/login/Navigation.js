import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@organizer/login/index";
const Stack = createNativeStackNavigator();

<NavigationContainer>
  <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen
      name='Login'
      component={LoginScreen}
      options={{
        title: "Login",
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
      }}
    />
  </Stack.Navigator>
</NavigationContainer>;
