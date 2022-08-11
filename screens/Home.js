import React, { useState,useEffect } from 'react'
import { View,Text,FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native'
import { globalStyles } from '../styles/global'
import { ImageBackground } from "react-native";
import {data} from '../data'
import {Card} from '../shared/Card'
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import {MyForm} from './MyForm'

const image = { uri: "https://reactjs.org/logo-og.png" };


export const Home=({navigation})=> {
    const [films,setFilms]=useState([])
    const [modalVisible,setModalVisible] = useState(false)
    const addFilm=(film)=>{
        film.id=Math.random().toString()
        setFilms((currentFilms)=>{
            return [film,...currentFilms]
        })
        setModalVisible(false)
    }
    useEffect(()=>{
        setFilms(data)
    },[])
    return (
        <ImageBackground source={image} resizeMode="cover" style={{...globalStyles.imgContainer,...globalStyles.imgBack}}>
            <View style={globalStyles.container}>

                <Modal visible={modalVisible} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={globalStyles.modalContent}>
                            <FontAwesome name="close" size={24} color="black" style={globalStyles.iconStyle}
                                onPress={()=>setModalVisible(false)}/>
                            <MyForm addFilm={addFilm}/>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <Entypo name="add-to-list" size={24} color="white" style={globalStyles.iconStyle}
                    onPress={()=>setModalVisible(true)}/>

                <FlatList
                    data={films}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={()=>navigation.navigate('Review',item)}>
                            <Card>
                                <Text style={globalStyles.titleText}>{item.Title}...</Text>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ImageBackground>
    )
}