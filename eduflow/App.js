import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import TabNavigation from './App/Navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { CompleteChapterContext } from './App/Assets/Context/CompleteChapterContext';
import { useState } from 'react';
import { UserPointsContext } from './App/Assets/Context/UserPointsContext';

export default function App() {
  const [IsChapComplete, setIsChapComplete]=useState(false);
  const [userPoints, setUserPoints]=useState();
  return (
    <ClerkProvider publishableKey={'pk_test_YWxpdmUtYWxwYWNhLTcwLmNsZXJrLmFjY291bnRzLmRldiQ'}>
      <UserPointsContext.Provider value={{userPoints, setUserPoints}}>
      <CompleteChapterContext.Provider value={{IsChapComplete, setIsChapComplete}}>
      <SignedIn>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </SignedIn>
      </CompleteChapterContext.Provider>
      </UserPointsContext.Provider>
      <SignedOut>
      <Login />
      </SignedOut>
    </ClerkProvider>
  );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 20
    },
  });
