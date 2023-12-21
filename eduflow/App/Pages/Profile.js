import { View, Text } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View>
      <View style={{height:300, backgroundColor:Colors.primary, paddingVertical:70, paddingHorizontal:30}}>
        <Text style={{fontWeight:'bold', fontSize:30}}>Profile</Text>
      </View>
    </View>
  )
}