import React, { Component } from 'react';
import { View } from 'react-native';
import Genres from './Genres';
import OldSeason from './OldSeason';
import Header from '../component/Header';

class Previous extends Component {
  constructor(props) {
    super(props);
    let oldSeason = (this.props.navigation.getParam('oldSeason') === undefined) ? true : this.props.navigation.getParam('oldSeason');
    this.state = {
      oldSeason: oldSeason
    };
  }

  componentDidMount = () => {
    if(this.state.oldSeason){
      this.firstOnPress();
    } else {
      this.secondOnPress();
    }
  }

  componentWillReceiveProps = () => {
    this.setState({oldSeason: false});
    this.secondOnPress();
  }

  firstOnPress = () => {
    this.Header.setState({ colorFirstTxt: "black", colorSecondTxt: "gray" })
    this.setState({ oldSeason: true})
  }

  secondOnPress = () => {
    this.Header.setState({ colorFirstTxt: "gray", colorSecondTxt: "black" })
    this.setState({ oldSeason: false})
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header 
          ref = {ref => this.Header = ref}
          firstTxt = {'Season'}
          secondTxt = {'Genres'}
          firstOnPress = {this.firstOnPress}
          secondOnPress = {this.secondOnPress}
        />
        {
          (this.state.oldSeason)
            ? <OldSeason />
            : <Genres />
        }
      </View>
    );
  }
}

export default Previous;
