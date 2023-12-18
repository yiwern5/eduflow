import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import MyCourse from '../Pages/MyCourse';
import LeaderBoard from '../Pages/LeaderBoard';
import Profile from '../Pages/Profile';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={HomeNavigation} options={{
            tabBarIcon:({color, size})=>(
                <Ionicons name="home" size={size} color={color} />
            )
            }}/>
            <Tab.Screen name="My Course" component={MyCourse} options={{
            tabBarIcon:({color, size})=>(
                <Ionicons name="book" size={size} color={color} />
            )
            }}/>
            <Tab.Screen name="Leaderboard" component={LeaderBoard} options={{
            tabBarIcon:({color, size})=>(
                <MaterialIcons name="leaderboard" size={size} color={color} />
            )
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon:({color, size})=>(
                <FontAwesome name="user" size={size} color={color} />
            )
            }}/>
        </Tab.Navigator>
      );
}