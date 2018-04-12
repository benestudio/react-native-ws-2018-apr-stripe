import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import CardInput from './components/CardInput';
import StripeClient from './StripeClient';
const STRIPE_TEST_KEY = 'sk_test_7Jifm8AU6se8vBgdWcb5un6t';
const stripe = new StripeClient(STRIPE_TEST_KEY);

const AppContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: stretch;
  justify-content: center;
  padding: 10px;
`;
const WelcomeTextHolder = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export default class App extends React.Component {
  onPayPressed = async ({number, mm, yy, cvc}) => {
    const token = await stripe.tokenizeCard({ number, expMonth: mm, expYear: yy, cvc });
    const tokenId = token.id;
    const customer = await stripe.createCustomer({
      email: `test@test.com`,
      source: tokenId
    });
    const res = await stripe.chargeCustomer({
      customer: customer.id,
      amount: 1000,
      currency: 'usd'
    });
    
    alert(JSON.stringify(customer));
  }

  render() {
    return (
      <AppContainer>
        <WelcomeTextHolder>
          <Text>React Native Demo</Text>
          <Text>Stripe Integration</Text>
        </WelcomeTextHolder>
        
        <CardInput onPayPressed={this.onPayPressed} />
      </AppContainer>
    );
  }
}
