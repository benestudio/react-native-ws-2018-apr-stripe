import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import CardInput from './components/CardInput';

export default class App extends React.Component {
  handlePayPressed = card => {
    Alert.alert(card.number)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome at Bene Studio's</Text>
        <Text>Payment in React Native Workshop!</Text>
        <CardInput
          onCardChanged={this.handlePayPressed}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
});
