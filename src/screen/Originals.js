import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import GenresOri from './GenresOri';
import Daily from './Daily';

class Originals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingMore: false,
      daily: true,
      colorDaily: "black",
      colorGenres: "gray",
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor='transparent'
          barStyle='dark-content'
        />
        <View style={[styles.headerContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              activeOpacity={1}
              onPress={() => this.setState({ daily: true, colorDaily: "black", colorGenres: "gray" })}
            >
              <Text style={[styles.txtHeader, { color: this.state.colorDaily }]}>Daily</Text>
            </TouchableOpacity>
            <Text style={styles.txtHeader}>|</Text>
            <TouchableOpacity
              style={{
                alignItems: 'center'
              }}
              activeOpacity={1}
              onPress={() => this.setState({ daily: false, colorDaily: "gray", colorGenres: "black" })}
            >
              <Text style={[styles.txtHeader, { color: this.state.colorGenres }]}>Genres</Text>
            </TouchableOpacity>
          </View>
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
        {
          (this.state.daily)
            ? <Daily />
            : <GenresOri />
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
