import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GetAllUsers } from '../Services'
import Colors from '../Shared/Colors';

export default function LeaderBoard() {

  const [userList, setUserList]=useState([]);

  useEffect(()=>{
    GetAllUserDetails();
  },[])

  const GetAllUserDetails=()=>{
    GetAllUsers().then(resp=>{
      resp&&setUserList(resp?.userDetails);
    })
  }
  return (
    <View>
      <View style={{height:300, backgroundColor:Colors.primary, paddingVertical:70, paddingHorizontal:30}}>
        <Text style={{fontWeight:'bold', fontSize:30}}>Leaderboard</Text>
      </View>

      <View>
        <FlatList 
        data={userList}
        renderItem={({item, index})=>{
          <View style={{display:'flex', flexDirection:'row', gap:10, alignItems:'center'}}>
            <Image source={{uri:item.pfp}} style={{width:60, height:60}}/>
            <View>
              <Text style={{fontWeight:'bold', fontSize:20}}>{item.userName}</Text>
              <Text style={{fontWeight:'bold', fontSize:16, color:Colors.gray}}>{item.coin}</Text>
            </View>
           </View> 
        }}/>
      </View>
    </View>
  )
}