import *as React from "react"
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import Home from "./screens/home"
import Iss from "./screens/issLocation"
import Meteors from "./screens/meteors"
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="iss" component={Iss}/>
        <Stack.Screen name="meteors" component={Meteors}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}



