import {View, Text, Image, Button} from 'react-native';
import React from 'react';
import {Tombol} from '../components/Tombol';

export default function Home({navigation}) {
  return (
    <View>
      <Image source={require('../assets/images/logoToyota.png')} />
      <Text style={{textAlign: 'center'}}>Home</Text>
      {/* <TextInputEmail /> */}
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
