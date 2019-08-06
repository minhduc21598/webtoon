import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ViewInScrollableTabView from '../component/ViewInScrollableTabView';
import { recentDataScreenMy } from '../component/Data';
import Picker from 'react-native-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { seasons } from '../const';

class OldSeason extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "2019"
        };
    }

    dateChange = (date) => {
        this.setState({ date: date })
    }

    openYear = () => {
        let data = [];
        for (var i = 1945; i < 2020; i++) {
            data.push(i);
        }
        Picker.init({
            pickerData: data,
            selectedValue: [2019],
            onPickerConfirm: data => {
                this.dateChange(data);
            },
            onPickerSelect: data => {
                this.dateChange(data);
            }
        });
        Picker.show();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
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
                    renderTabBar={() => <ScrollableTabBar />}
                    tabBarInactiveTextColor={'gray'}
                    tabBarActiveTextColor={'black'}
                    tabBarUnderlineStyle={{ height: 2 }}
                    style={{ flex: 1 }}
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
    }
});