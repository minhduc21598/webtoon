import React, { Component } from 'react';
import { Text } from 'react-native';

class TitleChanges extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {index, data, element , styleTxt} = this.props;
      console.log(this.props)
    return (     
        <Text style = {styleTxt}> {data[index]}.{element}</Text>
    );
  }
}

export default TitleChanges;