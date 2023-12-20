import { View, Text, TouchableOpacity, ToastAndroid, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Shared/Colors';
import { useNavigation } from '@react-navigation/native';
import { CompleteChapterContext } from '../Context/CompleteChapterContext';

export default function ChapterSection({chapterList, userEnrolledCourse}) {

    const {IsChapComplete, setIsChapComplete}=useContext(CompleteChapterContext);
    const navigation=useNavigation();
    const OnChapterPress=(content, result, id)=>{
        if (userEnrolledCourse?.length==0) {
            ToastAndroid.show('Please enroll in this course first', ToastAndroid.LONG)
        } else {
            setIsChapComplete(false);
            navigation.navigate('ChapterContent', {
                content:content,
                result:result,
                chapterid:id,
                courseid: userEnrolledCourse[0].id
            });
        }
    }
    const checkCompleted=(chapterId)=>{
        if(userEnrolledCourse[0]?.completedChapter?.length<=0) {
            return false;
        }
        const resp=userEnrolledCourse[0]?.completedChapter.find(item=>item.chapterId==chapterId);
        return resp;
    }

    return chapterList&&(
        <View style={{padding:10, backgroundColor:Colors.white, marginTop:20, borderRadius:15, marginBottom:40}}>
            <Text style={{fontSize:22, fontWeight:'bold'}}>Chapters</Text>
            {chapterList.map((item, index)=>(
                <TouchableOpacity style={[checkCompleted(item.id)?styles.completeChap:styles.incompleteChap]}
                onPress={()=>OnChapterPress(item.content, item.result, item.id)}>
                    <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10}}>
                        <Text style={{fontSize:26, fontWeight:'bold'}}>{index+1}</Text>
                        <Text style={{fontSize:20, color:checkCompleted(item.id)?Colors.green:Colors.gray}}>{item.title}</Text>
                    </View>
                    <View>
                        {userEnrolledCourse?.length==0 ?
                        <AntDesign name="lock" size={25} color={Colors.gray}/>
                        :<AntDesign name="playcircleo" size={25} color={checkCompleted(item.id)?Colors.green:Colors.gray}/>}
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    incompleteChap: {
        display:'flex', 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between', 
        padding:15, 
        borderWidth:1, 
        borderRadius:10, 
        marginTop:10, 
        borderColor:Colors.gray
    },
    completeChap: {
        display:'flex', 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between', 
        padding:15, 
        borderWidth:1, 
        borderRadius:10, 
        marginTop:10, 
        borderColor:Colors.green,
        backgroundColor:Colors.lightGreen
    }
})