import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, StatusBar, ActivityIndicator, RefreshControl, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GenresCan from './GenresCan';
import Spotlight from './Spotlight';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotlight: true,
      isLoadmore: false,
      colorSpotlight: "black",
      colorGenres: "gray",
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
              onPress={() => this.setState({spotlight: true, colorSpotlight: "black", colorGenres: "gray"})}
            >
              <Text style={[styles.txtHeader, {color: this.state.colorSpotlight}]}>Spotlight</Text>
            </TouchableOpacity>
            <Text style={styles.txtHeader}>|</Text>
            <TouchableOpacity
              style={{
                alignItems: 'center'
              }}
              activeOpacity={1}
              onPress={() => this.setState({spotlight: false, colorSpotlight: "gray", colorGenres: "black"})}
            >
              <Text style={[styles.txtHeader, {color: this.state.colorGenres}]}>Genres</Text>
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
          (this.state.spotlight)
            ? <Spotlight />
            : <GenresCan />
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
    alignItems: 'center'
  }
});
