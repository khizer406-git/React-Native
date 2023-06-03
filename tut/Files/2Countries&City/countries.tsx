import React,{useState,useEffect} from 'react'
import {View,Text,TouchableOpacity,TextInput,StyleSheet,FlatList,Alert,ActivityIndicator} from 'react-native'

const Countries = ({navigation}:any) => {

    const [countries,setCountries] = useState();
    const [loading,setLoading] = useState(false);

    useEffect( ()=> {
        fetch('https://api.eatachi.co/api/country')
        .then((response)=>{return response.json();})
        .then((newCountries)=>{setCountries(newCountries);setLoading(true)})
        .catch((err) => {Alert.alert('error',err)})
    },[])

    function displayCountry(itemObject: any){
        const {item,index} = itemObject;

        return(
            <TouchableOpacity onPress={() =>
          navigation.navigate('CityList', {CountryName: item.Name, CountryId: item.CountryId})
        }>
                <View style={{flex: 1,backgroundColor: index%2==0 ? 'blue' : 'green',
                justifyContent:"space-between",flexDirection:'row',height: 60}}>
                    <Text>{item.Name}</Text>
                    <Text>{item.CurrencyName}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    function dataSort()
    {
      let templist2 = countries.sort( (a,b) => {
        return a.Name > b.Name ? 1 : -1 
      })
      setCountries(templist2)
    }
    async function handleSearch(e){
      // setCountries(oldCountries)
      let search = e;
      let templist = countries.filter( (item)=> {
        return item.Name.toLowerCase().includes(search.toLowerCase())
        // return item.CountryId == search
      } )
      let templist2 = templist.sort( (a,b) => {
        return a.Name[0] > b.Name[0] ? 1 : -1 
      })
      setCountries(templist2)
    }

  return (
    <View style={{flex: 1,backgroundColor:'white'}}>
        <TextInput placeholder='Enter your Text here' onChangeText={(e) => {handleSearch(e)}}/>
        {loading ? <ActivityIndicator /> : (
        <FlatList data={countries} renderItem={displayCountry}/> 
        )
        }
    </View>
  )
}

export default Countries;