import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator, RefreshControl } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { FlatGrid } from 'react-native-super-grid';
import { dataOriginal } from '../component/Data';

class Daily extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _onScrollDown = () => { // bắt sự kiện người dùng kéo xuống
        if (this.state.isLoadingmore) return;
        this.setState({ isLoadingmore: true });

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
            <ScrollableTabView
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar/>}
                tabBarInactiveTextColor={'gray'}
                tabBarActiveTextColor={'black'}
                tabBarUnderlineStyle={{ height: 2 }}
            >
                <View tabLabel='MON' style={{ flex: 1 }}>
                    <View style={styles.txtCounter}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>
                            10 items
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                        >
                            <Text style={{ color: 'gray', fontSize: 15 }}>
                                Sort by interest
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
                    >
                        <FlatGrid
                            itemDimension={110}
                            items={dataOriginal}
                            spacing={7}
                            renderItem={({ item, index }) => (
                                <View style={styles.itemContainer}>
                                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                                </View>
                            )}
                            onEndReachedThreshold={0.5}
                            onEndReached={this._onScrollDown}
                            ListFooterComponent={this._renderLoadingIconBelow}
                        />
                    </ScrollView>
                </View>

                <View tabLabel='TUE' style={{ flex: 1 }}>
                    <View style={styles.txtCounter}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>
                            10 items
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                        >
                            <Text style={{ color: 'gray', fontSize: 15 }}>
                                Sort by interest
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
                    >
                        <FlatGrid
                            itemDimension={110}
                            items={dataOriginal}
                            spacing={7}
                            renderItem={({ item, index }) => (
                                <View style={styles.itemContainer}>
                                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                                </View>
                            )}
                            onEndReachedThreshold={0.5}
                            onEndReached={this._onScrollDown}
                            ListFooterComponent={this._renderLoadingIconBelow}
                        />
                    </ScrollView>
                </View>

                <View tabLabel='WED' style={{ flex: 1 }}>
                    <View style={styles.txtCounter}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>
                            10 items
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                        >
                            <Text style={{ color: 'gray', fontSize: 15 }}>
                                Sort by interest
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
                    >
                        <FlatGrid
                            itemDimension={110}
                            items={dataOriginal}
                            spacing={7}
                            renderItem={({ item, index }) => (
                                <View style={styles.itemContainer}>
                                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                                </View>
                            )}
                            onEndReachedThreshold={0.5}
                            onEndReached={this._onScrollDown}
                            ListFooterComponent={this._renderLoadingIconBelow}
                        />
                    </ScrollView>
                </View>

                <View tabLabel='THU' style={{ flex: 1 }}>
                    <View style={styles.txtCounter}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>
                            10 items
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                        >
                            <Text style={{ color: 'gray', fontSize: 15 }}>
                                Sort by interest
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
                    >
                        <FlatGrid
                            itemDimension={110}
                            items={dataOriginal}
                            spacing={7}
                            renderItem={({ item, index }) => (
                                <View style={styles.itemContainer}>
                                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                                </View>
                            )}
                            onEndReachedThreshold={0.5}
                            onEndReached={this._onScrollDown}
                            ListFooterComponent={this._renderLoadingIconBelow}
                        />
                    </ScrollView>
                </View>

                <View tabLabel='FRI' style={{ flex: 1 }}>
                    <View style={styles.txtCounter}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>
                            10 items
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                        >
                            <Text style={{ color: 'gray', fontSize: 15 }}>
                                Sort by interest
                        </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
                    >
                        <FlatGrid
                            itemDimension={110}
                            items={dataOriginal}
                            spacing={7}
                            renderItem={({ item, index }) => (
                                <View style={styles.itemContainer}>
                                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                                </View>
                            )}
                            onEndReachedThreshold={0.5}
                            onEndReached={this._onScrollDown}
                            ListFooterComponent={this._renderLoadingIconBelow}
                        />
                    </ScrollView>
                </View>

                <View tabLabel='SAT' style={{ flex: 1 }}>
                    <View style={styles.txtCounter}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>
                            10 items
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                        >
                            <Text style={{ color: 'gray', fontSize: 15 }}>
                                Sort by interest
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
                    >
                        <FlatGrid
                            itemDimension={110}
                            items={dataOriginal}
                            spacing={7}
                            renderItem={({ item, index }) => (
                                <View style={styles.itemContainer}>
                                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                                </View>
                            )}
                            onEndReachedThreshold={0.5}
                            onEndReached={this._onScrollDown}
                            ListFooterComponent={this._renderLoadingIconBelow}
                        />
                    </ScrollView>
                </View>

                <View tabLabel='SUN' style={{ flex: 1 }}>
                    <View style={styles.txtCounter}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>
                            10 items
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                        >
                            <Text style={{ color: 'gray', fontSize: 15 }}>
                                Sort by interest
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
                    >
                        <FlatGrid
                            itemDimension={110}
                            items={dataOriginal}
                            spacing={7}
                            renderItem={({ item, index }) => (
                                <View style={styles.itemContainer}>
                                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                                </View>
                            )}
                            onEndReachedThreshold={0.5}
                            onEndReached={this._onScrollDown}
                            ListFooterComponent={this._renderLoadingIconBelow}
                        />
                    </ScrollView>
                </View>

                <View tabLabel='COMPLETED' style={{ flex: 1 }}>
                    <View style={styles.txtCounter}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>
                            10 items
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                        >
                            <Text style={{ color: 'gray', fontSize: 15 }}>
                                Sort by interest
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
                    >
                        <FlatGrid
                            itemDimension={110}
                            items={dataOriginal}
                            spacing={7}
                            renderItem={({ item, index }) => (
                                <View style={styles.itemContainer}>
                                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                                </View>
                            )}
                            onEndReachedThreshold={0.5}
                            onEndReached={this._onScrollDown}
                            ListFooterComponent={this._renderLoadingIconBelow}
                        />
                    </ScrollView>
                </View>
            </ScrollableTabView>
        );
    }
}

export default Daily;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        borderRadius: 5,
        width: 100,
        height: 160,
    },
      
    txtCounter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 12,
        height: 20
    },
    loading: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
});
