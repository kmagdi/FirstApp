import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStackNavigator } from "./MainStackNaavigator";
import {AboutStackNavigator} from "./AboutStackNavigator";


const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator  
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
     
        <Drawer.Screen name="Films" component={MainStackNavigator} />
        <Drawer.Screen name="About" component={AboutStackNavigator} />
    
    </Drawer.Navigator>
  );
};

