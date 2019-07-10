import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import GenresOri from './GenresOri';
import Daily from './Daily';

class Originals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingMore: false,
      daily: true
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <StatusBar
            backgroundColor='transparent'
            barStyle='dark-content'
          />
        </View>
        <View style={[styles.headerContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              activeOpacity={1}
              onPress={() => this.setState({daily: true})}
            >
              <Text style={styles.txtHeader}>Daily</Text>
            </TouchableOpacity>
            <Text style={styles.txtHeader}>|</Text>
            <TouchableOpacity
              style={{
                alignItems: 'center'
              }}
              activeOpacity={1}
              onPress={() => this.setState({daily: false})}
            >
              <Text style={styles.txtHeader}>Genres</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => alert("btn Medal")}
              activeOpacity={1}
              style={{ marginRight: 25 }}
            >
              <Icon1 name='medal' size={23} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert("btn Search")}
              activeOpacity={1}
              style={{ marginRight: 15 }}
            >
              <Icon name='ios-search' size={30} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
        {
          (this.state.daily)
          ? <Daily/>
          : <GenresOri/>
        }
      </View>
    );
  }
}

export default Originals;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 60,
    alignItems: 'center'
  },
  txtHeader: {
    fontSize: 23,
    fontWeight: '500',
    color: 'black',
    marginLeft: 18
  },
});
