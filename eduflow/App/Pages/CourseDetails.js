import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailsSection from '../Assets/CourseDetails/DetailsSection';
import ChapterSection from '../Assets/CourseDetails/ChapterSection';
import { useEffect } from 'react';
import { enrollCourse, getUserEnrolledCourse} from '../Services';
import { useUser } from '@clerk/clerk-expo';
import { ToastAndroid } from 'react-native';

export default function CourseDetails() {
  const navigation=useNavigation();
  const params=useRoute().params;
  const [userEnrolledCourse, setUserEnrolledCourse]=useState([]);
  const {user}=useUser();
  useEffect(()=>{
    console.log(params.course);
    if(user&&params.course){
      GetUserEnrolledCourse();
    }
  }, [params.course])

  const UserEnrollCourse=()=>{
    enrollCourse(params.course.id, user.primaryEmailAddress.emailAddress).then(resp=>{
      // console.log(resp);
      if (resp) {
        ToastAndroid.show('Course enrolled successfully!', ToastAndroid.LONG);
        GetUserEnrolledCourse();
      }
    })
  }

  const GetUserEnrolledCourse=()=>{
    getUserEnrolledCourse(params.course.id, user.primaryEmailAddress.emailAddress).then(resp=>{
      // console.log('___'+resp.userEnrolledCourses);
      setUserEnrolledCourse(resp.userEnrolledCourses);
    })
  }
  return params.course&&(
    <ScrollView style={{padding:20, marginTop:20}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back" size={35} color="black" />
      </TouchableOpacity>
      <DetailsSection course={params.course} userEnrolledCourse={userEnrolledCourse} enrollCourse={()=>UserEnrollCourse()}/>
      <ChapterSection chapterList={params.course.chapters}/>
    </ScrollView>
  )
}