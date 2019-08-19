import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import ScrollableTabView, { ScrollableTabBar} from 'react-native-scrollable-tab-view';
import ViewInScrollableTabView from '../component/ViewInScrollableTabView';
import { tabNameInDaily, days } from '../const';
import Header from '../component/Header';
import { getDaily } from '../services/HieuAPI';

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true,
    };
    this.index =0;
  }

  componentDidMount() {
    getDaily(days[this.index])
      .then(response => response.json())    // convert respense sang json
      .then(res => {
        console.log(res)             //da convert xong, ket qua la responseJson
        this.setState({
          items: res[days[this.index]],
          isLoading: false
        })
      })
      .catch((error) => {                     // neu co loi thi chay o day
        console.error(error);
      });
  }

  renderTabBar = () => {
    return (
      <ScrollableTabBar style={styles.tabBar} />
    )
  }

  onChangeTab = (item) => {
    this.index = item.i;
    getDaily(days[this.index])
      .then(response => response.json())    // convert respense sang json
      .then(res => {
        console.log(res)             //da convert xong, ket qua la responseJson
        this.setState({
          items: res[days[this.index]],
          isLoading: false
        })
      })
      .catch((error) => {                     // neu co loi thi chay o day
        console.error(error);
      });
  }

  _renderLoading = () => {
    return (
      <View style={styles.loadingAtStart}>
        <ActivityIndicator size="large" color='black' />
      </View>
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
        {
          (this.state.isLoading) ? this._renderLoading() :
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
                        number={this.state.items.length}
                        styleTxtCounter={styles.txtCounter}
                        styleFlatGrid={styles.itemContainer}
                        data={this.state.items}
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
  tabBar: {
    borderTopWidth: 0.5,
    borderTopColor: '#d0cdcd'
  },
  tabBarUnder: {
    height: 2
  },
  loadingAtStart: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
});
