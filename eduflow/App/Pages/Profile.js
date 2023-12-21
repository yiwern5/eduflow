import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useAuth, useUser } from '@clerk/clerk-expo'
import Coin from './../Assets/Images/coin.png';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Shared/Colors';
import { UserPointsContext } from '../Assets/Context/UserPointsContext';

export default function Profile() {
  const {isLoaded, isSignedIn, user}=useUser();
  const {IsLoaded, signOut}=useAuth();
  const {userPoints, setUserPoints}=useContext(UserPointsContext);
return isLoaded&&(
    <View>
      <View style={{height:300, backgroundColor:Colors.primary, paddingVertical:70, paddingHorizontal:30}}>
        <Text style={{fontWeight:'bold', fontSize:30}}>Profile</Text>
      </View>

      <View style={{alignItems:'center', marginTop:-150, marginBottom:280}}>
        <Image source={{uri:user?.imageUrl}}
          style={{width:180, height:180, borderRadius:99}} />
          <Text style={{fontSize:32, fontWeight:'bold', margin:10, marginTop:20}}>{user.fullName}</Text>
          <Text style={{fontSize:20, fontWeight:'bold', margin:10}}>{user.primaryEmailAddress.emailAddress}</Text>

      </View>

      <View style={{alignSelf:'center', position:'absolute', bottom: 20}}>
          <TouchableOpacity style={{padding:20, backgroundColor:Colors.primary, borderRadius:15, width:180}}
          onPress={()=>signOut()}>
            <Text style={{fontWeight:'bold', fontSize:18, textAlign:'center'}}>Sign Out</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}