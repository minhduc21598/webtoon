import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewSort from '../component/ViewSortBy';
import { dataGenresOri } from '../component/Data';

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
        this.setState({page: item.i});
        onChange && onChange(item.i);
    }

    shouldComponentUpdate = (nextState) => {
        if(nextState.page != this.state.page){
            return true;
        }
        return false;
    }

    render() {
        return (
            <ScrollableTabView
                initialPage={this.state.page}
                renderTabBar={() => <ScrollableTabBar style={styles.scrollTab} />}
                tabBarInactiveTextColor={'gray'}
                tabBarActiveTextColor={'black'}
                tabBarUnderlineStyle={{ height: 2 }}
                onChangeTab = {this.onChangeTab}
            >
                {
                    dataGenresOri.map(
                        (item, index) => {
                            return (
                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                    tabLabel={item.title} key={index}
                                >
                                    <ViewSort
                                        viewStyle={styles.headerTab}
                                        numberOfItem={item.quantity}
                                        titleSort={'Sort by Popularity'}
                                    />
                                    {
                                        item.listObject.map(
                                            (subitem, subindex) => {
                                                return (
                                                    <View
                                                        style={styles.subItemView}
                                                        key={subindex}
                                                    >
                                                        <Image
                                                            source={{ uri: subitem.image }}
                                                            style={styles.image}
                                                        />
                                                        <View style={styles.boxContain}>
                                                            <Text style={styles.itemName}>{subitem.name}</Text>
                                                            <View style={styles.like}>
                                                                <Icon name='ios-heart' size={14} color={'#17ee51'} />
                                                                <Text style={styles.sub}>{subitem.sub}</Text>
                                                            </View>
                                                            <Text style={styles.sum}>{subitem.sum}</Text>
                                                        </View>
                                                    </View>
                                                )
                                            }
                                        )
                                    }
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
