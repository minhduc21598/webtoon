import React, { Component } from 'react';
import { TouchableOpacity ,Text, StyleSheet } from 'react-native';

class TitleChanges extends Component {
  constructor(props) {
    super(props);
    let { initValue } = this.props;
    this.state = {
      title: initValue
    };
  }

  render() {
    const { styleTxt, onPress } = this.props;
    return (
      <TouchableOpacity
        style = {styles.container}
        onPress = {onPress}
        activeOpacity = {1}
      >
        <Text style={styleTxt}> {this.state.title}</Text>
        <Text style = {styles.arrow}>></Text>
      </TouchableOpacity>
    );
  }
}

export default TitleChanges;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  arrow: {
    marginRight: 15,
    marginTop: 5,
    color: 'black',
    fontSize: 18
  }
});