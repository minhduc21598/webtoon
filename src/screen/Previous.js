import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import OldSeason from './OldSeason';
import Header from '../component/Header';

class Previous extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  gotoDetailAnime = (item) => {
    this.props.navigation.navigate("DetailAnime", { item: item });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          ref={ref => this.Header = ref}
          firstTxt={'Season'}
          secondTxt={''}
        />
        <OldSeason
          onPress={this.gotoDetailAnime}
        />
      </View>
    );
  }
}

export default Previous;
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});