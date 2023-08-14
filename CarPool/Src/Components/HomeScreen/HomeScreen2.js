import React from 'react'
import {View,Text,Image,Dimensions, StyleSheet} from 'react-native';
import Logo1 from '../../Pictures/1.svg'
import BackArrow from '../../Pictures/BackArrow.svg';

const HomeScreen2 = ({navigation}) => {

    const { width, height } = Dimensions.get('window');
    
    const navigateToHomeScreen3 = () => {
        navigation.navigate('HomeScreen3')
    }

    return (
    <View style={styles.mainView}>
        <View style={styles.subView1}>
            <Image
                source={require('../../Pictures/khizer.jpg')}
                style={{ width: width*0.20, height: height*0.10, borderRadius:(width)/10 }}
            />
        </View>
        <View style={styles.subView2}>
            <Text style={{fontSize:22}}>Welcome</Text>
            <Text style={{fontSize:30}} onPress={navigateToHomeScreen3}>Nimra,</Text>
        </View>
        <View style={styles.subView3}>
                <Text style={styles.text}>Destination Set Confirm</Text> 
                <Text style={styles.text}>and search for a ride</Text>
        </View>
        <View style={styles.subView4}>
            <View style={styles.subView41}>
                <Image
                    source={require('../../Pictures/pic.jpg')} 
                    style={{ width: '100%', height: '100%',borderRadius:30 }}
                />
            </View>
            <View style={{flex:1,flexDirection:'column',marginRight:'5%'}}>
                <Image
                    source={require('../../Pictures/pic.jpg')}
                    style={{ width: '100%', height: '100%',flex:3,borderRadius:20,marginRight:10,marginBottom:10 }}
                />
                <Image
                    source={require('../../Pictures/pic.jpg')}
                    style={{ width: '100%', height: '100%',flex:1,borderRadius:10,padding:10 }}
                />
            </View>
        </View>
        <View style={styles.subView5}>
                <View style={{flex:1,padding:'2%'}}>
                    <Text style={styles.text}>Fixed</Text>
                    <Text style={styles.text}>Express</Text>
                </View>
                <Image
                    source={require('../../Pictures/pic.jpg')}  
                    style={{ width: '100%', height: '100%',flex:3,borderRadius:20 }}
                />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainView:{
        flex:1,
    },
    subView1:{
        alignItems:'flex-end',paddingTop:'5%',paddingRight:'5%',flex:1,
    },
    subView2:{
        flex:1,marginTop:'-5%',marginLeft:'5%'
    },
    subView3:{
        flex:1,backgroundColor:'#242420',margin:'5%',borderRadius:30,paddingTop:'5%',paddingLeft:'5%',
    },
    subView4:{
        flex:2,backgroundColor:'none',flexDirection:'row',justifyContent:'space-around',
    },
    subView41:{
        flex:1,paddingLeft:'5%',paddingRight:'5%',
    },
    subView5:{
        flex:1,backgroundColor:'black',margin:'5%',flexDirection:'row',borderRadius:20,
    },
    text:{
        color:'#e2cf1e',fontWeight:'bold',fontSize:20,
    },
    text2:{
        color:'white',fontWeight:'bold',fontSize:20,
    }

})

export default HomeScreen2;