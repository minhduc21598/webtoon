import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Manga from './Manga';
import Anime from './Anime';
import Header from '../component/Header';

class Canvas extends Component {
  constructor(props) {
    super(props);
    let anime = (this.props.navigation.getParam('anime') === undefined) ? true : this.props.navigation.getParam('anime');
    this.state = {
      anime: anime,
      isLoadmore: false,
    };
  }

  componentDidMount = () => {
    (this.state.anime) ? this.firstOnPress() : this.secondOnPress()
  }

  componentWillReceiveProps = () => {
    this.setState({anime: false});
    this.secondOnPress();
  }

  firstOnPress = () => {
    this.setState({anime: true});
    this.Header.setState({colorFirstTxt: "black", colorSecondTxt: "gray"});
  }

  secondOnPress = () => {
    this.setState({anime: false});
    this.Header.setState({colorFirstTxt: "gray", colorSecondTxt: "black"})
  }

  render() {
    let index = this.props.navigation.getParam('index');
    return (
      <View style={{ flex: 1 }}>
        <Header
          ref = {ref => this.Header = ref}
          firstTxt = {'Anime'}
          secondTxt = {'Manga'}
          firstOnPress = {this.firstOnPress}
          secondOnPress = {this.secondOnPress}
        />
        {
          (this.state.anime)
            ? <Anime />
            : <Manga index = {index}/>
        }
      </View>
    );
  }
}

export default Canvas;

const styles = StyleSheet.create({

});
