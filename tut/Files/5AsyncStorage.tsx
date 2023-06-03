import React, {useState} from 'react'
import {View,Text,TextInput,TouchableOpacity,Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = () => {

    const [data,setData] = useState('');
    const [arr,setArr]= useState([]);
    const [arr2,set2Arr]= useState([]);

    async function getitem(){
        try{
            const res = await AsyncStorage.getItem('ItemsList')
            const res2 = JSON.parse(res)
            console.log(res,"I am res")
            console.log(res2,"I am res2")

            set2Arr(res2)

        }catch(err){
            console.log(err)
        }
    }
    async function add(){
        try {
            arr.push(data)
            setData('')
            const out = JSON.stringify(arr)
            console.log(arr)
            await AsyncStorage.setItem('ItemsList',out)  
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
    <View style={{flex: 1, backgroundColor: 'black',alignItems: 'center',justifyContent:'center'}}>
        <Text>Enter Data</Text>
        <TextInput placeholder='Enter your Data here' value={data} onChangeText={ (e) => {setData(e)}}/>
        
        <TouchableOpacity onPress={()=>{add()}} style={{marginTop: 100}}>
            <Text style={{fontSize: 50}}> Submit </Text>
        </TouchableOpacity>
        
        {/* <Text style={{marginTop: 50}}> your Data is {arr}</Text> */}
        <TouchableOpacity style={{marginTop: 50}} onPress={()=>{getitem()}}>
            <Text> Get Data </Text>
        </TouchableOpacity>
        <View>
            <Text>Array Data</Text>
            {arr2?.map( (list,index) => {
                return(
                    <Text key={index}>{list}</Text>
                )
            })}
        </View>
    </View>
  )
}

export default HomeScreen