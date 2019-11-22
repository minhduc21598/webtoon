import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, ToastAndroid } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import ViewInScrollableTabView from '../component/ViewInScrollableTabView';
import { tabNameInDaily, days } from '../const';
import Header from '../component/Header';
import { getDaily } from '../services/GetAPI';
import { connect } from 'react-redux';
import { createUser, deleteUser } from '../redux/actions/UserAction';
import CheckConnection from '../services/CheckConnection';
import AsyncStorage from '@react-native-community/async-storage';

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      isLoading: true,
    };
    this.index = 0;
  }

  componentDidMount = () => {
    this.getData();
  }

  renderTabBar = () => {
    return (
      <ScrollableTabBar style={styles.tabBar} />
    )
  }

  getData = async () => {
    const checked = await CheckConnection();
    if (checked) {
      this.props.delete();
      AsyncStorage.removeItem(`${days[this.index]}`);
      getDaily(days[this.index])
        .then(response => response.json())
        .then(res => {
          this.props.create(res[days[this.index]]);
          AsyncStorage.setItem(`${days[this.index]}`, JSON.stringify(res[days[this.index]]));
          this.setState({ isLoading: false });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      let day = await AsyncStorage.getItem(`${days[this.index]}`);
      if (day == null) {
        this.props.delete();
        this.props.create([]);
      } else {
        this.props.delete();
        this.props.create(JSON.parse(day));
        this.setState({ isLoading: false });
      }
    }
  }

  onChangeTab = (item) => {
    this.index = item.i;
    this.getData();
  }

  gotoDetail = async (item) => {
    const checked = await CheckConnection();
    if (checked) {
      this.props.navigation.navigate("DetailAnime", { id: item.mal_id });
    } else {
      ToastAndroid.showWithGravity('No network connection !', ToastAndroid.LONG, ToastAndroid.CENTER);
      return;
    }
  }

  renderLoading = () => {
    return (
      <View style={styles.loadingAtStart}>
        <ActivityIndicator size="large" color='black' />
      </View>
    )
  }

  onRefresh = () => {
    this.setState({ refreshing: true });
    this.getData();
    this.setState({ refreshing: false });
  }

  render() {
    return (
      (this.state.isLoading) ? this.renderLoading() :
        <View style={styles.container}>
          <Header
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
                        tabLabel={item}
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
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

const mapDispatchToProps = (dispatch) => {
  return {
    create: (data) => dispatch(createUser(data)),
    delete: () => dispatch(deleteUser())
  }
}

export default connect(null, mapDispatchToProps)(Daily);

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
  loadingAtStart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
