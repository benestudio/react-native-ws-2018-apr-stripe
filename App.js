import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardInput from './components/CardInput';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome at Bene Studio's</Text>
        <Text>Payment in React Native Workshop!</Text>
        <CardInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
