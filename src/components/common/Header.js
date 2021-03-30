import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
const Header =(props)=>{
    return <View style={styles.container}>
        <Text style={styles.title}>{props.headerText} </Text>
    </View>
}
const styles=StyleSheet.create({
    container:{
        alignItems:"center",
        height:60,
        justifyContent:"center",
        backgroundColor:"#F2F1F0",
        shadowColor:"#000",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.8,
        elevation:4
    },
    title:{
        fontWeight:"bold",
        fontSize:22,
    }
})
export {Header}