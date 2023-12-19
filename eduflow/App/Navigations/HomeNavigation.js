import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Pages/Home';
import CourseDetails from '../Pages/CourseDetails';
import ChapterContent from '../Pages/ChapterContent';

const Stack=createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='CourseDetails' component={CourseDetails} />
        <Stack.Screen name='ChapterContent' component={ChapterContent} />
    </Stack.Navigator>
  )
}