import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OTP = ({code}) => {
  const [otp, setOtp] = useState('');
  const generatedOtp = '123456'; // Replace with actual OTP generation logic

  const handleVerify = () => {
    if (otp === generatedOtp) {
      Alert.alert('Success', 'OTP is valid');
    } else {
      Alert.alert('Error', 'Invalid OTP');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'blue' }}>
      <Text>Enter OTP:</Text>
      <OTPInputView
        style={{ width: '80%', height: 200, }}
        pinCount={4}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        code={otp}
        onCodeChanged={(code) => setOtp(code)}
        placeholderTextColor={'green'}
      />
      <TouchableOpacity onPress={handleVerify}>
        <Text>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    underlineStyleBase: {
    width: 60,
    height: 80,
    borderWidth: 1,
    borderRadius: 30,
    borderBottomWidth: 1,
    backgroundColor:'white',
    fontSize:40,
    color:'black',
    textAlign:'center',
    alignItems:'center',
  },

  underlineStyleHighLighted: {
    borderColor: "red",
    backgroundColor:'yellow' 
  },
  borderStyleBase: {
    width: 40,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },
})


export default OTP;