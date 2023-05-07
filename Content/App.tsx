import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import {View,Text} from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


// import { createAppContainer } from 'react-navigation';


// import { NavigationContainer } from '@react-navigation/native';

import Splash from './Src/Screens/Splash';
import Login from './Src/Screens/Login'
import { NavigationContainer } from '@react-navigation/native';
import Temp from './Src/Screens/Temp'
import BottomNavigator from './Src/Tabs/BottomNavigator'
// import { create } from 'react-test-renderer';

const Stack = createNativeStackNavigator();


function App(){
  return (
    // <View>
    //   <Text>Hello World Bro</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Splash" component={Splash} options={{headerTitle: "Hello World", headerTitleAlign: "center"}}/> */}
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Temp" component={Temp} /> */}
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
