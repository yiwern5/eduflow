import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Assets/Home/Header'
import Colors from '../Shared/Colors'
import CourseList from '../Assets/Home/CourseList'

export default function Home() {
  return (
    <View>
      <View style={{backgroundColor:Colors.primary, height:300}}>
        <Header />
      </View>
      <View style={{padding: 20}}>
        <View style={{marginTop:-100, marginBottom:30}}>
          <CourseList level={'Basic'}/>
        </View>
        <View style={{marginBottom:30}}>
          <CourseList level={'Moderate'}/>
        </View>
        <CourseList level={'Advanced'}/>
      </View>
    </View>
  )
}