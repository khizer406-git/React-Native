/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler'
import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {
  SafeAreaView,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Splash from './Src/Screens/Splash';
import Register from './Src/Screens/Register';
import OTPVerfication from './Src/Components/Register/OTPVerfication';
import SignUp from './Src/Components/Register/SignUpDetails';
import RegWelcome from './Src/Components/Register/RegWelcome';
import HomeScreen from './Src/Screens/HomeScreen';
import HomeScreen2 from './Src/Components/HomeScreen/HomeScreen2';
import HomeScreen3 from './Src/Components/HomeScreen/HomeScreen3';
import Navigation from './Src/Screens/Navigation';
// import Test from './Src/Components/HomeScreen/Test';
import Map from './Src/Screens/Maps';
import Test from './Src/Screens/test';

const Stack = createStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'white' }, // Set the background color
      }}>
        {/* First Screen */}
          {/* <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/> */}
        
        {/* Second Screen */}
          {/* <Stack.Screen name="Register" component={Register} options={{headerShown: false }}/>
          <Stack.Screen name="OTPVerfication" component={OTPVerfication} options={{headerShown: false}}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
          <Stack.Screen name="RegWelcome" component={RegWelcome} options={{headerShown: false}}/> */}

        {/* Third Screen */}
        {/* <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}}/> */}
        {/* <Stack.Screen name="Test" component={Test} options={{headerShown: false}}/> */}
        {/* <Stack.Screen name="DropDown" component={DropDown} options={{headerShown: false}}/> */}
        
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        {/* <Stack.Screen name="HomeScreen2" component={HomeScreen2} options={{headerShown: false}}/>  */}
        {/* <Stack.Screen name="HomeScreen3" component={HomeScreen3} options={{headerShown: false}}/> */}
        {/* <Stack.Screen name="Navigation" component={Navigation} options={{headerShown: false}}/> */}
        {/* <Stack.Screen name="Map" component={Map} options={{headerShown: false}}/> */}
        {/* <Stack.Screen name="Test" component={Test} options={{headerShown: false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;


        