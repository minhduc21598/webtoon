import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import GenresOri from './Manga';
import Daily1 from './Daily1';

class Originals extends Component {
  constructor(props) {
    super(props);
    let daily = (this.props.navigation.state.params === undefined) ? true : this.props.navigation.state.params.daily;
    let colorDaily = (this.props.navigation.state.params === undefined) ? 'black' : this.props.navigation.state.params.colorDaily;
    let colorGenres = (this.props.navigation.state.params === undefined) ? 'gray' : this.props.navigation.state.params.colorGenres;
    this.state = {
      isLoadingMore: false,
      daily: daily,
      colorDaily: colorDaily,
      colorGenres: colorGenres,
    };
    this.currentGenres = (this.props.navigation.state.params === undefined) ? 0 : this.props.navigation.state.params.index;
  }

  componentWillReceiveProps = (nextProps) => {
    let daily = (this.props.navigation.state.params === undefined) ? true : this.props.navigation.state.params.daily;
    let colorDaily = (this.props.navigation.state.params === undefined) ? 'black' : this.props.navigation.state.params.colorDaily;
    let colorGenres = (this.props.navigation.state.params === undefined) ? 'gray' : this.props.navigation.state.params.colorGenres;
    this.setState({daily: daily, colorDaily: colorDaily, colorGenres: colorGenres});
  }

  onPressDaily = () => {
    this.setState({ daily: true, colorDaily: "black", colorGenres: "gray" })
    this.currentGenres = this.GenresOri.currentIndex;
  }

  onPressGenres = () => {
    this.setState({ daily: false, colorDaily: "gray", colorGenres: "black" })
  }

  render() {
    let index = (this.props.navigation.state.params === undefined) ? this.currentGenres : this.props.navigation.state.params.index;
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
              onPress = {this.onPressDaily}
            >
              <Text style={[styles.txtHeader, { color: this.state.colorDaily }]}>Daily</Text>
            </TouchableOpacity>
            <Text style={styles.txtHeader}>|</Text>
            <TouchableOpacity
              style={{
                alignItems: 'center'
              }}
              activeOpacity={1}
              onPress = {this.onPressGenres}
            >
              <Text style={[styles.txtHeader, { color: this.state.colorGenres }]}>Genres</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
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
            ? <Daily1/>
            : <GenresOri 
                ref = {ref => this.GenresOri = ref}
                data = {index}
              />
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
