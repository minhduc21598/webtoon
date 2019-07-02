import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { FlatGrid } from 'react-native-super-grid';

class Originals extends Component {
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
        <View tabLabel='MON'>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 17 }}>
            <Text style={{ color: 'gray', fontSize: 15 }}>
              4 items
              </Text>
            <TouchableOpacity
              activeOpacity={1}
            >
              <Text style={{ color: 'gray', fontSize: 15 }}>
                Sort by interest
                </Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flex: 1 }}>

          </View>
        </View>
        <View tabLabel='TUE'>

        </View>
        <View tabLabel='WED'>

        </View>
        <View tabLabel='THU'>

        </View>
        <View tabLabel='FRI'>

        </View>
        <View tabLabel='SAT'>

        </View>
        <View tabLabel='SUN'>

        </View>
        <View tabLabel='COMPLETED'>

        </View>
      </ScrollableTabView>
    );
  }
}

export default Originals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
