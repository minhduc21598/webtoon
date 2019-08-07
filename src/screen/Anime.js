import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ScrollableTab from '../component/ScrollableRanking';
import { dataAnime } from '../const';

class Anime extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollableTab
        dataTab={dataAnime}
        styleTabBar = {styles.scrollTab}
      />
    );
  }
}

export default Anime;

const styles = StyleSheet.create({
  scrollTab: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: '#d0cdcd'
  },
});
