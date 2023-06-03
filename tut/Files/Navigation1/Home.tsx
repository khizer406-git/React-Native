import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'
import Screen1 from './screen1';
import Screen2 from './screen2';



const HomeScreen = ({navigation}) => { 

    function handleNavigation(screenName: any)
    {   
        console.log(navigation)
        navigation.navigate('Screen1')
    }
    return (
        <View style={{flex: 1}}>
            <TouchableOpacity style={styles.TO} onPress={ () => {navigation.navigate("Screen1")}}>
                <Text style= {styles.Text}>Screen 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TO} onPress={ () => {handleNavigation("Screen2")}}>
                <Text style= {styles.Text}>Screen 2</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({

    TO : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    Text : {
        fontSize: 20,
        color: 'black',
    }
});