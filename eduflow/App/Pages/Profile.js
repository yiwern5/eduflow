import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useAuth, useUser } from '@clerk/clerk-expo'
import Coin from './../Assets/Images/coin.png';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Shared/Colors';
import { UserPointsContext } from '../Assets/Context/UserPointsContext';
import { FontAwesome } from '@expo/vector-icons';

export default function Profile() {
  const {isLoaded, isSignedIn, user}=useUser();
  const {IsLoaded, signOut}=useAuth();
  const {userPoints, setUserPoints}=useContext(UserPointsContext);
  const [Quote, setQuote] = useState('Loading...');
  const [Author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    randomQuote();
  }, []);

  const randomQuote = () => {
    setIsLoading(true);
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
      // console.log(result.content);
      setQuote(result.content);
      setAuthor(result.author);
      setIsLoading(false);
    })
  }

return isLoaded&&(
    <ScrollView>
      <View>
      <View style={{height:300, backgroundColor:Colors.primary, paddingVertical:70, paddingHorizontal:30}}>
        <Text style={{fontWeight:'bold', fontSize:30}}>Profile</Text>
      </View>

      <View style={{alignItems:'center', marginTop:-150}}>
        <Image source={{uri:user?.imageUrl}}
          style={{width:180, height:180, borderRadius:99}} />
          <Text style={{fontSize:26, fontWeight:'bold', margin:5, marginTop:20}}>{user.fullName}</Text>
          <Text style={{fontSize:18, fontWeight:'bold', margin:10}}>{user.primaryEmailAddress.emailAddress}</Text>
      </View>

      <View style={{padding:24, marginBottom:80}}>
      <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '600',
            color: '#333',
            marginBottom: 20
          }}>
          Quote of the Day
        </Text>
        <FontAwesome name="quote-left" size={22} color="black" />
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            lineHeight: 26,
            letterSpacing: 1.1,
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: 10,
            paddingHorizontal: 30,
          }}>
          {Quote}
        </Text>
        <FontAwesome name="quote-right" size={24} color="black" style={{
            textAlign: 'right',
            marginTop: -20,
            marginBottom: 20,
          }}/>
        <Text
          style={{
            textAlign: 'right',
            fontWeight: '300',
            fontStyle: 'italic',
            fontSize: 16,
            color: '#000',
          }}>
          —— {Author}
        </Text>
      </View>
      </View>

      <View style={{alignSelf:'center', position:'absolute', bottom: 5}}>
        <TouchableOpacity style={{padding:20, backgroundColor:Colors.primary, borderRadius:15, width:180}}
        onPress={()=>signOut()}>
          <Text style={{fontWeight:'bold', fontSize:18, textAlign:'center'}}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  )
}