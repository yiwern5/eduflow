import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function CourseItem({item}) {
  return (
    <View style={{padding:10, backgroundColor:'#fff', marginRight:15, borderRadius:15}}>
        <Image source={{uri:item?.banner.url}} style={{width:210, height:120}}/>
        <View style={{}}>
            <Text style={{fontSize:17, fontWeight:'bold', marginTop:10}}>{item.name}</Text>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:5, marginTop:10}}>
                <Ionicons name="book-outline" size={18} color="black" />
                <Text>{item?.chapters?.length==1?item?.chapters?.length+' Chapter':item?.chapters?.length+' Chapters'}</Text>
            </View>
            <View>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:5, marginTop:10}}>
                <Ionicons name="md-time-outline" size={18} color="black" />
                <Text>{item?.duration} hr</Text>
                </View>
            </View>
            </View>
            <Text style={{marginTop:5, fontWeight:'bold'}}>{item.price==0?'Free':'$'+item.price}</Text>
        </View>
    </View>
  )
}