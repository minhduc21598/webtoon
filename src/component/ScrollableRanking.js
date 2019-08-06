import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import { dataOriginal } from './Data';

class ScrollableRanking extends Component {
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

    render() {
        let { dataTab, styleTabBar } = this.props;
        return (
            <ScrollableTabView
                initialPage={this.state.page}
                renderTabBar={() => <ScrollableTabBar style={styleTabBar} />}
                tabBarInactiveTextColor={'gray'}
                tabBarActiveTextColor={'black'}
                tabBarUnderlineStyle={{ height: 2 }}
                onChangeTab={this.onChangeTab}
            >
                {
                    dataTab.map(
                        (item, index) => {
                            return (
                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                    tabLabel={item} key={index}
                                >
                                    {
                                        dataOriginal.map(
                                            (item1, index1) => {
                                                return (
                                                    <View
                                                        style={styles.container}
                                                        key={index1}
                                                    >
                                                        <Image
                                                            style={styles.image}
                                                            source={{ uri: item1.uri }}
                                                        />
                                                        <View>
                                                            <Text style={styles.title}>{item1.title}</Text>
                                                            <Text style={styles.genre}>{item1.genre}</Text>
                                                            <Text style={styles.like}><Icon name='ios-heart' /> {item1.watching}</Text>
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

export default ScrollableRanking;

const styles = StyleSheet.create({
    scrollTab: {
        width: 310,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderTopColor: '#d0cdcd'
    },
    container: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 30
    },
    title: {
        flex: 1,
        marginLeft: 15,
        color: 'purple',
        fontSize: 15
    },
    genre: {
        flex: 1,
        marginLeft: 15,
        color: 'red'
    },
    like: {
        flex: 1,
        marginLeft: 15,
        color: 'green'
    }
});
