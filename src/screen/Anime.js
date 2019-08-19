import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import ViewInScrollableTabView from '../component/ViewInScrollableTabView';
import { dataAnime, animeType } from '../const';
import { getTypeAnime } from '../services/GetAPI';

class Anime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loadingMore: false,
      refreshing: false,
      isLoading: true,
    };
    this.page = 1;
    this.type = animeType[0];
  }

  componentDidMount = () => {
    getTypeAnime(this.page, this.type).then(
      response => response.json()
    ).then(
      res => {
        this.setState({ items: res.top, isLoading: false })
      }
    ).catch((error) => {
      console.error(error);
      return error;
    });
  }

  shouldComponentUpdate = (nextState) => {
    if(nextState.items != this.state.items) return true;
    return false;
  }

  renderLoading = () => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size='large' color='black' />
      </View>
    )
  }

  onChangeTab = (item) => {
    this.type = animeType[item.i];
    this.setState({items: []});
    getTypeAnime(this.page, this.type).then(
      response => response.json()
    ).then(
      res => {
        this.setState({ items: res.top })
      }
    ).catch((error) => {
      console.error(error);
      return error;
    });
  }

  renderTabBar = (style) => {
    return <ScrollableTabBar
      style={style}
    />
  }

  onRefresh = () => {
    this.setState({ refreshing: true })
    this.page = 1;
    getTypeAnime(this.page, this.type).then(
      response => response.json()
    ).then(
      res => {
        this.setState({ items: res.top, refreshing: false })
      }
    ).catch((error) => {
      console.error(error);
      return error;
    });
  }

  onScrollDown = () => {
    if (this.state.loadingMore) return;
    this.setState({ loadingMore: true });
    this.page = this.page + 1;
    getTypeAnime(this.page, this.type).then(
      response => response.json()
    ).then(
      res => {
        this.setState({
          items: this.state.items.concat(res.top),
          loadingMore: false
        })
      }
    ).catch((error) => {
      console.error(error);
      return error;
    });
  }

  renderLoadingIconBelow = () => {
    if (this.state.loadingMore) {
      return (
        <View style={styles.loadingMore}>
          <ActivityIndicator color='black' size='large' />
        </View>
      )
    }
    return null;
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
                <ViewInScrollableTabView
                  tabLabel={item}
                  data={this.state.items}
                  onEndReachedThreshold={0.5}
                  onEndReached={this.onScrollDown}
                  listFooterComponent={this.renderLoadingIconBelow}
                  onRefresh={this.onRefresh}
                  refreshing={this.state.refreshing}
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
