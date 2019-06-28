import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text> My </Text>
      </View>
    );
  }
}

export default My;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
