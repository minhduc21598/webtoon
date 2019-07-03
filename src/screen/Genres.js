import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Genres extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> Genres </Text>
      </View>
    );
  }
}

export default Genres;

const styles = StyleSheet.create({
    
});
