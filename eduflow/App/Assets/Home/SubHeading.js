import { View, Text } from 'react-native'
import React from 'react'

export default function SubHeading({text, color}) {
  return (
    <View>
      <Text style={{fontSize:24, fontWeight:'bold', color:color}}>{text}</Text>
    </View>
  )
}