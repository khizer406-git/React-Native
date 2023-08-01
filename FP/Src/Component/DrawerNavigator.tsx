import react from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {View,Text,Button} from "react-native"
import Order from "../Screens/Home";
import Profile from "../Screens/Profile";
import MyComponent from "../../notifi";
import AddToCartPage from "../Screens/AddtoCart";
import Login from "../Screens/login";
import Register from "../Screens/Register";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
     <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Drawer.Screen name="Home" component={Order} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="AddToCartPage" component={AddToCartPage}/>
      <Drawer.Screen name="Register" component={Register}/>
     </Drawer.Navigator> 
  );
}

export default DrawerNavigator;