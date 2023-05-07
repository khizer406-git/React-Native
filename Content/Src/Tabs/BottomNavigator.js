import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './Settings';
import Ionicicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

import { View, Text } from 'react-native'
import React from 'react'

export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: () => {return <Ionicicons name='home' />}}}/>
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}