import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {useState} from 'react';

export default function SplashScreen({navigation}) {
  const [timePassed, setTimePassed] = useState(false);
  setTimeout(function () {
    setTimePassed(true);
  }, 6000);

  if (!timePassed) {
    return (
      <View>
        <ImageBackground
          style={styles.image}
          source={require('../assets/images/fotoRegister.png')}>
          <Text style={styles.text}>{`TMMIN\nCAR RENTAL`}</Text>
        </ImageBackground>
      </View>
    );
  }
  navigation.navigate('Login');
  return null;
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#ffffff',
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 40,
    bottom: 0,
    right: 10,
    textAlign: 'right',
  },
});
