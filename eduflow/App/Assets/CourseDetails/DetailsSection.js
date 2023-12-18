import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import OptionItem from './OptionItem'
import Colors from '../../Shared/Colors'

export default function DetailsSection({course}) {
  return (
    <View style={{padding:10, borderRadius:15, backgroundColor:Colors.white}}>
      <Image source={{uri:course?.banner?.url}} style={{width:Dimensions.get('screen').width*0.85, height:190, borderRadius:15}}/>
      <Text style={{fontSize:22, fontWeight:'bold', marginTop:10}}>{course.name}</Text>

      <View>
        <View style={styles.rowStyle}>
            <OptionItem icon={'book'} value={course.chapters?.length==1?course.chapters?.length+' Chapter':course.chapters?.length+' Chapters'} />
            <OptionItem icon={'md-time-outline'} value={course.duration+' hr'} />
        </View>
        <View style={styles.rowStyle}>
            <OptionItem icon={'person'} value={course?.author} />
            <OptionItem icon={'bulb-outline'} value={course.level} />
        </View>
        <View>
            <Text style={{fontSize:20, fontWeight:'bold', marginTop:10, marginBottom:5}}>Description</Text>
            <Text style={{color:Colors.gray}}>{course.description?.markdown}</Text>
        </View>
        <View style={{display:'flex', flexDirection:'row', gap:10}}>
            <TouchableOpacity style={{padding:15, backgroundColor:Colors.primary, borderRadius:15}}>
                <Text style={{textAlign:'center', fontWeight:'bold'}}>Enroll for Free</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:15, backgroundColor:Colors.secondary, borderRadius:15}}>
                <Text style={{textAlign:'center', fontWeight:'bold'}}>Membership $2.99/Mon</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    rowStyle: {
        display:'flex', 
        flexDirection:'row', 
        justifyContent: 'space-between',
        marginBottom:10
    }
})