import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
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
      <View style={{ flex: 1 }}>
        <ScrollableTab
          dataTab={dataAnime}
          styleTabBar = {styles.scrollTab}
        />
      </View>
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
