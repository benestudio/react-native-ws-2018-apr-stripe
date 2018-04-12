import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";

const MyTextInput = ({ ...props }) => (
  <TextInput
    placeholderTextColor="#CCF"
    underlineColorAndroid="transparent"
    {...props}
  />
);

const Container = styled.View`
  border-radius: 5px;
  background-color: #eef;
  elevation: 3;
`;

const Flex = styled.View`
  flex: ${props => props.val};
`;

const Row = styled.View`
  flex-direction: row;
  padding: 10px;
`;

const CardDetailsContainer = styled(Row)`
  margin: 10px;
  border-width: 1px;
  border-color: rgba(48, 48, 170, 0.2);
  border-radius: 5px;
`;

const InputField = styled(MyTextInput)`
  font-size: 18;
`;

const CardNumber = styled(InputField)`
  flex: 1;
`;

const FixWidthInput = styled(InputField)`
  width: ${props => props.width};
`;

const PayButton = styled.TouchableOpacity`
  width: 120px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 3;
  background-color: #33a;
`;

const PayText = styled.Text`
  color: #eaeaea;
`;

export default class CardInput extends React.Component {
  static propTypes = {
    onPayPressed: PropTypes.func
  };
  static defaultProps = {
    onPayPressed: state => alert("No handler defined!")
  };

  state = {
    number: "",
    mm: "",
    yy: "",
    cvc: ""
  };

  handleChange = ({ ...props }) => this.setState({ ...props });

  render() {
    return (
      <Container>
        <CardDetailsContainer>
          <CardNumber
            placeholder="CardNumber"
            keyboardType="numeric"
            onChangeText={number => this.handleChange({ number })}
          />
          <FixWidthInput
            placeholder="MM"
            keyboardType="numeric"
            onChangeText={mm => this.handleChange({ mm })}
            width="50"
          />
          <FixWidthInput
            placeholder="YY"
            keyboardType="numeric"
            onChangeText={yy => this.handleChange({ yy })}
            width="50"
          />
          <FixWidthInput
            placeholder="CVC"
            keyboardType="numeric"
            onChangeText={cvc => this.handleChange({ cvc })}
            width="70"
          />
        </CardDetailsContainer>
        <Row>
          <Flex val="1" />
          <PayButton onPress={() => this.props.onPayPressed(this.state)}>
            <PayText>Pay!</PayText>
          </PayButton>
        </Row>
      </Container>
    );
  }
}
