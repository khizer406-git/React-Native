import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState,useEffect} from 'react';
// import {View,Text} from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import Cricket from './Cricket'
import CricketDetail from './CricketDetail'

const Stack = createNativeStackNavigator();


function App(){

    return (
      <Stack.Navigator>
        <Stack.Screen name="Cricket" component={Cricket} options={{headerTitle: "Cricket Matches"}}/>
        <Stack.Screen name="CricketDetail" component={CricketDetail} options={{headerTitle: "Cricket Match Info"}}/>
      </Stack.Navigator>
  );
}

export default App;
