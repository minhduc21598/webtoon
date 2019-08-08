import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
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
      <View style={styles.container}>
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
                <View style={styles.rowItem} key={index}>
                  <Image source={{ uri: item.uri }} style={styles.imgRecent} />
                  <View style={styles.detail}>
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
  container: { 
    flex: 1 
  },
  imgRecent: {
    width: 100,
    height: 100
  },
  txtRecent: {
    color: 'red',
    fontSize: 20,
    margin: 4,
  },
  rowItem: { 
    flexDirection: 'row' 
  },
  detail: { 
    flex: 1, 
    justifyContent: 'center' 
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
