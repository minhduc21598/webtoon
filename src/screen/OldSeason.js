import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ViewInScrollableTabView from '../component/ViewInScrollableTabView';
import { getAnimeByYear} from '../services/HieuAPI';
import Icon from 'react-native-vector-icons/Ionicons';
import { season, seasons, dataYear } from '../const';
import { PickerView } from '../component/PickerView';

class OldSeason extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: [],
            date: "2019"
        };
        this.showPicker = false;
    }

    componentDidMount() {
        getAnimeByYear(this.state.date, season[0])
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
        getAnimeByYear(this.state.date, season[0])
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

    _renderLoading = () => {
        return (
            <View style={styles.loadingAtStart}>
                <ActivityIndicator size="large" color='black' />
            </View>
        )
    }

    openYear = () => {
        PickerView(dataYear, 2019, this.dateChange);
    }

    onChangeTab = (item) => {
        this.index = item.i;
        getAnimeByYear(this.state.date, season[this.index])
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
                {
                    (this.state.isLoading) ? this._renderLoading() :
                        <ScrollableTabView
                            initialPage={0}
                            tabBarInactiveTextColor={'gray'}
                            tabBarActiveTextColor={'black'}
                            tabBarUnderlineStyle={styles.scrollTab}
                            style={styles.scrollTabStyle}
                            onChangeTab={this.onChangeTab}
                        >
                            {
                                seasons.map(
                                    (item, index) => {
                                        return (
                                            <ViewInScrollableTabView
                                                tabLabel={item}
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

export default OldSeason;
const styles = StyleSheet.create({
    loadingAtStart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
    scrollTabStyle: {
        flex: 1
    }
});