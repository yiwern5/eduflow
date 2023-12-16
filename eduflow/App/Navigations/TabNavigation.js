import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import MyCourse from '../Pages/MyCourse';
import LeaderBoard from '../Pages/LeaderBoard';
import Profile from '../Pages/Profile';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false
            }}>
                <Tab.Screen name="home" component={Home} options={{
                tabBarIcon:({color, size})=>(
                    <Ionicons name="home" size={size} color={color} />
                )
                }}/>
                <Tab.Screen name="my-course" component={MyCourse} options={{
                tabBarIcon:({color, size})=>(
                    <Ionicons name="book" size={size} color={color} />
                )
                }}/>
                <Tab.Screen name="leader-board" component={LeaderBoard} options={{
                tabBarIcon:({color, size})=>(
                    <MaterialIcons name="leaderboard" size={size} color={color} />
                )
                }}/>
                <Tab.Screen name="profile" component={Profile} options={{
                tabBarIcon:({color, size})=>(
                    <FontAwesome name="user" size={size} color={color} />
                )
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
      );
}