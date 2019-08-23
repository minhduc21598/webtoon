import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import TabView from './ViewInScrollableTabView';
import { connect } from 'react-redux';
import { createUser, deleteUser } from '../actions/UserAction';

class DataRanking extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.index = 0;
    this.page = 1;
  }

  getData = () => {
    let { type, getType } = this.props;
    this.page = 1;
    this.props.delete();
    getType(this.page, type[this.index]).then(
      response => response.json()
    ).then(
      res => {
        this.props.create(res.top);
        this.TabView.setState({ items: this.props.data, isLoading: false });
      }
    ).catch((error) => {
      console.error(error);
      return error;
    });
  }

  getMoreData = () => {
    let { type, getType } = this.props;
    if (this.TabView.state.loadingMore) return;
    this.TabView.setState({ loadingMore: true });
    this.page = this.page + 1;
    getType(this.page, type[this.index]).then(
      response => response.json()
    ).then(
      res => {
        this.props.create(res.top);
        this.TabView.setState({
          items: this.props.data,
          loadingMore: false
        });
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
    this.props.delete();
    this.getData();
  }

  renderTabBar = (style) => {
    return <ScrollableTabBar
      style={style}
    />
  }

  render() {
    let { onPress, tabType } = this.props;
    return (
      <ScrollableTabView
        initialPage = {0}
        renderTabBar={() => this.renderTabBar(styles.scrollTab)}
        tabBarInactiveTextColor={'gray'}
        tabBarActiveTextColor={'black'}
        tabBarUnderlineStyle={styles.tabBar}
        onChangeTab={this.onChangeTab}
      >
        {
          tabType.map(
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

const mapStateToProps = (state) => {
  return {
      data: state.UserReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    create: (data) => dispatch(createUser(data)),
    delete: () => dispatch(deleteUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataRanking);

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
