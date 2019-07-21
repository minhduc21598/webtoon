import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatGrid } from 'react-native-super-grid';
import { type } from '../component/Data';

class ShortcutsOri extends Component {
  constructor(props) {
    super(props);
    let { data } = this.props;
    this.state = {
      index: data
    };
  }

  renderItem = ({item, index}) => {
    let { onChange } = this.props;
    return (
      <TouchableOpacity
        style={styles.listBtn}
        activeOpacity={1}
        onPress={() => {
          this.setState({index: index});
          onChange && onChange(index);
        }}
        key={index}
      >
        <View style={styles.btnCircle}>
          <Icon name={item.icon} size={30} color={(this.state.index == index) ? '#00df04' : 'black'} />
        </View>
        <Text style={(this.state.index == index) ? styles.titleBtnActive : styles.titleBtnInactive}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View>
        <View style={styles.title}>
          <Text style={styles.titleName}>SHORTCUTS</Text>
        </View>
        <FlatGrid
          itemDimension={75}
          items={type}
          spacing={8}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default ShortcutsOri;

const styles = StyleSheet.create({
  title: {
    height: 50,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#d0cdcd',
    justifyContent: 'center'
  },
  titleName: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    marginLeft: 20
  },
  listBtn: {
    marginRight: 10,
    alignItems: 'center',
    width: 80,
    height: 110
  },
  btnCircle: {
    width: 70,
    height: 70,
    backgroundColor: '#e3e3e3',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  titleBtnActive: {
    color: '#00df04',
    fontSize: 12
  },
  titleBtnInactive: {
    color: 'black',
    fontSize: 12
  },
});
