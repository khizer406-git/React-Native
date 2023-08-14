import React, { useEffect,useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList, Button,TextInput} from 'react-native';
import BackArrow from '../Pictures/BackArrow.svg';

import DropDown from '../Components/Register/SubComponents/DropDown';
import ModalComponent from '../Components/Register/SubComponents/ModalComponent';

// Create the POST request

const Register = ({navigation}) => {

  const [data,setData] = useState();  
  const [code,setCode] = useState();
  const [phoneNumber,setPhoneNumber] = useState();
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const getCode = (e) => {
    console.log(e)
    setCode(e)
  }

  const url = 'http://16.170.249.29/auth/phone-number';
  const url2 = 'http://16.170.249.29/auth/otp';



// Optional headers
const headers = {
  'Content-Type': 'application/json',
  // Add any other headers you may need
};
 


  const sendOtp = () => {
    console.log(phoneNumber)
    const num = `${code.value} ${phoneNumber}`;
    const data2 = {
      phoneNumber: num, // Replace with the desired phone number
    };
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data2),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData.devOnlyData.otpCode)
        console.log(responseData)
        sendData(num,responseData.devOnlyData.otpCode);
      })
      .catch(error => {
        console.error('Error:', error);
      })
    }

    
    const sendData = async (phoneno,otp) => {
       const object = {
          phoneNumber: phoneno, 
          otpCode: otp
        }
        console.log(JSON.stringify(object),"I am jSon useEffect naya wala")
        fetch(url2, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(object),
        })
          .then(response => response.json())
          .then(responseData => {
            console.log('Response:', responseData);
          })
          .then(setTimeout(()=>{navigation.navigate('OTPVerfication',{otp})},3000))
          .catch(error => {
            console.error('Error:', error);
          })
          // .finally(
          // );
      }
    


  const openConfirmation = () => {
    setConfirmationVisible(true);    
  }

  const showPhoneNumber = (e) => {
    console.log(e)    
    
  }

  const closeConfirmation = (e) => {
    setConfirmationVisible(false);
    if(e == "yes")
    {
      sendOtp();
    }
    else
    {
      navigation.navigate('Splash')
    }
  };

  return (
    <View style={{backgroundColor:'white'}}>
      <View style={styles.mainView}>
        <TouchableOpacity style={styles.nextTouchableOpacity}>
          <BackArrow height={20} width={50} />
        </TouchableOpacity>
        <Text style={styles.headingText}>Enter your Phone Number</Text>
      </View>
      <Text style={styles.subText}>Please Provide your phone number to create a new account or log in to the<Text style={{color:'blue'}}> Pirayo </Text> </Text>
      <View style={{marginTop:20}}>
        <Text style={{marginLeft:'6%',color:'black',fontWeight:'bold'}}>Phone Number</Text>
        <View style={styles.subView1}>
          <DropDown getCode={getCode}/>
          <TextInput keyboardType="numeric" style={styles.textInput} placeholder='Enter your Phone Number' onChangeText={(e)=>setPhoneNumber(e)}/>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={openConfirmation}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
          <Text style={[styles.subText,{fontWeight:'400',color:'black'}]}>By providing my phone number, I hereby agree and accept the <Text style={{color:'blue',letterSpacing:1}}>Terms of Service</Text> and <Text style={{color:'blue',letterSpacing:1}}>Privacy Policy</Text> in use of the Pirayo App</Text>
        </View>
        <ModalComponent confirmationVisible={confirmationVisible} showPhoneNumber={showPhoneNumber} closeConfirmation={closeConfirmation} />
      </View>
    </View> 
  )
}

export default Register;

const styles = StyleSheet.create(
  {
      mainView: {
        alignItems:'flex-start',
        flexDirection: 'row',
        marginTop:10,
        marginLeft:10,
        // backgroundColor:'green',
        justifyContent:'flex-start',
        alignSelf:'flex-start',
        verticalAlign:'middle',


      },
      subView1:{
        margin:20,
        marginTop:'1%',
        backgroundColor:'#efefef',
        borderRadius:40,
        flexDirection:'row',
        
      },
      nextTouchableOpacity:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:50,
        padding:10,
        verticalAlign:'middle'
      },
      headingText:{
        fontSize:30,
        fontWeight:'bold',
        letterSpacing:-1,
        // backgroundColor:'red',
        textAlign:'center',
        flex: 1,
        color:'black',
        flexWrap: 'wrap',
        alignSelf:'flex-end',
      },  
      textInput:{
        marginLeft:20,
        borderLeftColor:'black',
        borderLeftWidth:1,
        paddingLeft:20,
      },
      
      subText: {
        textAlign:'center',
        margin:20,
        color:'black',
        fontWeight:'bold'
      },
      button: {
        backgroundColor: '#4b3acc',
        margin:20,
        marginTop:0,
        padding: 10,
        borderRadius: 40,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },
  })