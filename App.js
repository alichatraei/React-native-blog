import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Screens/Home";
import { BlogContextProvider } from "./src/context/BlogContext";
const Stack = createStackNavigator();
export default function App() {
  return (
    <BlogContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogContextProvider>
  );
}
