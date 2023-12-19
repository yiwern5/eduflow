import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Content from '../Assets/ChapterContent/Content'
import { useNavigation, useRoute } from '@react-navigation/native'
import Result from '../Assets/ChapterContent/Result';
import Colors from '../Shared/Colors';
import { Ionicons } from '@expo/vector-icons';
import { MarkChapterCompleted } from '../Services';

export default function ChapterContent() {
    const params=useRoute().params;
    const [isRun, setIsRun]=useState(false);
    const navigation=useNavigation();
    const markCompleted=()=>{
        MarkChapterCompleted(params.chapterid, params.courseid);
        navigation.goBack();
    }
  return params.content&&(
    <ScrollView style={{padding:20, marginTop:20}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back" size={35} color="black" />
        </TouchableOpacity>
        <Text style={{fontSize:26, fontWeight:'bold'}}>Input</Text>
        <View style={{backgroundColor:Colors.black, margin:15, borderRadius:20}}>
            <Content content={params.content?.html}/>
        </View>
        {params.result!=null?<TouchableOpacity style={{marginLeft:20, marginRight:20, padding:20, backgroundColor:Colors.primary, borderRadius:15, width:100}}
        onPress={()=>setIsRun(true)}>
            <Text style={{fontWeight:'bold', fontSize:15, textAlign:'center'}}>Run</Text>
        </TouchableOpacity>:null}
        {isRun?<>
            <Text style={{fontSize:26, fontWeight:'bold', marginTop:40}}>Output</Text>
            <Result result={params.result?.url}/>
        </>
        :null}
        <TouchableOpacity style={{marginLeft:20, marginRight:20, padding:20, backgroundColor:Colors.primary, borderRadius:15}}
        onPress={()=>markCompleted()}>
            <Text style={{fontWeight:'bold', fontSize:15, textAlign:'center'}}>Finish Chapter</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}