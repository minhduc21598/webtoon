import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import { dataOriginal } from './Data';
import { getListTopManga } from '../services/HieuAPI';

class ScrollableRanking extends Component {
    constructor(props) {
        super(props);
        let { dataTab, data } = this.props;
        this.state = {
            page: data,
            items:[],
            isLoadmore: false,
            isLoading: true,
            refreshing: false,
        };
        this.pageIndex = 1;
        this.type= dataTab[0];
    }

    componentDidMount() {
        getListTopManga(this.type, this.pageIndex)
            .then(response => response.json())    // convert respense sang json
            .then(res => {               //da convert xong, ket qua la responseJson
                this.setState({
                    items: res.results,
                    isLoading: false
                })
            })
            .catch((error) => {                     // neu co loi thi chay o day
                console.error(error);
            });
    }

    onChangeTab = (item) => {
        let { onChange } = this.props;
        this.setState({ page: item.i });
        onChange && onChange(item.i);
    }

    renderTabBar = (style) => { 
        return <ScrollableTabBar 
            style={style} 
        />
    }

    render() {
        let { dataTab, styleTabBar, onPress } = this.props;
        return (
            <ScrollableTabView
                initialPage={this.state.page}
                renderTabBar={() => this.renderTabBar(styleTabBar)}
                tabBarInactiveTextColor={'gray'}
                tabBarActiveTextColor={'black'}
                tabBarUnderlineStyle={styles.tabBar}
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
                                                    <TouchableOpacity
                                                        style={styles.container}
                                                        key={index1}
                                                        onPress = {onPress}
                                                        activeOpacity = {1}
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
                                                    </TouchableOpacity>
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
    tabBar: { 
        height: 2 
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
