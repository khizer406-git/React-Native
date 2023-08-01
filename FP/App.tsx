import 'react-native-gesture-handler'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import registerNNPushToken from 'native-notify';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {View,Text,Button} from 'react-native'
import DrawerNavigator from "./Src/Component/DrawerNavigator";
import StackNavigator from './Src/Component/StackNavigator';

function App(): JSX.Element {
  // registerNNPushToken(8548, '3lXO43epSvxU8Q4FfjY1qd');
  return (
    <NavigationContainer>
         <DrawerNavigator /> 
    </NavigationContainer>  
    );
}

export default App;
