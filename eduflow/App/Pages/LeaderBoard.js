import { View, Text, FlatList, Image, ScrollView } from 'react-native'
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

      <View style={{marginTop:-170, marginBottom:30}}>
        <FlatList 
        data={userList}
        renderItem={({item, index})=>(
          <View style={{padding:20, backgroundColor:Colors.white, margin:10, marginLeft:15, marginRight:15, borderRadius:15}}>
            <View style={{display:'flex', flexDirection:'row', gap:10, alignItems:'center'}}>
              <Text style={{fontWeight:'bold', fontSize:22, color:Colors.gray}}>{index+1}</Text>
              <Image source={{uri:item.pfp}} style={{width:60, height:60, borderRadius:99}}/>
              <View>
                <Text style={{fontWeight:'bold', fontSize:20}}>{item.userName}</Text>
                <Text style={{fontWeight:'bold', fontSize:16, color:Colors.gray}}>{item.coin} Coins</Text>
              </View>
            </View> 
          </View>
        )}/>
      </View>
    </View>
  )
}