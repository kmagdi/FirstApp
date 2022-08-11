import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from '../screens/Home'
import {Review} from '../screens/Review'

const Stack=createNativeStackNavigator()

export const MainStackNavigator=()=>{
return(
  <Stack.Navigator 
    initialRouteName="Home"
    >
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Stack.Screen name='Review' component={Review} 
        options={{
        title:'Film details' }}
      />
  </Stack.Navigator>
)}