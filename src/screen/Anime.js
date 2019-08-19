import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import TabView from '../component/ViewInScrollableTabView';
import { dataAnime, animeType } from '../const';
import { getTypeAnime } from '../services/GetAPI';

class Anime extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.index = 0;
    this.page = 1;
  }

  getData = () => {
    this.page = 1;
    getTypeAnime(this.page, animeType[this.index]).then(
      response => response.json()
    ).then(
      res => {
        this.TabView.setState({ items: res.top, isLoading: false })
      }
    ).catch((error) => {
      console.error(error);
      return error;
    });
  }

  getMoreData = () => {
    if (this.TabView.state.loadingMore) return;
    this.TabView.setState({ loadingMore: true });
    this.page = this.page + 1;
    getTypeAnime(this.page, animeType[this.index]).then(
      response => response.json()
    ).then(
      res => {
        this.TabView.setState({
          items: this.TabView.state.items.concat(res.top),
          loadingMore: false
        })
      }
    ).catch((error) => {
      console.error(error);
      return error;
    });
  }

  renderLoadingIconBelow = () => {
    if (this.TabView.state.loadingMore) {
      return (
        <View style={styles.loadingMore}>
          <ActivityIndicator color='black' size='large' />
        </View>
      )
    }
    return null;
  }

  onChangeTab = (item) => {
    this.index = item.i;
    this.page = 1;
    this.getData();
  }

  renderTabBar = (style) => {
    return <ScrollableTabBar
      style={style}
    />
  }

  render() {
    let { onPress } = this.props;
    return (
      (this.state.isLoading) ? this.renderLoading() :
        <ScrollableTabView
          renderTabBar={() => this.renderTabBar(styles.scrollTab)}
          tabBarInactiveTextColor={'gray'}
          tabBarActiveTextColor={'black'}
          tabBarUnderlineStyle={styles.tabBar}
          onChangeTab={this.onChangeTab}
        >
          {
            dataAnime.map(
              (item, index) => {
                return (
                  <TabView
                    ref={ref => this.TabView = ref}
                    tabLabel={item}
                    getData={this.getData}
                    onEndReachedThreshold={0.5}
                    onEndReached={this.getMoreData}
                    listFooterComponent={this.renderLoadingIconBelow}
                    onPress={(item) => onPress(item)}
                    key={index}
                  />
                )
              }
            )
          }
        </ScrollableTabView>
    );
  }
}

export default Anime;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollTab: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: '#d0cdcd'
  },
  loadingMore: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabBar: {
    height: 2
  },
});
