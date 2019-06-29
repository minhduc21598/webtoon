import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import {recentDataScreenMy} from '../component/Data';

class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollableTabView
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <View tabLabel='Recent'>
            {
              recentDataScreenMy.map(
              (item, index)=>{
                return(
                  <View style={{flexDirection: 'row', width:"100%"}} key={index}>
                    <Image source={{uri: item.uri}} style={styles.imgRecent} />
                        <View style={{flex:1, justifyContent:'center'}}>
                          <Text style={styles.txtRecent}> {item.title} </Text>
                          <Text style={styles.txtRecent}> {item.rank} </Text>
                        </View>
                    </View>
                )
              }
            )
            }
        </View>
        <View tabLabel='Subcribed' style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.txtTabs}>
                No subcribed 
            </Text>
        </View>
        <View tabLabel='Downloads'>
            <Text style={styles.txtTabs}>
                No downloads 
            </Text>
        </View>
        <View tabLabel='Fast Pass'>
            <Text style={styles.txtTabs}>
                Enable fast pass for better experience
            </Text>
        </View>
        <View tabLabel='Comment'>
            <Text style={styles.txtTabs}>
                No comments 
            </Text>
        </View>
      </ScrollableTabView>
    );
  }
}

export default My;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recentView:{
    flex: 1,
    height: 500
  },
  imgRecent:{
    width:100,
    height:100
  },
  txtRecent:{
    color: 'red',
    fontSize: 20,
  },
  txtTabs:{
    color: 'red',
    fontSize: 25,
  }
});
