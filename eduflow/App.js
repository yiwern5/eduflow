import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import TabNavigation from './App/Navigations/TabNavigation';

export default function App() {
  return (
    <ClerkProvider publishableKey={'pk_test_YWxpdmUtYWxwYWNhLTcwLmNsZXJrLmFjY291bnRzLmRldiQ'}>
      <View>
        <SignedIn>
          <TabNavigation />
        </SignedIn>
        <SignedOut>
        <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
