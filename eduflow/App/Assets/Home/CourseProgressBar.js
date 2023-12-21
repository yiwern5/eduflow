import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'

export default function CourseProgressBar({totalChapter, completedChapter}) {
  const number=Math.min(completedChapter, totalChapter);
  const width=(number/totalChapter)*100+'%'
  return (
    <View style={{width:'100%', height:7, backgroundColor:Colors.gray, borderRadius:99}}>
      <View style={{width:width, height:7, backgroundColor:Colors.primary, borderRadius:99}}></View>
    </View>
  )
}