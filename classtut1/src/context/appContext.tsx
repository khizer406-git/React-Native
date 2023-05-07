import {createContext,useState,useContext} from 'react'

const AppContext = createContext <any | null>(null);
export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({children}:any)=>{
    const [user,setUser] = useState({firstname: "khizer",lastname: "Jilani"});
    const [counter,setCounter] = useState(0)
    return (
        <AppContext.Provider value={[user,counter,setCounter]}>
            {children}
        </AppContext.Provider>
    )
};

export default AppContextProvider;
