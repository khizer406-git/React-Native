import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MatIcons from 'react-native-vector-icons/MaterialIcons';

import CountriesList from './countries';
import Settings from './settings';
import Tab3 from './tab3';
import Tab4 from './tab4';
import Map from './Maps';
// import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Map"
        component={Map}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
