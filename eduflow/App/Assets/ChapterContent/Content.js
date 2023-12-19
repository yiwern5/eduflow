import { View, Text } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import Colors from '../../Shared/Colors';

export default function Content({content}) {
  const { width } = useWindowDimensions();
  const source = {
    html: content
  };
  return content&&(
    <View>
      <RenderHtml
      contentWidth={width}
      source={source}
      tagsStyles={tagStyles}
      />
    </View>
  )
}

const tagStyles = {
  code:{
    color:Colors.white,
    padding: 20,
    marginTop:20
  }
}