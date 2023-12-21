import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import { GetAllUserEnrolledProgressCourse } from '../../Services'
import { useUser } from '@clerk/clerk-expo'
import CourseItem from './CourseItem'
import { useNavigation } from '@react-navigation/native'

export default function CourseProgress() {
    const {user}=useUser();
    const [progressCourseList, setProgressCourseList]=useState();
    const navigation = useNavigation();
    
    useEffect(()=>{
        user&&GetAllProgressCourseList();
    },[user])
    const GetAllProgressCourseList=()=>{
        GetAllUserEnrolledProgressCourse(user.primaryEmailAddress.emailAddress).then(resp=>{
            setProgressCourseList(resp.userEnrolledCourses);
        });
    }
  return (
    <View>
      <View style={{marginBottom:5}}>
          <SubHeading text={'In Progress'} />
      </View>

      {progressCourseList?.length==0
      ? <View style={{alignSelf:'center', paddingTop:20, paddingBottom:10}}>
          <Text style={{fontSize:15}}>You are not enrolled in any courses yet...</Text>
        </View>
      : <FlatList
        data={progressCourseList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate('CourseDetails',{
              course:item.course
            })}>
              <CourseItem item={item.course} completedChapter={item?.completedChapter?.length}/>
            </TouchableOpacity>
          )}
        />
      }

    </View>
  )
}