import React from 'react'
import { FlatList, View } from 'react-native'
import {connect} from 'react-redux'
import ListItem from './ListItem'
const LibraryList=(props)=>{
    function renderItem({item})
    {
        return <ListItem library={item}/>
    }
    return <FlatList
        data={props.libraries}
        renderItem={renderItem}
        keyExtractor={(library)=>library.id}
    />
}
const mapStateToProps =state =>{
   return {libraries:state.libraries}
}
export default connect(mapStateToProps)(LibraryList)