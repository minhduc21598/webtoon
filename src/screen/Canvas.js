import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text> Canvas </Text>
      </View>
    );
  }
}

export default Canvas;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
