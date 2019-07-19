import React, { Component } from 'react';
import { Text } from 'react-native';

class TitleChanges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index:0
    };
  }

  render() {
    const {index, data, element , styleTxt} = this.props;
    return (   
      
        <Text style = {styleTxt}> {index}</Text>
        
    );
  }
}

export default TitleChanges;