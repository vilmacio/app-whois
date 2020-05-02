import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Search from './screens/Search'
import History from './screens/History'
import Favorites from './screens/Favorites'

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Search">
        <Drawer.Screen name="Search" component={Search} />
        <Drawer.Screen name="History" component={History} />
        <Drawer.Screen name="Favorites" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}