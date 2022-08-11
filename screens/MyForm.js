import React from 'react'
import {Formik} from 'formik'
import {View,Button,TextInput,Text} from 'react-native'
import {globalStyles} from '../styles/global'
import * as yup from 'yup'

const FilmSchema=yup.object({
    Title:yup.string().required().min(4),
    Year:yup.string().required().test('is-num','year must be number >1900',(val)=>{
        return parseInt(val)>1900
    }),
    Genre:yup.string().required().min(4)
})

export const MyForm=({addFilm})=> {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{Title:'',Year:'',Genre:''}}
        validationSchema={FilmSchema}
        onSubmit={(values,actions)=>{
            actions.resetForm()
            addFilm(values)
           console.log(values)
        }}>
         {(props)=>(
             <View>
                <TextInput
                    style={globalStyles.input}
                    placeholder='film title'
                    onChangeText={props.handleChange('Title')}//this fc.update the title property
                    value={props.values.Title}
                    onBlur={props.handleBlur('Title')}
                />
                <Text style={globalStyles.errorText}>{props.touched.Title && props.errors.Title}</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholder='year'
                    keyboardType='numeric'
                    onChangeText={props.handleChange('Year')}//this fc.update the title property
                    value={props.values.Year}
                    onBlur={props.handleBlur('Year')}
                />
                <Text style={globalStyles.errorText}>{props.touched.Year && props.errors.Year}</Text>
                <TextInput
                    multiline
                    style={globalStyles.input}
                    placeholder='genre'
                    onChangeText={props.handleChange('Genre')}//this fc.update the title property
                    value={props.values.enre}
                    onBlur={props.handleBlur('Genre')}
                />
                <Text style={globalStyles.errorText}>{props.touched.Genre && props.errors.Genre}</Text>
                <Button
                    title='submit'
                    color='maroon'
                    onPress={props.handleSubmit}
                />
             </View>
        )}
      </Formik>
    </View>
  )
}
