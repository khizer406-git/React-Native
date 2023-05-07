import Ionicicons from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Cricketnavigator from './Cricketnavigator';
import FootBallNavigator from './FootballNavigator';

const Tab = createMaterialBottomTabNavigator();

import React from 'react'

export default function BottomNavigator() {
  <a href="https://www.flaticon.com/free-icons/soccer" title="soccer icons">Soccer icons created by Freepik - Flaticon</a>
  const BottomIcon = (props) => {
    return <Ionicicons name={props.name} size={20} />
  }

  const BottomIcon2 = (props) => {
    return <Ion-icon name="football"></Ion-icon>
  }
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        height: 50,
        paddingHorizontal: 5,
        paddingTop: 0,
        backgroundColor: "green",
        position: 'absolute',
        borderTopWidth: 0,
      },
    })}>
      <Tab.Screen name="Cricket Info" component={Cricketnavigator} options={{ tabBarIcon: () => <BottomIcon name="football" /> }} />
      <Tab.Screen name="FootBall Info" component={FootBallNavigator} options={{ tabBarIcon: () => <BottomIcon name="tennisball-sharp" /> }} />
    </Tab.Navigator>
  )
}