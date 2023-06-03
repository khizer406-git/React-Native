import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useContext, useEffect, useState} from 'react';

const AppContext = createContext<any | null>(null)
export const useAppContext = useContext(AppContext)

const AppContextProvider = ({children}: any) => {
    const [counter,setCounter] = useState(0);

    useEffect(() => {
        AsyncStorage.getItem('Context')
        .then((value)=>{
            if(value){
                setCounter(Number (value))
            }
        })
    
    },[])
    return (
        <AppContext.Provider value = {{counter}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
