import React, { useState,useEffect } from 'react';
import { View, TextInput, Button, StyleSheet,Alert,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Register from "../Screens/Register";

const Login = ({navigation}:any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // retrieveData();
  }, []);

  const retrieveData = async () => {
    
    try {
        const storedName = await AsyncStorage.getItem('name');
        const storedPassword = await AsyncStorage.getItem('password');
        console.log(storedName);
        console.log(storedPassword);

        if (storedName) {
            const parsedNames = JSON.parse(storedName);
            if (storedPassword) {
                const parsedPasswords = JSON.parse(storedName);
                if(parsedNames.includes(username) && parsedPasswords.includes(username))
                {
                    Alert.alert(
                        'Alert Title',
                        'Login Successfull',
                        [
                            {
                            text: 'OK',
                            onPress: () => {
                                navigation.navigate('Home');
                            },
                            },
                        ]
                        );
                }
            }
        }
        
    } catch (error) {
        console.log(error);
    }
};

  const handleLogin = () => {
    retrieveData();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={{marginTop:20,marginBottom: 20}}>
        <Button title="Login" onPress={handleLogin} />
      </View>
      <Button title="Register" onPress={()=>{navigation.navigate('Register')}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'black'
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default Login;
