import {StyleSheet} from 'react-native'

export const globalStyles=StyleSheet.create({
    container: {
        padding:10,
        flex:1,
        
        
    },
    titleText: {
        fontFamily:'Montserrat-Bold',
        fontSize:18,
        color:'#333',
        borderBottomColor:'lightgray',
        borderBottomWidth:1,
        borderStyle:'dashed',
        marginBottom:10
     
    },
    paragraph:{
        fontFamily:'Montserrat-Regular',
        marginVertical:8,
        lineHeight:20
    },
    imgContainer:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",

    },
  iconStyle:{
    alignSelf: "center",
  },
  input:{
    borderWidth:1,
    borderColor:'#ddd',
    padding:10,
    fontSize:18,
    borderRadius:6
  },
  modalContent:{
    flex:1
  },
  errorText:{
    color:'crimson',
    fontWeight:'bold',
    marginBottom:10,
    marginTop:6,
    textAlign: 'center'
  }
})