import React,{useEffect,useState} from 'react'
import {View,StyleSheet,Image,Text,Dimensions,TouchableOpacity} from 'react-native';

import ProgressBar from './SubComponents/ProgressBar';
import Arrow from '../../Pictures/Arrow.svg';

const Boarding = ({Logo, progress, Heading, subHeading, loader}) => {

    
    //local Variables
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    return (
            <View>
                <Logo height={screenHeight/2} width={screenWidth} />
                <View style={{alignItems:'center'}}>
                    <ProgressBar progress={progress}/>
                    <Text style={styles.mainHeading}>{Heading}</Text>
                    <Text style={styles.subHeading}>{subHeading}</Text>
                    <TouchableOpacity style={styles.nextTouchableOpacity} onPress={loader}>
                        <Arrow height={20} width={60} />
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create(
{
    mainHeading:{
        fontSize:40,
        marginBottom:30,
    },
    subHeading:{
        textAlign:'center',
        marginLeft:50,
        marginRight:50,
        marginBottom:50,
        fontSize:20,
    },
    nextTouchableOpacity:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:50,
        padding:20
    }
})

export default Boarding;