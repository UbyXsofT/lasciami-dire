import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/organizer/home/index";
const Stack = createNativeStackNavigator();

<NavigationContainer>
  <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen
      name='Home'
      component={HomeScreen}
      options={{
        title: "Home",
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
      }}
    />
  </Stack.Navigator>
</NavigationContainer>;
