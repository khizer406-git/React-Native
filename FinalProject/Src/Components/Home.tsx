import { createDrawerNavigator } from '@react-navigation/drawer';
import {View,Text} from 'react-native'
import Profile from '../Screens/Profile';
import Order from '../Screens/Order';
import Terms from '../Screens/Terms';
import Help from '../Screens/Help';
const Drawer = createDrawerNavigator();

function Home() {
  return (
    // <Drawer.Navigator>
    //   <Drawer.Screen name="Profile" component={Profile} />
    //   <Drawer.Screen name="Orders" component={Order} />
    //   <Drawer.Screen name="Terms & Conditions" component={Terms} />
    //   <Drawer.Screen name="Help Center" component={Help} />
    // </Drawer.Navigator>
    <View><Text>Hello</Text></View>
  );
}

export default Home;