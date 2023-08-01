import React,{useEffect,useState} from 'react'
import {View,StyleSheet,Image,Text,Dimensions,TouchableOpacity} from 'react-native';

import Boarding from './Boarding';

import Logo from '../Pictures/boarding1.svg';


const Splash = () => {

    //useStates
    const [progress, setProgress] = useState(1/3);
    const [loading,setLoading] = useState(true);
    const [Heading,setHeading] = useState('Shared Express');
    const [subHeading,setsubHeading] = useState("Share your ride, save big with Shared Express - Real time ride sharing on your fingertips.");
    

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },0)}
    ,[])

    function loader(){
        if(progress<1)
        {
            for(let i = 0; i<100/3 ; i=i+1)
            {
                setTimeout(() => {
                    setProgress(progress => progress+0.01)    
                }, 0);
            }
            if(progress > 0.32 && progress < 0.63)
            {
                setHeading("FIXED EXPRESS");
                setsubHeading("Exgerience the Ultimate Convenienco win FIxed EXorese Your Fixed Route, Your Fixed Fare Your Fixed Comforti");                
            }
            if(progress > 0.64 )
            {
                setHeading("Rapid EXPRESS");
                setsubHeading("Get to Your Destination in a Flash with Rapid Express - The Fastost WaY to BOOk Your Rider");                
            }
        }
    }

    return (
        loading?( /*Splash Screen*/
                <View style={styles.splashStyle}> 
                    <Image source={require('../Pictures/splash.png')} />
                </View>)
            :(<Boarding Logo={Logo} progress={progress} Heading={Heading} subHeading={subHeading} loader={loader}/>)
    )
}

const styles = StyleSheet.create(
    {
        splashStyle:{
            flex:1,
            backgroundColor:'yellow',
            alignItems:'center',
            justifyContent:'center',
        },
    }
)

export default Splash;