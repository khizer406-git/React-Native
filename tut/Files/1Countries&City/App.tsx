import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Countries from './src/countries';
import Cities from './src/City';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CountryList" component={Countries} options={{ headerStyle: { backgroundColor: "lightblue" }, headerTitleAlign: "center" }} />
        <Stack.Screen name="CityList" component={Cities} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;






