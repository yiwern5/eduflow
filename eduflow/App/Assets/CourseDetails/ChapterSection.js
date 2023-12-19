import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Shared/Colors';
import { useNavigation } from '@react-navigation/native';

export default function ChapterSection({chapterList, userEnrolledCourse}) {

    const navigation=useNavigation();
    const OnChapterPress=(content, result, id)=>{
        if (userEnrolledCourse?.length==0) {
            ToastAndroid.show('Please enroll in this course first', ToastAndroid.LONG)
        } else {
            navigation.navigate('ChapterContent', {
                content:content,
                result:result,
                chapterid:id,
                courseid:userEnrolledCourse[0].id
            });
        }
    }
    return chapterList&&(
        <View style={{padding:10, backgroundColor:Colors.white, marginTop:20, borderRadius:15}}>
            <Text style={{fontSize:22, fontWeight:'bold'}}>Chapters</Text>
            {chapterList.map((item, index)=>(
                <TouchableOpacity style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:15, borderWidth:1, borderRadius:10, marginTop:10, borderColor:Colors.gray}}
                onPress={()=>OnChapterPress(item.content, item.result, item.id)}>
                    <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10}}>
                        <Text style={{fontSize:26, fontWeight:'bold'}}>{index+1}</Text>
                        <Text style={{fontSize:20, color:Colors.gray}}>{item.title}</Text>
                    </View>
                    <View>
                        {userEnrolledCourse?.length==0 ?
                        <AntDesign name="lock" size={25} color={Colors.gray}/>
                        :<AntDesign name="playcircleo" size={25} color={Colors.green}/>}
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}