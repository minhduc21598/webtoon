import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ViewInScrollableTabView from '../component/ViewInScrollableTabView';
import { recentDataScreenMy } from '../component/Data';
import Icon from 'react-native-vector-icons/Ionicons';
import { seasons } from '../const';
import { PickerView } from '../component/PickerView';

class OldSeason extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "2019"
        };
        this.showPicker = false;
    }

    componentDidMount() {
        getAnimeByYear(this.state.genreID, this.page)
          .then(response => response.json())    // convert respense sang json
          .then(res => {
            console.log(res)             //da convert xong, ket qua la responseJson
            this.setState({
              items: res.anime,
              isLoading: false
            })
          })
          .catch((error) => {                     // neu co loi thi chay o day
            console.error(error);
          });
      }

    dateChange = (date) => {
        this.setState({ date: date })
    }

    openYear = () => {
        PickerView(dataYear, 2019, this.dateChange);
    }

    _renderLoadingIconBelow = () => {
        if (this.state.isLoadingmore) {
          return (
            <View style={styles.loading}>
              <ActivityIndicator color='black' size='large' />
            </View>
          )
        }
        return null;
      }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.openYear}
                    style={styles.btnChooseTab}
                >
                    <Text style={styles.txtChooseTab}>Choose a year</Text>
                    <Text style={styles.txtChooseTab}>
                        {this.state.date} {'  '}
                        <Icon name='ios-arrow-down' color='black' size={20} />
                    </Text>
                </TouchableOpacity>
                <ScrollableTabView
                    initialPage={0}
                    tabBarInactiveTextColor={'gray'}
                    tabBarActiveTextColor={'black'}
                    tabBarUnderlineStyle={styles.scrollTab}
                    style={styles.scrollTabStyle}
                >
                    {
                        seasons.map(
                            (item, index) => {
                                return (
                                    <ViewInScrollableTabView
                                        tabLabel={item}
                                        styleTxtCounter={styles.txtCounter}
                                        styleFlatGrid={styles.itemContainer}
                                        data={recentDataScreenMy}
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

export default OldSeason;
const styles = StyleSheet.create({
    container: { 
        flex: 1 
    },
    btnChooseTab: {
        height: 50,
        marginLeft: 28,
        marginRight: 38,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    txtChooseTab: {
        color: 'black',
        fontSize: 17,
        fontWeight: '400'
    },
    headerContainer: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtHeader: {
        fontSize: 23,
        fontWeight: '500',
        color: 'black',
        marginLeft: 25
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
    scrollTab: { 
        height: 2 
    },
    scrollTabStyle:{ 
        flex: 1 
    }
});