import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCourseList } from '../../Services'
import SubHeading from './SubHeading';
import CourseItem from './CourseItem';
import { useNavigation } from '@react-navigation/native';

export default function CourseList({level}) {

    const [courseList, setCourseList]=useState([]);
    const navigation = useNavigation();
    useEffect(()=>{
        getCourses();
    },[])

    const getCourses=()=>{
        getCourseList(level).then(resp=>{
            setCourseList(resp?.courses)
        })
    }
  return (
    <View>
      <View style={{marginBottom:5}}>
        <SubHeading text={level+' Courses'}/>
      </View>
      <FlatList 
        data={courseList}
        key={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>navigation.navigate('CourseDetails',{
            course:item
          })}>
            <CourseItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}