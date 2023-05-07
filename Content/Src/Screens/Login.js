import React, { Component, useState } from 'react';
import {Dimensions, Text,View,TextInput,StyleProp,StyleSheet, Touchable, TouchableOpacity} from 'react-native';



const Login = ({navigation}) => {
    const [name,setName] = useState("")
    function handlesubmit(){
        navigation.navigate('Temp',{ text: name})
    }

      return (
        <View>
            <View style={{justifyContent: "center", alignitems : "center"}}>
                <Text>Login Screen</Text>
                <TextInput style = {styles.input} placeholder='Enter your Email' value={name} onChangeText={(text) => setName(text)}/>
                <TouchableOpacity >
                    <Text style={styles.submit} onPress={handlesubmit}>Submit</Text>
                </TouchableOpacity>
                <Text>{name}</Text>
              </View>        
         </View>
      )
}

export default Login;

const {width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    input:{
        width:width-20,
        height:40,
        backgroundColor:"white",
        borderRadius:10,
        margin:10,
    },
    
    submit:{
        width:width-80,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height:40,
        backgroundColor:"white",
        borderRadius:10,
        margin:10,
    }
});

