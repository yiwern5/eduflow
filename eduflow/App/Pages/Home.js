import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Header from '../Assets/Home/Header'
import Colors from '../Shared/Colors'
import CourseList from '../Assets/Home/CourseList'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { UserPointsContext } from '../Assets/Context/UserPointsContext'
import { createNewUser, getUserDetail } from '../Services'

export default function Home() {
  const {isLoaded, signOut}=useAuth();
  const {user}=useUser();
  const {userPoints, setUserPoints}=useContext(UserPointsContext);
  useEffect(()=>{
    user&&createUser();
  },[user])
  const createUser=()=>{
    if(user){
      createNewUser(user.fullName, user.primaryEmailAddress.emailAddress, user.imageUrl).then(
        resp=>{
          if(resp)
          getUser()
        }
      )
    }
  }
  const getUser=()=>{
    getUserDetail(user.primaryEmailAddress.emailAddress).then(resp=>{
      setUserPoints(resp.userDetail?.coin)
    })
  }

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