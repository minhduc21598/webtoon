import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Shortcuts from '../component/ShortcutsRanking';
import ScrollableTab from '../component/ScrollableRanking';
import {typeAnime} from '../const';
import {dataAnime} from '../const';

class Anime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shortcuts: false
    };
    this.currentIndex = 0;
  }

  showShortcuts = () => {
    if (this.state.shortcuts) {
      this.setState({ shortcuts: false })
    } else {
      this.setState({ shortcuts: true })
    }
  }

  onChangeShortcuts = (index) => {
    this.currentIndex = index;
    this.setState({ shortcuts: false });
  }

  onChangeScrollableTab = (index) => {
    this.currentIndex = index;
  }

  render() {
    const { shortcuts } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {
          (!shortcuts) &&
          <ScrollableTab
            data={this.currentIndex}
            dataTab = {dataAnime}
            onChange={this.onChangeScrollableTab}
          />}
        {
          shortcuts && 
          <Shortcuts
            data={this.currentIndex}
            dataBtn = {typeAnime}
            onChange={this.onChangeShortcuts}
          />
        }
        <TouchableOpacity
          style={styles.modalBoxStyle}
          activeOpacity={1}
          onPress={this.showShortcuts}
        >
          {
            (shortcuts)
              ? <Icon name='ios-arrow-up' size={20} color={'gray'} />
              : <Icon name='ios-arrow-down' size={20} color={'gray'} />
          }
        </TouchableOpacity>
      </View>
    );
  }
}

export default Anime;

const styles = StyleSheet.create({
  modalBoxStyle: {
    width: 50,
    height: 50,
    position: 'absolute',
    marginLeft: 310,
    borderWidth: 0.5,
    borderColor: '#d0cdcd',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
