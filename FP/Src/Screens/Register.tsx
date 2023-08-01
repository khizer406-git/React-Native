import React,{useState,useEffect} from "react";
import { View, Button, Text, StyleSheet,Image,TouchableOpacity,ScrollView,TextInput,Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({navigation}:any) => {
    
    const[name,setname] = useState('');
    const[password ,SetPassword] = useState('');
    const[Email,SetEmail] = useState('');
    

    // useEffect(() => {
    //     retrieveData();
    //   }, []);

    const clearAsyncStorage = async () => {
        try {
          await AsyncStorage.clear();
          console.log('AsyncStorage cleared successfully.');
        } catch (error) {
          console.log('Failed to clear AsyncStorage:', error);
        }
      };
      

    const storeData = async () => {
        try {
            const existingname = await AsyncStorage.getItem('name');    
            let existingnameArray = existingname ? JSON.parse(existingname) : [];
            existingnameArray.push(name)
            await AsyncStorage.setItem('name', JSON.stringify(existingnameArray));
          
            const existingpassword = await AsyncStorage.getItem('password');    
            let existingPasswordArray = existingpassword ? JSON.parse(existingpassword) : [];
            existingPasswordArray.push(password)
            await AsyncStorage.setItem('password', JSON.stringify(existingPasswordArray));

            const existingEmail = await AsyncStorage.getItem('Email');    
            let existingEmailArray = existingEmail ? JSON.parse(existingEmail) : [];
            existingEmailArray.push(Email)
            await AsyncStorage.setItem('Email', JSON.stringify(existingEmailArray));

          
          Alert.alert(
            'Alert Title',
            'Successfully Register',
            [
                {
                text: 'OK',
                onPress: () => {
                    navigation.navigate('Login');
                },
                },
            ]
            );
        } catch (error) {
          console.log(error);
        }
      };
    
    const retrieveData = async () => {
        try {
            const storedName = await AsyncStorage.getItem('name');
            const storedEmail = await AsyncStorage.getItem('Email');
            const storedPassword = await AsyncStorage.getItem('Password');

            if (storedName) {
            setname(storedName);
            }
            if (storedEmail) {
            SetEmail(storedEmail);
            }
            if (storedPassword) {
            SetPassword(storedPassword);
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
                <Text style={styles.text}>Password: </Text>
                <TextInput style={styles.textinput} value={password} onChangeText={(e)=>{SetPassword(e)}}/>
            </View>

            <View style={styles.textView}>
                <Button title="Save" onPress={()=>{storeData()}}/>
            </View>
            <Button title="Login Page" onPress={()=>{navigation.navigate('Login')}}/>
            <Button title="clear" onPress={()=>{clearAsyncStorage();}}/>
      </View>
    );
  };

export default Register;

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
