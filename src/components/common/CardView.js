import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
const CardView =(props)=>{
    return <View style={styles.container}>
        {props.children}
    </View>
}
const styles=StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:1,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor:'#000',
        elevation:1,
        marginHorizontal:5,
        marginTop:5,
        padding:8

    }
 
})
export {CardView}