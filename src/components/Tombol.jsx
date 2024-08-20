// import {View, Button} from 'react-native';
import React from 'react';
import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';

export function Tombol() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
        }}>
        <Button
          title="Sign In"
          color="#3D7B3F"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
}

export function TextInputEmail() {
  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState('');
  return (
    <SafeAreaView>
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Contoh: johndee@gmail.com"
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="6+ Karakter"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
  },
});
