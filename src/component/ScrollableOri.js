import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewSort from '../component/ViewSortBy';
import { dataAnime } from '../const';

class ScrollableOri extends Component {
    constructor(props) {
        super(props);
        let { data } = this.props;
        this.state = {
            page: data
        };
    }

    onChangeTab = (item) => {
        let { onChange } = this.props;
        this.setState({ page: item.i });
        onChange && onChange(item.i);
    }

    renderTabBar = () => <ScrollableTabBar style={styles.scrollTab} />
    
    render() {
        return (
            <ScrollableTabView
                initialPage={this.state.page}
                renderTabBar={this.renderTabBar}
                tabBarInactiveTextColor={'gray'}
                tabBarActiveTextColor={'black'}
                tabBarUnderlineStyle={{ height: 2 }}
                onChangeTab={this.onChangeTab}
            >
                {
                    dataAnime.map(
                        (item, index) => {
                            return (
                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                    tabLabel={item} key={index}
                                >
                                    
                                </ScrollView>
                            )
                        }
                    )
                }
            </ScrollableTabView>
        );
    }
}

export default ScrollableOri;

const styles = StyleSheet.create({
    scrollTab: {
        width: 310,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderTopColor: '#d0cdcd'
    },
    headerTab: {
        width: '100%',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    subItemView: {
        width: 320,
        height: 120,
        marginTop: 15,
        marginLeft: 20,
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 5
    },
    boxContain: {
        marginLeft: 20,
        width: 180
    },
    itemName: {
        color: 'black',
        fontSize: 16
    },
    like: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sub: {
        color: '#17ee51',
        marginLeft: 5,
        fontSize: 13
    },
    sum: {
        fontSize: 11
    },
});
