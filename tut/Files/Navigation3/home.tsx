import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Setting from './Settings'
import Infopage from './Infopage';
// import Ionicicons from './react-native-vector-icons/Ionicons'
// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }: { navigation: any }) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Info" component={Infopage} />
            <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
    )
}

export default HomeScreen;
