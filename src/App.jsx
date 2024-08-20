import React from 'react';
import {View, Text} from 'react-native';
import {Tombol, TextInputEmail} from './components/Tombol';

export default function App() {
  return (
    <View>
      <Text style={(textAlign = 'center')}>Sign Up</Text>
      <TextInputEmail />
      <Tombol />
    </View>
  );
}
