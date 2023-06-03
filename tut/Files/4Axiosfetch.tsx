import React , {useState ,useEffect } from 'react';
import {View,Text,Button, StyleSheet,Image,ScrollView} from 'react-native';
import { photosapi,obj } from './url';
import Axios from 'axios';

export default function App(){

    const[data,setData] = useState<any[]>([]);
    useEffect( () => {fetchApiData()}, [])  
    
    const fetchApiData = async  () => {
      try{
          const response = await Axios.get(photosapi)
          setData(response.data) 
      }
      catch(err){
          console.log(err,"error")
      }
    }

    const displayresult = (list) =>{
      return(
              <View style={styles.container}>
                <Text>{list.albumid}</Text>
                <Text>{list.thumbnailurl}</Text>
                <Text>{list.title}</Text>
              </View>
            )
    }

    return(
    <View style={styles.container}>
      <ScrollView style={styles.ScrollViewStyle}>
        {data?.map((list,index) => {
            return(
              <View  key={list.id}>
                <Text style={styles.cardTextTitle}>{list.albumId}</Text>
                <Text style={styles.cardTextTitle}>{list.thumbnailUrl}</Text>
                <Text style={styles.cardTextTitle}>{list.title}</Text>
                <Image style={styles.cardimage} source={{uri: "https://via.placeholder.com/150/92c952"}} />
              </View>
            )
        } )}
      </ScrollView>
    </View>
    )
}


const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
  },
  ScrollViewStyle : {
    width: '80%',
    height: 100,
    marginVertical: 20, 
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  cardimage: {
    width: '100%',
    height: 300,
    borderRadius: 20,
  },
  cardTextTitle : {
    marginVertical: 10,
    textAlign: 'center',
  }
});
