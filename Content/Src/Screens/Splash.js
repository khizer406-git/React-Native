import React, { Component } from 'react';
import {Text,View,ImageBackground, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react';

var bg = require('../Images/s1.png');
var logo = require('../Images/s2.png');


const Splash = ({navigation}) =>{

  const[count,setCount] = useState(0)


  function handleNavigation(paramter){
    setCount(count + 1)
    navigation.navigate(paramter)
}

    return (
      < View>
          <View><Text>Hello World</Text></View>
          <View>
            <TouchableOpacity 
              onPress={()=>handleNavigation('Login')}>
              <Text>I am opacity 1</Text>
              <Text>{count}</Text>              
              {/* <Text>{route.params.text}</Text> */}
            </TouchableOpacity>
          </View>
          {/* <ImageBackground
            source={bg}
            style={{height: "100%", width: "100%"}}
          >
            <View style={{flex: 1, justifyContent: "center", alignitems: "center"}}>
              <Image source={logo}
                style={{height:100,width:100}}
              ></Image>
            </View>
            </ImageBackground>          */}
        </View>
    )
  }

export default Splash;