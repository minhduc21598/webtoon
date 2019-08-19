import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Manga from './Manga';
import Anime from './Anime';
import Header from '../component/Header';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anime: true,
      isLoadmore: false,
    };
  }

  componentDidMount = () => {
    (this.state.anime) ? this.firstOnPress() : this.secondOnPress()
  }

  firstOnPress = () => {
    this.setState({anime: true});
    this.Header.setState({colorFirstTxt: "black", colorSecondTxt: "gray"});
  }

  secondOnPress = () => {
    this.setState({anime: false});
    this.Header.setState({colorFirstTxt: "gray", colorSecondTxt: "black"})
  }

  gotoDetailAnime = (item) => {
    this.props.navigation.navigate("DetailAnime", {item: item});
  }

  gotoDetailManga = (item) => {
    this.props.navigation.navigate("DetailManga", {item: item});
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          ref = {ref => this.Header = ref}
          firstTxt = {'Anime'}
          secondTxt = {'Manga'}
          firstOnPress = {this.firstOnPress}
          secondOnPress = {this.secondOnPress}
        />
        {
          (this.state.anime)
            ? <Anime onPress = {this.gotoDetailAnime}/>
            : <Manga onPress ={this.gotoDetailManga}/>
        }
      </View>
    );
  }
}

export default Canvas;

const styles = StyleSheet.create({
  container: { 
    flex: 1 
  }
});
