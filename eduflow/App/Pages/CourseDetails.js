import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailsSection from '../Assets/CourseDetails/DetailsSection';
import ChapterSection from '../Assets/CourseDetails/ChapterSection';
import { useEffect } from 'react';

export default function CourseDetails() {
  const navigation=useNavigation();
  const params=useRoute().params;
  useEffect(()=>{
    console.log(params.course)
  }, [params.course])
  return params.course&&(
    <ScrollView style={{padding:20, marginTop:20}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back" size={35} color="black" />
      </TouchableOpacity>
      <DetailsSection course={params.course}/>
      <ChapterSection chapterList={params.course.chapters}/>
    </ScrollView>
  )
}