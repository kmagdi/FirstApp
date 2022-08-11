import React from 'react'
import { View,Text,Button} from 'react-native'
import {globalStyles} from '../styles/global'

export const About=({navigation})=> {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About films</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}
