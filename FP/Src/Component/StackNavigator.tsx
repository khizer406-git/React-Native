import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/login';
import Register from '../Screens/Register';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (    
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}/>
    </Stack.Navigator>
  )
}

export default StackNavigator
