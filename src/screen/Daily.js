import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import ViewInScrollableTabView from '../component/ViewInScrollableTabView';
import { tabNameInDaily, days } from '../const';
import Header from '../component/Header';
import { getDaily } from '../services/HieuAPI';

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.index = 0;
  }

  renderTabBar = () => {
    return (
      <ScrollableTabBar style={styles.tabBar} />
    )
  }

  getData = () => {
    getDaily(days[this.index])
      .then(response => response.json()) 
      .then(res => {
        this.ViewInScrollableTabView.setState({
          items: res[days[this.index]],
          isLoading: false
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onChangeTab = (item) => {
    this.index = item.i;
    this.getData();
  }

  gotoDetail = (item) => {
    this.props.navigation.navigate("DetailAnime", { item: item });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          ref={ref => this.Header = ref}
          firstTxt={'Daily'}
          secondTxt={''}
        />
        {
          <ScrollableTabView
            initialPage={0}
            renderTabBar={this.renderTabBar}
            tabBarInactiveTextColor={'gray'}
            tabBarActiveTextColor={'black'}
            tabBarUnderlineStyle={styles.tabBarUnder}
            onChangeTab={this.onChangeTab}
          >
            {
              tabNameInDaily.map(
                (item, index) => {
                  return (
                    <ViewInScrollableTabView
                      ref={ref => this.ViewInScrollableTabView = ref}
                      tabLabel={item}
                      getData={this.getData}
                      onPress={this.gotoDetail}
                      key={index}
                    />
                  )
                }
              )
            }
          </ScrollableTabView>
        }
      </View>
    );
  }
}

export default Daily;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    borderTopWidth: 0.5,
    borderTopColor: '#d0cdcd'
  },
  tabBarUnder: {
    height: 2
  },
});
