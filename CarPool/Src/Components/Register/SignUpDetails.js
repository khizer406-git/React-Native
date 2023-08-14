import React from 'react'
import { useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList, Button,TextInput} from 'react-native';
import BackArrow from '../../Pictures/BackArrow.svg';
import OTP from './SubComponents/OTP';
import { SelectList } from 'react-native-dropdown-select-list'

const SignUp = ({navigation}) => {

    const [selected, setSelected] = useState('Male');
    const [mode,setMode] = useState('Rider')
    const [data,setData] = useState([{
        key: Math.random(),
        value: "Male",
    },  
    {
        key: Math.random(),
        value: "Female",
    },
    {
        key: Math.random(),
        value: "Other",
    },
    ]);

    const navigateToWelcomeScreen = () =>{
      navigation.navigate("RegWelcome")
    }

    const handleGenderChange = (gender) => {
        setSelectedGender(gender);
    };

  return (
    <View>
      <View style={styles.mainView}>
        <TouchableOpacity style={styles.nextTouchableOpacity}>
          <BackArrow height={20} width={50} />
        </TouchableOpacity>
        <View style={{position:'absolute',alignItems:'center',justifyContent:'center',marginLeft:'30%'}}>
            <Text style={styles.headingText}>Sign UP</Text>
        </View>
      </View>
      
        <Text style={styles.subText}>Sign up now for Pirayo's easy car booking service and travel with convenience</Text>
        <View style={{margin:20}}>
            <Text style={styles.text}>Full Name</Text>
            <TextInput style={styles.textInput}/>
            <Text style={styles.text}>Gender</Text>
            <SelectList 
                label="Select Gender"
                setSelected={(val) => setSelected(val)} 
                data={data} 
                save="value"
                placeholder='Select Gender'
                defaultOption={data[0]}
                boxStyles={{borderRadius:100}}
            />
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={styles.text}>Email Address</Text> 
                <Text style={{marginLeft:'1%'}}>[Optional]</Text>
            </View>
            <TextInput style={styles.textInput}/>
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.textInput}/>
            <Text style={styles.text}>Register yourSelf as:</Text>
            
            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:'4%'}}>
                <TouchableOpacity style={[styles.button,{marginRight:'2%',backgroundColor:(mode==="Rider")?'#4b3acc':'transparent',borderWidth:1}]} onPress={()=>{setMode("Rider")}}>
                    <Text style={[styles.buttonText,{color:(mode==="Rider")?'white':'#4b3acc'}]} >Rider</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,{marginLeft:'2%',backgroundColor:(mode==="Driver")?'#4b3acc':'transparent',borderWidth:1,borderColor:'#4b3acc'}]} onPress={()=>{setMode("Driver")}}>
                    <Text style={[styles.buttonText,{color:(mode==="Driver")?'white':'#4b3acc'}]}>Driver</Text>
                </TouchableOpacity>
            </View>
            
            <Text style={{marginLeft:'2%',marginRight:'2%',textAlign:'center'}}>By continuing, you agree to our Terms of Services and Privacy Policy</Text>
            
            <TouchableOpacity style={styles.buttonOTP} onPress={navigateToWelcomeScreen}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      
      <View style={{marginTop: '25%'}} >
            < OTP/> 
      </View>
    </View>
  )
}

export default SignUp;

const styles = StyleSheet.create(
    {
        mainView: {
          alignItems:'flex-start',
          flexDirection: 'row',
          marginTop:10,
          marginLeft:10,
        },
        subView1:{
          margin:20,
          backgroundColor:'#ffffff',
          borderRadius:40,
          flexDirection:'row'
        },
        nextTouchableOpacity:{
          borderColor:'black',
          borderWidth:1,
          borderRadius:50,
          padding:10
        },
        headingText:{
          fontSize:30,
          fontWeight:'bold',
          textAlign:'center',
        //   flex: 1,
        //   flexWrap: 'wrap'
        },  
        textInput: {
            backgroundColor:'#efefef',
            borderRadius:20,
        },
        subText: {
          textAlign:'center',
          margin:20
        },
        text: {
            marginBottom:'4%',
            fontWeight:'bold',
            fontSize:20,
        },
        boldText:{
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center'
        },  
        button: {
            backgroundColor: '#4b3acc',
            width: '40%',
            marginTop:0,
            padding: 10,
            borderRadius: 40,
        },
            buttonText: {
            color: 'white',
            fontSize: 16,
            fontWeight:'bold',
            textAlign: 'center',
        },
        buttonOTP: {
            backgroundColor: '#4b3acc',
            marginTop:'4%',
            padding: 10,
            borderRadius: 40,
        },
    })