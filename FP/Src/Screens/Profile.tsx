import React,{useState,useEffect} from "react";
import { View, Button, Text, StyleSheet,Image,TouchableOpacity,ScrollView,TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
    
    const[name,setname] = useState('');
    const[Email,SetEmail] = useState('');
    const[Address,SetAddress] = useState('');

    useEffect(() => {
        retrieveData();
      }, []);

    const storeData = async () => {
        try {
          await AsyncStorage.setItem('name', name);
          await AsyncStorage.setItem('Email', Email);
          await AsyncStorage.setItem('Address', Address);
        } catch (error) {
          console.log(error);
        }
      };
    
    const retrieveData = async () => {
        try {
            const storedName = await AsyncStorage.getItem('name');
            const storedEmail = await AsyncStorage.getItem('Email');
            const storedAddress = await AsyncStorage.getItem('Address');

            if (storedName) {
            setname(storedName);
            }
            if (storedEmail) {
            SetEmail(storedEmail);
            }
            if (storedAddress) {
            SetAddress(storedAddress);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={{marginLeft:10,marginRight:10,flex:1}}>
            <View style={styles.textView}>
                <Text style={styles.text}>Name: </Text>
                <TextInput style={styles.textinput} value={name} onChangeText={(e)=>{setname(e)}}/>
            </View>

            <View style={styles.textView}>
                <Text style={styles.text}>Email: </Text>
                <TextInput style={styles.textinput} value={Email} onChangeText={(e)=>{SetEmail(e)}}/>
            </View>
            
            <View style={styles.textView}>
                <Text style={styles.text}>Address: </Text>
                <TextInput style={styles.textinput} value={Address} onChangeText={(e)=>{SetAddress(e)}}/>
            </View>

            <View style={styles.textView}>
                <Button title="Save" onPress={()=>{storeData()}}/>
            </View>

            <View><Text style={styles.text}>maps</Text></View>
      </View>
    );
  };

export default Profile;

const styles = StyleSheet.create({
    textView:{
        marginTop:20,
        marginBottom:20,
    },
    textinput:{
        color: 'black',
        borderRadius: 20,
        borderWidth: 1,
        padding:5,
        paddingLeft: 15,
        borderColor: 'black',
        backgroundColor: '#FFFFF7',
    },
    text: {
        marginLeft:15,
        marginBottom:2,
        color: 'black'
    }

})
