import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native'

const SplashWelcomeBack = ({navigateToRegisterScreen}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.subView}>
          <Text style={styles.headingText}>Welcome</Text>
          <Text style={styles.headingText}>Back !</Text>
      </View>
      <View style={styles.subView}>
        <TouchableOpacity style={styles.appButtonContainer} onPress={navigateToRegisterScreen}>
            <Text style={styles.appButtonText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    mainView:{
      flex:1,
      backgroundColor:'yellow',
    },
    subView:{
      flex:1,
      justifyContent:'flex-end',
    },
    headingText:{
      textAlign:'center',
      fontSize:50,
      fontWeight:'bold'
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#4b3acc",
        textAlign:'center',
        color: 'white',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 40
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
  }
)

export default SplashWelcomeBack