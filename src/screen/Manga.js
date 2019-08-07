import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Shortcuts from '../component/ShortcutsRanking';
import ScrollableTab from '../component/ScrollableRanking';
import {typeManga} from '../const';
import {dataManga} from '../const';

class Manga extends Component {
  constructor(props) {
    super(props);
    let {index} = this.props;
    this.state = {
      shortcuts: false,
    };
    this.currentIndex = (index === undefined) ? 0 : index;
  }

  componentWillReceiveProps = (nextProps) => {
    let {index} = this.props;
    if(nextProps.index != index){
      this.currentIndex = nextProps.index;
    }
  }

  showShortcuts = () => {
    this.setState({shortcuts: !this.state.shortcuts});
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
            dataTab = {dataManga}
            styleTabBar = {styles.scrollTab}
            onChange={this.onChangeScrollableTab}
          />}
        {
          shortcuts && 
          <Shortcuts
            data={this.currentIndex}
            dataBtn = {typeManga}
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

export default Manga;

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
  scrollTab: {
    width: 310,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: '#d0cdcd'
  },
});
