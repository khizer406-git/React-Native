import React from 'react'
import { Text,View } from 'react-native'

const Temp = ({route,navigation}) => {
  return (
    <View>
        <Text>Helow</Text>
        <Text>{route.params.text}</Text>
    </View>
  )
}

export default Temp;