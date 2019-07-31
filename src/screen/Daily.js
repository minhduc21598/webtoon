import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ViewInScrollableTabView from '../component/ViewInScrollableTabView';
import { tabNameInDaily } from '../const';
import { dataOriginal } from '../component/Data';
import Header from '../component/Header';

class Originals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingMore: false,
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
          firstTxt = {'Daily'}
          secondTxt = {''}
        />
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
