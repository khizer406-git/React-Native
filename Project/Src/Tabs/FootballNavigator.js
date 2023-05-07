import React,{useState,useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FootBall from './FootBall'
import FootBallDetails from './FootBallDetails'

const Stack = createNativeStackNavigator();


function FootBallNavigator(){

    return (
      <Stack.Navigator>
        <Stack.Screen name="FootBall" component={FootBall} options={{headerTitle: "FootBall Matches" }}/>
        <Stack.Screen name="FootBallDetails" component={FootBallDetails} options={{headerTitle: "FootBall Matches Info" }}/>
      </Stack.Navigator>
  );
}

export default FootBallNavigator;
