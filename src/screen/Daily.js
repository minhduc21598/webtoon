import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
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
                renderTabBar={() => <ScrollableTabBar />}
                style = {{flex: 1}}
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

                    <ScrollView>
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>
                            4 items
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                        >
                            <Text style={{ color: 'gray', fontSize: 15 }}>
                                Sort by interest
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
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
                        />
                    </View>
                </View>

                <View tabLabel='WED' style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>
                            4 items
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                        >
                            <Text style={{ color: 'gray', fontSize: 15 }}>
                                Sort by interest
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
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
                        />
                    </View>
                </View>

                <View tabLabel='THU' style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>
                            4 items
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                        >
                            <Text style={{ color: 'gray', fontSize: 15 }}>
                                Sort by interest
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
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
                        />
                    </View>
                </View>

                <View tabLabel='FRI' style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>
                            4 items
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                        >
                            <Text style={{ color: 'gray', fontSize: 15 }}>
                                Sort by interest
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
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
                        />
                    </View>
                </View>

                <View tabLabel='SAT' style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>
                            4 items
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                        >
                            <Text style={{ color: 'gray', fontSize: 15 }}>
                                Sort by interest
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
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
                        />
                    </View>
                </View>

                <View tabLabel='SUN' style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>
                            4 items
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                        >
                            <Text style={{ color: 'gray', fontSize: 15 }}>
                                Sort by interest
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
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
                        />
                    </View>
                </View>

                <View tabLabel='COMPLETED' style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>
                            4 items
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                        >
                            <Text style={{ color: 'gray', fontSize: 15 }}>
                                Sort by interest
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
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
                        />
                    </View>
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
    }
});
