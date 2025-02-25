import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from 'App/hooks/warmUpBrowser';
import Color from 'App/Untils/Color';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

  return (
    <View style={{ alignItems: 'center' }}>
      <Image style={styles.image} source={require('../../../assets/images/login.png')} />
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 27, color: Color.color.white, textAlign: 'center' }}>
          Welcome to our app!
          <Text style={{ fontWeight: 'bold' }}> Let's Find Pro-cleaning and repair </Text>Service.
        </Text>
        <Text
          style={{ fontSize: 12, color: Color.color.white, textAlign: 'center', marginTop: 20 }}>
          {' '}
          Best App to finding services near you on your website or mobile app.
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: Color.color.primary,
              textAlign: 'center',
            }}>
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Color.color.black,
    borderRadius: 15,
  },
  subContainer: {
    width: '100%',
    backgroundColor: Color.color.primary,
    height: '70%',
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Color.color.white,
    borderRadius: 90,
    marginTop: 40,
  },
});
