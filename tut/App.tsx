import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Countries from './src/countries';
// import Cities from './src/City';
// import HomeTabs from './src/MainPage'
import AppContextProvider from './src/AppContext';
import Contexttab from './Contexttab';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="MainPage" component={Contexttab} />
          {/* <Stack.Screen name="MainPage" component={HomeTabs} />
          <Stack.Screen name="CountryList" component={Countries} options={{ headerStyle: { backgroundColor: "lightblue" }, headerTitleAlign: "center" }} />
          <Stack.Screen name="CityList" component={Cities} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  )
}

export default App;






