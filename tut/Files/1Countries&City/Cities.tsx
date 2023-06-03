import React,{useState,useEffect} from 'react'
import {View,Text,TouchableOpacity,TextInput,StyleSheet,FlatList,Alert} from 'react-native'

const Cities = ({route}: any) => {

  const [cities,setCities] = useState([])

  useEffect( () => {
    const {CountryId} = route.params;
    
    fetch(`https://api.eatachi.co/api/City/ByCountry/${CountryId}`)
    .then((response)=>{return response.json();})
        .then((newCountries)=>{setCities(newCountries); console.log(newCountries)})
        .catch((err) => {Alert.alert('error',err)})
  },[])

  function displayCity(itemObject: any){
    const {item,index} = itemObject;
    return(
      <TouchableOpacity>
        <View style={{flex:1}}>
          <Text style={{color:'white'}}>{item.CountryId}</Text>
          <Text style={{color:'white'}}>{item.CityId}</Text>
          <Text style={{color:'white'}}>{item.Name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  
  return (
    <View style={{flex:1,backgroundColor: 'black'}}>
      <FlatList data={cities} renderItem={displayCity}/>
    </View>
  )
}

export default Cities