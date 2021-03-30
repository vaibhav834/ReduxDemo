import React , {useEffect} from 'react'
import {View,Text, StyleSheet,Platform,UIManager, TouchableOpacity,LayoutAnimation} from 'react-native'
import {CardView} from './common/CardView'
import {connect} from 'react-redux'
import * as actions from '../actions'
if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
const ListItem = ({library,selectLibrary,expanded})=>{
const {id,title,description} =library
 const renderDescription=() =>{
    if(expanded)
    return (
        <CardView>
            <Text>{description}</Text>
        </CardView>
    )
 }

return <TouchableOpacity
            onPress={()=>{
                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                selectLibrary(id)         
            }}
        >
            <View>
                <CardView> 
                    <Text style={styles.title}>{title}</Text> 
                </CardView>
                {renderDescription()}
            </View>
        </TouchableOpacity>
}
const mapStateToProps = (state,ownProps) =>{
    const expanded =state.selectedLibraryId===ownProps.library.id
    return {expanded}
}
const styles =StyleSheet.create({
  title:{
      fontSize:18
  }  
})
export default connect(mapStateToProps,actions)(ListItem)