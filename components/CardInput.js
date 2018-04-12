import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default class CardInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholderTextColor="rgba(0,0,0,.7)"
          placeholder="Card number"
          style={[styles.input, styles.number]}
        />
        <TextInput
          placeholderTextColor="rgba(0,0,0,.7)"
          placeholder="MM"
          style={[styles.input, styles.mm]}
        />
        <TextInput
          placeholderTextColor="rgba(0,0,0,.7)"
          placeholder="YY"
          style={[styles.input, styles.yy]}
        />
        <TextInput
          placeholderTextColor="rgba(0,0,0,.7)"
          placeholder="CVC"
          style={[styles.input, styles.cvc]}          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
  },
  number: {
    flex: 1,    
  },
  mm: {
    width: 50,
  },
  yy: {
    width: 50,    
  },
  cvc: {
    width: 70,    
  },
});
