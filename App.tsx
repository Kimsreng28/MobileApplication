import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Login from 'App/Screens/LoginScreen/Login';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_d2FudGVkLXNoYXJrLTQ1LmNsZXJrLmFjY291bnRzLmRldiQ">
      <View className="flex-1">
        {/* Sign In Component */}
        <SignedIn>
          <Text>Your are sign in</Text>
        </SignedIn>

        {/* Sign Out Component */}
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}
