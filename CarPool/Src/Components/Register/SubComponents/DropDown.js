import {View,Text} from 'react-native'
import { useEffect,useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'

const DropDown = ({getCode}) =>{

    const [selected,setSelected] = useState("");
    const [data,setData] = useState("");
    const [code,setCode] = useState("");
    
      useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
          .then(response => response.json())
          .then(data => {
            const countriesWithCodes = data.map(country => ({
              key: Math.random(),
              value: country.alpha2Code + " +" + country.callingCodes[0] 
            }));

            const code = data.map(country => ({
              key: Math.random(),
              value: "+" + country.callingCodes[0] 
            }));
            
            // console.log(countriesWithCodes);
            setCode(code);
            setData(countriesWithCodes)
          })
          .catch(error => {
            console.error("Error fetching data:", error);
        });
      },[])
      
      useEffect(()=>{
        getCode(code[169]);
        // console.log(code[169])
      },[code])

    return (
      <View style={{width:100}}>
         <SelectList 
            label="Code"
            setSelected={(val) => setSelected(val)} 
            data={data} 
            save="value"
            placeholder='Code'
            defaultOption={data[169]}
            boxStyles={{borderRadius:100}}
        />
        
        </View>
    );
}

export default DropDown;