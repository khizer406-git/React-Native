import React,{useState} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,TextInput} from 'react-native'
import Screen1 from './screen1';
import Screen2 from './screen2';

const HomeScreen = ({navigation}: {navigation: any}) => { 

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');

    function handleSubmit(){
        navigation.navigate("Profile",{
            name: name,
            email: email,
        });
    }

    return (
        <View style={{flex: 1,backgroundColor:'black'}}>
            <View>
                <Text>Enter your name</Text>
                <TextInput placeholder='Enter your name' onChangeText={(e) => {setName(e)}}/>
                <Text>Enter your Email</Text>
                <TextInput placeholder='Enter your Email'onChangeText={(e) => {setEmail(e)}}/>
                <TouchableOpacity onPress={()=>{handleSubmit()}}>
                    <Text>Submit</Text>
                </TouchableOpacity>
                <Text>{name}</Text>
                <Text>{email}</Text>
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({

    TO : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    Text : {
        fontSize: 20,
        color: 'black',
    }
});