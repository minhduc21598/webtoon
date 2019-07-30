import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Genres from './Genres';
import OldSeason from './OldSeason';

class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldSeason: true,
      colorSeason: "black",
      colorGenre:"gray"
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor='transparent'
          barStyle='dark-content'
        />
        <View style={styles.headerContainer}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              activeOpacity={1}
              onPress={() => this.setState({ oldSeason: true, colorSeason: "black", colorGenre: "gray" })}
            >
              <Text style={[styles.txtHeader, { color: this.state.colorSeason }]}>Seasons</Text>
            </TouchableOpacity>
            <Text style={styles.txtHeader}>|</Text>
            <TouchableOpacity
              style={{
                alignItems: 'center'
              }}
              activeOpacity={1}
              onPress={() => this.setState({ oldSeason: false, colorSeason: "gray", colorGenre: "black" })}
            >
              <Text style={[styles.txtHeader, { color: this.state.colorGenre }]}>Genres</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => alert("btn Search")}
            activeOpacity={1}
            style={{ marginRight: 15 }}
          >
            <Icon name='ios-search' size={30} color={'black'} />
          </TouchableOpacity>
        </View>
        {
          (this.state.oldSeason)
            ? <OldSeason />
            : <Genres />
        }
        </View>
    );
  }
}

export default My;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  txtHeader: {
    fontSize: 23,
    fontWeight: '500',
    color: 'black',
    marginLeft: 18
  },
});
