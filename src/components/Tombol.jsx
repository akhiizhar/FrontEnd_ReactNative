// import {View, Button} from 'react-native';
import React from 'react';
import {View, Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';

export function Tombol() {
  return (
    <View>
      <Button
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

export function TextInputEmail() {
  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState('');
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Full Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Contoh: johndee@gmail.com"
      />
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
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
