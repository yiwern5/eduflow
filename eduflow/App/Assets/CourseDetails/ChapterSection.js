import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Shared/Colors';

export default function ChapterSection({chapterList}) {
  return chapterList&&(
    <View style={{padding:10, backgroundColor:Colors.white, marginTop:20, borderRadius:15}}>
        <Text style={{fontSize:22, fontWeight:'bold'}}>Chapters</Text>
        {chapterList.map((item, index)=>(
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:15, borderWidth:1, borderRadius:10, marginTop:10, borderColor:Colors.gray}}>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10}}>
                    <Text style={{fontSize:26, fontWeight:'bold'}}>{index+1}</Text>
                    <Text style={{fontSize:20, color:Colors.gray}}>{item.title}</Text>
                </View>
                <View>
                    <AntDesign name="lock" size={25} color={Colors.gray}/>
                </View>
            </View>
        ))}
    </View>
  )
}