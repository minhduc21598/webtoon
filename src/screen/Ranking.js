import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Manga from './Manga';
import Anime from './Anime';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anime: true,
      isLoadmore: false,
      colorAnime: "black",
      colorManga: "gray",
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
              onPress={() => this.setState({ anime: true, colorAnime: "black", colorManga: "gray" })}
            >
              <Text style={[styles.txtHeader, { color: this.state.colorAnime }]}>Anime</Text>
            </TouchableOpacity>
            <Text style={styles.txtHeader}>|</Text>
            <TouchableOpacity
              style={{
                alignItems: 'center'
              }}
              activeOpacity={1}
              onPress={() => this.setState({ anime: false, colorAnime: "gray", colorManga: "black" })}
            >
              <Text style={[styles.txtHeader, { color: this.state.colorManga }]}>Manga</Text>
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
          (this.state.anime)
            ? <Anime />
            : <Manga />
        }
      </View>
    );
  }
}

export default Canvas;

const styles = StyleSheet.create({
  txtHeader: {
    fontSize: 23,
    fontWeight: '500',
    color: 'black',
    marginLeft: 18
  },
  headerContainer: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row', 
    justifyContent: 'space-between'
  }
});
