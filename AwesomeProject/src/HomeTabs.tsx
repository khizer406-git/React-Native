import React from 'react'
import {Text,View} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './About';
import ContactUs from './ContactUs';

import { NavigationContainer } from '@react-navigation/native';
import Pharmacy from './Pharmacy';
import GoogleMap from './GoogleMap';

const Tab = createBottomTabNavigator();


function HomeTabs() {
    
    return (
    <NavigationContainer>  
      <Tab.Navigator>
        <Tab.Screen name="Pharmacy" component={Pharmacy} options={{}}/>
        <Tab.Screen name="About" component={About}  />
        <Tab.Screen name="ContactUs" component={ContactUs}  />
        {/* <Tab.Screen name="GoogleMap" component={GoogleMap}  /> */}
      </Tab.Navigator>
    </NavigationContainer>
    )
  }

export default HomeTabs;
