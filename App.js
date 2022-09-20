import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Screens/Home";
import { Provider } from "./src/context/BlogContext";
import ShowBlog from "./src/Screens/ShowBlog";
import AddBlog from "./src/Screens/AddBlog";
import EditBlog from "./src/Screens/EditBlog";

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="showBlog" component={ShowBlog} />
          <Stack.Screen name="addBlog" component={AddBlog} />
          <Stack.Screen name="editBlog" component={EditBlog} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
