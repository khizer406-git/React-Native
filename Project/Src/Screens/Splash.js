import { View, Text, StyleSheet,StatusBar,Image,Dimensions } from 'react-native'
import React from 'react'
import logo from '../Images/logo.png'

export default function Splash() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.text}>Welcome to Cricket & FootBall info</Text>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.text2}>Welcome to Cricket & FootBall info</Text>
    </View>
  )
  
}

const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    color: "white",
    fontSize: 30,
    alignItems: "center",
  },
  text : {
    marginTop: 25,
    color: "white",
    fontSize: 30,
    alignItems: "center",
    textAlign: "center"
  },
  logo : {
    width: width,
    height: width,
    marginTop: height/5,
    position: "absolute", 
  },
  text2 : {
    marginTop: width+30,
    color: "white",
    fontSize: 30,
    alignItems: "center",
    textAlign: "center"
  },

})