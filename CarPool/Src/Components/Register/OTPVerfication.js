import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,FlatList, Button,TextInput} from 'react-native';
import BackArrow from '../../Pictures/BackArrow.svg';
import OTP from './SubComponents/OTP';

const OTPVerfication = ({navigation,route}) => {

  function navigateToSignUp(){
      navigation.navigate('SignUp');
  }

  return (
    <View>
      <View style={styles.mainView}>
        <TouchableOpacity style={styles.nextTouchableOpacity}>
          <BackArrow height={20} width={50} />
        </TouchableOpacity>
        <Text style={styles.headingText}>OTP Verification</Text>
      </View>
      
      <Text style={styles.subText}>Stay secure and protected - enter your OTP on the screen to verify your account and get started with our Pirayo!</Text>
      <Text style={styles.boldText}>Please check your phone </Text>
      <Text style={{textAlign:'center'}}>We have sent code to +923343390988</Text>
      <Text style={{textAlign:'center'}}>{route.params?.otp}</Text>

      <View style={{marginTop: '25%'}} >
            < OTP code={route.params?.otp}/> 
      </View>
      
      <View style={{alignItems:'center',marginTop:'15%'}}>
        <Text style={{fontSize:18,marginBottom:'5%'}}>Didn't get a code Click to Respond</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <TouchableOpacity style={[styles.button,{marginRight:'2%',backgroundColor:'none',borderWidth:1}]}>
                <Text style={[styles.buttonText,{color:'black'}]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{marginLeft:'2%'}]} onPress={navigateToSignUp}>
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OTPVerfication;

const styles = StyleSheet.create(
    {
        mainView: {
          alignItems:'flex-start',
          flexDirection: 'row',
          marginTop:10,
          marginLeft:10
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
          flex: 1,
          flexWrap: 'wrap'
        },  
        textInput:{
          marginLeft:20,
          borderLeftColor:'black',
          borderLeftWidth:1,
          paddingLeft:20,
        },
        
        subText: {
          textAlign:'center',
          margin:20
        },
        boldText:{
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center'
        },  
        button: {
            backgroundColor: '#4b3acc',
            width: '40%',
            height: '100%',
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