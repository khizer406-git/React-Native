import React from 'react'
import { Text,View,Image,Dimensions } from 'react-native'

const RegWelcome = ({navigation}) => {

  const { width, height } = Dimensions.get('window');

  const navigateToHomeScreen = () => {
    navigation.navigate("HomeScreen1")
  }

  return (
    <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#ffffff'}}>
        <Text style={{color:'#e2cf1e', fontSize:30,fontWeight:'bold'}} onPress={navigateToHomeScreen}>Welcome To</Text>
        <Image source={require('../../Pictures/SplashRMBG.png')} 
        style={{ width: width*0.306, height: height*0.162,marginTop:'5%'}} 
        />
    </View>
  )
}

export default RegWelcome