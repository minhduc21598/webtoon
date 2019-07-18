import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ViewInScrollableTabView from '../component/ViewInScrollableTabView';
import { dataOriginal } from '../component/Data';

const tabName = ['Romance', 'Drama', 'Fantasy', 'Comedy', 'Action', 'Horror', 'Slice of Life', 'Heart-warming', 'Superheroes', 'Sport', 'Scifi', 'Infomative', 'Historical'];

class GenreCan extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar style={{ borderTopWidth: 0.5, borderTopColor: '#d0cdcd' }} />}
          tabBarInactiveTextColor={'gray'}
          tabBarActiveTextColor={'black'}
          tabBarUnderlineStyle={{ height: 2 }}
        >
          {
            tabName.map(
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

export default GenreCan;
const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 5,
    width: 100,
    height: 160,
  },
  txtCounter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 12,
    height: 20
  }
});