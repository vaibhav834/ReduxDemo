import React from 'react'
import { View } from 'react-native'
import {connect} from 'react-redux'
const LibraryList=(props)=>{
    console.log(props)
    return <View></View>
}
const mapStateToProps =state =>{
   return {libraries:state.libraries}
}
export default connect(mapStateToProps)(LibraryList)