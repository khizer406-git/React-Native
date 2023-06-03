import React,{useState,useEffect} from 'react'
import {View,Text,TouchableOpacity,TextInput,StyleSheet,FlatList,Alert} from 'react-native'

const Countries = ({navigation}:any) => {

    const [countries,setCountries] = useState();

    useEffect( ()=> {
        fetch('https://api.eatachi.co/api/country')
        .then((response)=>{return response.json();})
        .then((newCountries)=>{setCountries(newCountries)})
        .catch((err) => {Alert.alert('error',err)})
    },[])

    function displayCountry(itemObject: any){
        const {item,index} = itemObject;

        return(
            <TouchableOpacity onPress={() =>
          navigation.navigate('CityList', {CountryId: item.CountryId})
        }>
                <View style={{flex: 1,backgroundColor: index%2==0 ? 'blue' : 'green',
                justifyContent:"space-between",flexDirection:'row',height: 60}}>
                    <Text>{item.Name}</Text>
                    <Text>{item.CurrencyName}</Text>
                </View>
            </TouchableOpacity>
        )
    }

  return (
    <View style={{flex: 1,backgroundColor:'black'}}>
        <FlatList data={countries} renderItem={displayCountry}/>
    </View>
  )
}

export default Countries;