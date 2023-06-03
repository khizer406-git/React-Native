import React, {useState} from "react";
import {View,Text,StatusBar,StyleSheet,Button,TextInput,ScrollView,FlatList,TouchableOpacity} from 'react-native';

export default function App(){
  
  const[data,setdata] = useState([
    {id:1,name:"khizer1"},
    {id:2,name:"khizer2"},
    {id:3,name:"khizer3"},
    {id:4,name:"khizer4"},
    {id:5,name:"khizer5"},
    {id:6,name:"khizer6"},
    {id:7,name:"khizer7"},
    {id:8,name:"khizer8"},
    {id:9,name:"khizer9"},
    {id:10,name:"khizer10"},
    {id:11,name:"khizer11"},
    {id:12,name:"khizer12"},
    {id:13,name:"khizer13"},
    {id:14,name:"khizer14"},
    {id:15,name:"khizer15"},
  ]
  );

  const handleclick = (oldid) => {
      setdata( (prevData) => {
        return prevData.filter((tempdata) => {
          if(tempdata.id !== oldid)
          return tempdata
        })
      })
      
  }
  return(
    <View>
      <FlatList
        data={data}
        renderItem = {({item}) => {
          return (
            <TouchableOpacity onPress={ () => handleclick(item.id)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row'

  }
});