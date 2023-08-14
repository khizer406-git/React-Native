import React from 'react'
import {View,Text,Image,Dimensions, StyleSheet} from 'react-native';

import Logo1 from '../Pictures/1.svg'
import BackArrow from '../Pictures/BackArrow.svg';

const HomeScreen = ({navigation}) => {

    const navigateToHomeScreen2 = () => {
        navigation.navigate('HomeScreen2')
    }

    const { width, height } = Dimensions.get('window');
  
    return (
    <View style={styles.mainView}>
        <View style={styles.subView1}>
            <Image
                source={require('../Pictures/khizer.jpg')} 
                style={{ width: width*0.20, height: height*0.10, borderRadius:(width)/10 }}
            />
        </View>
        <View style={styles.subView2}>
            <Text style={{fontSize:20,color:'black'}}>Welcome</Text>
            <Text style={{fontSize:25,fontWeight:'bold',color:'black'}} onPress={navigateToHomeScreen2}>Nimra,</Text>
        </View>
        <View style={styles.subView3}>
                <Text style={{color:'#e2cf1e',fontWeight:'bold',fontSize:20}}>Status Bar</Text> 
                <Text style={{color:'#e2cf1e'}}>Traveller! Ready to ride and Explore</Text>
        </View>
        <View style={styles.subView4}>
            <View style={styles.subView41}>
                <Image
                    source={require('../Pictures/HomeScreen1pic1.png')} 
                    style={{ width: '100%', height: '100%',borderRadius:30 }}
                />
            </View>
            <View style={{flex:1,flexDirection:'column',marginRight:'5%'}}>
                <View style={{ width: '100%', height: '100%',flex:5,borderRadius:20,marginRight:10,marginBottom:10,backgroundColor:'#4b3acc',flexDirection:'column' }}>
                    <View style={{flexDirection:'row',flex:2}}>
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold',padding:10,flexDirection:'column',flex:1,fontWeight:'bold'}}>RAPID {'\n'}EXPRESS</Text>
                        <Text style={{color:'white',fontSize:20,padding:10,fontWeight:'bold'}}>?</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Image
                        source={require('../Pictures/car1.png')}
                        style={{ width: '80%', height: '100%',borderRadius:20,alignSelf:'flex-end' }}
                        />
                    </View>
                </View>
                <View style={{flex:1,borderRadius:20,padding:10,backgroundColor:'#efefef',flexDirection:'row' }}>
                    <Image
                    source={require('../Pictures/search.png')}
                    style={{ width: '20%', height: '100%',borderRadius:20 }}
                    />
                    <Text style={{color:'grey',fontWeight:'normal',alignSelf:'center'}}> Where to ?</Text>
                
                </View>       
                {/* <Image
                    source={require('../Pictures/pic.jpg')}
                    style={{ width: '100%', height: '100%',flex:5,borderRadius:20,marginRight:10,marginBottom:10 }}
                /> */}
                {/* <Image
                    source={require('../Pictures/pic.jpg')}
                    style={{ width: '100%', height: '100%',flex:1,borderRadius:10,padding:10 }}
                /> */}
            </View>
        </View>
        <View style={styles.subView5}>
                <View style={{flex:1,padding:'2%'}}>
                    <Text style={styles.text}>FIXED {"\n"}EXPRESS</Text>
                </View>
                <Image
                    source={require('../Pictures/car1.png')}  
                    style={{ width: '60%', height: '80%',borderRadius:20 ,alignSelf:'flex-end',alignItems:'flex-end'}}
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
        flex:1,marginTop:'-8%',marginLeft:'5%'
    },
    subView3:{
        flex:1,backgroundColor:'#242420',margin:'5%',marginTop:'-10%',borderRadius:30,paddingTop:'5%',paddingLeft:'5%',
    },
    subView4:{
        flex:2,backgroundColor:'transparent',flexDirection:'row',justifyContent:'space-around',
    },
    subView41:{
        flex:1,paddingLeft:'5%',paddingRight:'5%',
    },
    subView5:{
        flex:1,backgroundColor:'#242420',margin:'5%',flexDirection:'row',borderRadius:20
    },
    text:{
        color:'white',fontWeight:'bold',fontSize:20,
    }
})

export default HomeScreen;