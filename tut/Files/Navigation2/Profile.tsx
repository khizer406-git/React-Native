import React from 'react'
import {View,Text} from 'react-native'

function Profile({route,navigation}){
    
    const {name,email} = route.params
    return(
        <View style={{flex: 1,backgroundColor:'black',alignItems: 'center',justifyContent:'center'}}>
            <Text>{name}</Text>
            <Text>{email}</Text>
        </View>
    )
}

export default Profile;