import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ViewInScrollableTabView from '../component/ViewInScrollableTabView';
import { tabNameInDaily } from '../const';
import { dataOriginal } from '../component/Data';
import Header from '../component/Header';

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingMore: false,
    };
  }

  renderTabBar = () => {
    return (
      <ScrollableTabBar style={styles.tabBar} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          ref={ref => this.Header = ref}
          firstTxt={'Daily'}
          secondTxt={''}
        />
        <ScrollableTabView
          initialPage={0}
          renderTabBar={this.renderTabBar}
          tabBarInactiveTextColor={'gray'}
          tabBarActiveTextColor={'black'}
          tabBarUnderlineStyle={styles.tabBarUnder}
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

export default Daily;

const styles = StyleSheet.create({
  container: { 
    flex: 1 
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
  },
  tabBar:{ 
    borderTopWidth: 0.5, 
    borderTopColor: '#d0cdcd' 
  },
  tabBarUnder:{ 
    height: 2 
  }
});
