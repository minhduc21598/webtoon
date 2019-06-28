import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Originals extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text> Originals </Text>
      </View>
    );
  }
}

export default Originals;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
