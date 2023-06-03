import React from 'react'
import {View,Text} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Countries from './countries'
import Settings from './Settings'

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="CountriesList" component={Countries}/>
        <Tab.Screen name="Options" component={Settings}/>
    </Tab.Navigator>
  )
}   

export default HomeTabs