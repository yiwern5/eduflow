import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import Colors from '../Shared/Colors'
import { AntDesign } from '@expo/vector-icons';
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
 
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    useWarmUpBrowser();
 
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    
    const onPress = React.useCallback(async () => {
        try {
        const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
    
        if (createdSessionId) {
            setActive({ session: createdSessionId });
        } else {
            // Use signIn or signUp for next steps such as MFA
        }
        } catch (err) {
        console.error("OAuth error", err);
        }
    }, []);
  return (
    <View>
      <Image source={require('./../Assets/Images/login.png')} style={{alignSelf:'center'}}/>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Eduflow</Text>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <AntDesign name="google" size={24} color="black" style={{marginRight:10}}/>
              <Text style={{fontWeight:'bold'}}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
    marginTop:-10,
    backgroundColor:'#fff',
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },
  welcome:{
    fontSize:35, 
    textAlign:'center', 
    fontWeight:'bold'
  },
  login:{
    textAlign:'center',
    marginTop:40,
    fontSize:20
  },
  button:{
    backgroundColor:Colors.primary,
    padding:10,
    margin:30,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 20
  }
})