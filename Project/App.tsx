import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState,useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from './Src/Screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './Src/Tabs/BottomNavigator'

const Stack = createNativeStackNavigator();


function App(){
  const [showSplashScreen,setShowSplashScreen] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false)
    }, 2000)
  },[])

    return (
    <NavigationContainer>
      <Stack.Navigator>
        {showSplashScreen ? (<Stack.Screen name="Splash" component={Splash} options={{headerTitle: "Splash Screen", headerTitleAlign: "center", headerShown: false}}/>
        ):null}
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
