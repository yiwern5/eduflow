import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React, { useContext } from 'react'
import { useUser } from '@clerk/clerk-expo'
import Coin from './../Images/coin.png'
import { Ionicons } from '@expo/vector-icons';
import { UserPointsContext } from '../Context/UserPointsContext';

export default function Header() {
    const {isLoaded, isSignedIn, user}=useUser();
    const {userPoints, setUserPoints}=useContext(UserPointsContext);
  return isLoaded&&(
    <View>
        <View style={[{justifyContent:'space-between'}, styles.rowStyle]}>
            <View style={styles.rowStyle}>
                <Image source={{uri:user?.imageUrl}}
                style={{width:50, height:50, borderRadius:99}} />
                <View>
                    <Text>Welcome,</Text>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>{user?.fullName}</Text>
                </View>
            </View>
            <View style={styles.rowStyle}>
                <Image source={Coin} style={{width:30, height:30}}/>
                <Text style={{fontSize:18}}>{userPoints}</Text>
            </View>
        </View>
        <View style={styles.searchBar}>
            <TextInput placeholder='Search Courses' />
            <Ionicons name="search" size={36} color="black" style={{padding:8}}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    rowStyle: {
        padding:15, 
        marginTop:10, 
        display:'flex', 
        flexDirection:'row', 
        gap:10, 
        alignItems: 'center'
    },
    searchBar: {
        marginLeft:15,
        marginRight:15, 
        backgroundColor:'#fff', 
        paddingLeft:15, 
        paddingRight:5,
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'space-between', 
        borderRadius:99
    }
})