import React from 'react'
import {View,Text} from 'react-native';
import {useAppContext} from './src/AppContext'

const Contexttab = () => {
    const {counter} = useAppContext();
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
        <Text style={{fontSize: 100}}>{counter}</Text>
    </View>
  )
}

export default Contexttab;