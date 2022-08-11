import React from 'react'
import { View,Text,Button,Image} from 'react-native'
import {globalStyles} from '../styles/global'
import {Card} from '../shared/Card'

export const Review=({route,navigation})=> {
  const {Title,Year,Genre,Awards,imdbRating,Images}=route.params
  return (
    <View style={globalStyles.container}>
     <View style={globalStyles.imgContainer}>
        <Image  source={{uri: Images[0]}}
            style={{width: 300, height: 300}} />
     </View>

      <Card>
         <Text style={globalStyles.titleText}>{Title}</Text>
        <Text style={globalStyles.paragraph}>{Year}</Text>
        <Text style={globalStyles.paragraph}>{Genre}</Text>
        <Text style={globalStyles.paragraph}>{Awards}</Text>
        <Text style={globalStyles.paragraph}>IMDB rating:{imdbRating}</Text>
      </Card>
     
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

