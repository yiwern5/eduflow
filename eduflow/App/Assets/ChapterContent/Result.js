import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

export default function Result({result}) {
  return (
    <View>
      {result==null?null:
      <Image source={{uri:result}} style={{width:Dimensions.get('screen').width*0.8, height:190, borderRadius:15, alignSelf:'center', marginTop:15}}/>}
    </View>
  )
}