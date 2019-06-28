import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ForYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> ForYou </Text>
      </View>
    );
  }
}

export default ForYou;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
