import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../Shared/Colors'
import { useNavigation } from '@react-navigation/native';
import { GetAllUserEnrolledProgressCourse } from '../Services';
import { useUser } from '@clerk/clerk-expo';
import CourseItem from '../Assets/Home/CourseItem';
import MyCourseProgress from '../Assets/MyCourse/MyCourseProgress';

export default function MyCourse() {
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
    <View style={{marginBottom:290}}>
      <View style={{height:300, backgroundColor:Colors.primary, paddingVertical:70, paddingHorizontal:30}}>
        <Text style={{fontWeight:'bold', fontSize:30}}>My Course</Text>
      </View>

      {progressCourseList?.length==0
      ? <View style={{paddingTop:20, paddingBottom:10, paddingHorizontal:20}}>
          <Text style={{fontSize:26, textAlign:'center'}}>You are not enrolled in any courses yet...</Text>
          <Text style={{fontSize:30, textAlign:'center', paddingTop:100}}>Enroll now!</Text>
        </View>
      : <FlatList style={{marginTop:-150, margin:20}}
        data={progressCourseList}
          showsVerticalScrollIndicator={false}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate('CourseDetails',{
              course:item.course
            })}>
              <MyCourseProgress item={item.course} completedChapter={item?.completedChapter?.length}/>
            </TouchableOpacity>
          )}
        />
      }
    </View>
  )
}