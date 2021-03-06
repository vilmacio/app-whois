import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './components/DrawerContent/index'

import Search from './screens/Search/Search'
import History from './screens/History/History'
import Favorites from './screens/Favorites/Favorites'

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Search" drawerContent={props => <DrawerContent {...props}/> }>
        <Drawer.Screen name="Search" component={Search} />
        <Drawer.Screen name="History" component={History} />
        <Drawer.Screen name="Favorites" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}