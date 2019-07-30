import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { recentDataScreenMy } from '../component/Data';

class OldSeason extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ""
        };
    }

    dateChange = (date) => {
        this.setState({ date: date })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollableTabView
                    initialPage={0}
                    renderTabBar={() => <ScrollableTabBar />}
                    tabBarInactiveTextColor={'gray'}
                    tabBarActiveTextColor={'black'}
                    tabBarUnderlineStyle={{ height: 2 }}
                    style={{ flex: 1 }}
                >
                    <ScrollView tabLabel='Recent'>
                        {
                            recentDataScreenMy.map(
                                (item, index) => {
                                    return (
                                        <View style={{ flexDirection: 'row', width: "100%" }} key={index}>
                                            <Image source={{ uri: item.uri }} style={styles.imgRecent} />
                                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                                <Text style={styles.txtRecent}> {item.title} </Text>
                                                <Text style={styles.txtRecent}> {item.rank} </Text>
                                            </View>
                                        </View>
                                    )
                                }
                            )
                        }
                    </ScrollView>
                    <View tabLabel='Subcribed' style={styles.tabs}>
                        <Text style={styles.txtTabs}>
                            No subcribed
                        </Text>
                    </View>
                    <View tabLabel='Downloads' style={styles.tabs}>
                        <Text style={styles.txtTabs}>
                            No downloads
                        </Text>
                    </View>
                    <View tabLabel='Fast Pass' style={styles.tabs}>
                        <Text style={styles.txtTabs}>
                            Enable fast pass for better experience
                        </Text>
                    </View>
                    <View tabLabel='Comment' style={styles.tabs}>
                        <Text style={styles.txtTabs}>
                            No comments
                        </Text>
                    </View>
                </ScrollableTabView>
            </View>
        );
    }
}

export default OldSeason;
const styles = StyleSheet.create({
    txtRecent: {
        color: 'red',
        fontSize: 20,
        margin: 4,
    },
    tabs: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    txtTabs: {
        color: 'red',
        fontSize: 25,
        textAlign: 'center'
    },
    recentView: {
        flex: 1,
        height: 500
    },
    imgRecent: {
        width: 100,
        height: 100
    },
});