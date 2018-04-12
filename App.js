import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import CardInput from './components/CardInput';
import StripeClient from './StripeClient';

const testApiKey = 'sk_test_7Jifm8AU6se8vBgdWcb5un6t';

export default class App extends React.Component {
  constructor() {
    super();
    this.stripe = new StripeClient(testApiKey);
  }

  handlePayPressed = async card => {
    const token = await this.stripe.tokenizeCard({
      number: card.number,
      expMonth: card.mm,
      expYear: card.yy,
      cvc: card.cvc,
    });

    const cardTokenId = token.id;

    const customer = await this.stripe.createCustomer({
      email: 'foo-customer@example.com',
      source: cardTokenId,
    });
    
    const charge = await this.stripe.chargeCustomer({
      customer: customer.id,
      amount: 1000, // with two decimals
      currency: 'usd',
    });

    Alert.alert(charge.id);
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
