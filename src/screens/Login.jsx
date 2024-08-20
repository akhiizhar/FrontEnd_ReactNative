import {View, Text, Image} from 'react-native';
import React from 'react';
import {Tombol, TextInputEmail} from '../components/Tombol';

export default function Login() {
  return (
    <View>
      <Image
        source={require('../assets/images/logoToyota.png')}
        style={{margin: 10}}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Welcome Back!
      </Text>
      <TextInputEmail />
      <Tombol />
      <Text style={{textAlign: 'center'}}>
        Don’t have an account?{' '}
        <Text style={{color: '#0D28A6'}}>Sign Up for free</Text>
      </Text>
    </View>
  );
}
