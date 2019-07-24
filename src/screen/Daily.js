import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
<<<<<<< HEAD
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ViewInScrollableTabView from '../component/ViewInScrollableTabView';
import { tabNameInDaily } from '../const';
import { dataOriginal } from '../component/Data';
=======
import GenresOri from './Manga';
import Daily1 from './Daily1';
>>>>>>> d035e4ce38c89d65598c4f742a71b3c6c6399790

class Originals extends Component {
  constructor(props) {
    super(props);
    let daily = (this.props.navigation.state.params === undefined) ? true : this.props.navigation.state.params.daily;
    let colorDaily = (this.props.navigation.state.params === undefined) ? 'black' : this.props.navigation.state.params.colorDaily;
    let colorGenres = (this.props.navigation.state.params === undefined) ? 'gray' : this.props.navigation.state.params.colorGenres;
    this.state = {
      isLoadingMore: false,
      colorDaily: colorDaily,
      colorGenres: colorGenres,
    };
    this.currentGenres = (this.props.navigation.state.params === undefined) ? 0 : this.props.navigation.state.params.index;
  }

  componentWillReceiveProps = (nextProps) => {
    let daily = (this.props.navigation.state.params === undefined) ? true : this.props.navigation.state.params.daily;
    let colorDaily = (this.props.navigation.state.params === undefined) ? 'black' : this.props.navigation.state.params.colorDaily;
    let colorGenres = (this.props.navigation.state.params === undefined) ? 'gray' : this.props.navigation.state.params.colorGenres;
    this.setState({ daily: daily, colorDaily: colorDaily, colorGenres: colorGenres });
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

          <Text style={[styles.txtHeader, { color: 'black' }]}>Daily</Text>
          <TouchableOpacity
            onPress={() => alert("btn Search")}
            activeOpacity={1}
            style={{ marginRight: 15 }}
          >
            <Icon name='ios-search' size={30} color={'black'} />
          </TouchableOpacity>

        </View>
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar style={{ borderTopWidth: 0.5, borderTopColor: '#d0cdcd' }} />}
          tabBarInactiveTextColor={'gray'}
          tabBarActiveTextColor={'black'}
          tabBarUnderlineStyle={{ height: 2 }}
        >
          {
            tabNameInDaily.map(
              (item, index) => {
                return (
                  <ViewInScrollableTabView
                    tabLabel={item}
                    styleTxtCounter={styles.txtCounter}
                    styleFlatGrid={styles.itemContainer}
                    data={dataOriginal}
                    key={index}
                  />
                )
              }
            )
          }
        </ScrollableTabView>
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
  itemContainer: {
    borderRadius: 5,
    width: 100,
    height: 160,
  },
  txtCounter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
    marginTop: 10,
    marginBottom: 10
  }
});
