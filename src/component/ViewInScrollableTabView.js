import React, { Component } from 'react';
import { View, Text,StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator, RefreshControl } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

class ViewInScrollableTabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            isLoading: true
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
        const { data,tabName, styleTxtCounter, styleFlatGrid } = this.props;
        return (
            <View tabLabel={tabName} style={{ flex: 1 }}>
                <View style={{...styleTxtCounter}}>
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
                        items={data}
                        spacing={7}
                        renderItem={({ item, index }) => (
                            <View style={{...styleFlatGrid}} key={index}>
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

        );
    }
}

export default ViewInScrollableTabView;
const styles = StyleSheet.create({
    
    loading: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
});