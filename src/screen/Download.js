import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { recentDataScreenMy } from '../component/Data';
import Header from '../component/Header';
import ViewSortBy from '../component/ViewSortBy';

class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor='transparent'
          barStyle='dark-content'
        />
        <Header
          firstTxt={'Downloaded'}
          secondTxt={''}
        />
        <ViewSortBy
          numberOfItem = {'3'}
          viewStyle = {styles.quantity}
        />
        {
          recentDataScreenMy.map(
            (item, index) => {
              return (
                <View style={{ flexDirection: 'row' }} key={index}>
                  <Image source={{ uri: item.uri }} style={styles.imgRecent} />
                  <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.txtRecent}> {item.title} </Text>
                    <Text style={styles.txtRecent}> {item.rank} </Text>
                  </View>
                </View>
              )
            }
          )
        }
      </View>
    );
  }
}

export default Download;

const styles = StyleSheet.create({
  imgRecent: {
    width: 100,
    height: 100
  },
  txtRecent: {
    color: 'red',
    fontSize: 20,
    margin: 4,
  },
  tabs: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  quantity: {
    marginBottom: 20
  }
});
