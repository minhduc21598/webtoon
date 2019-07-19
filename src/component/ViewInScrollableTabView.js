import React, { Component } from 'react';
import { View, Text,StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator, RefreshControl } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewSortBy from './ViewSortBy';

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
                <ViewSortBy 
                    viewStyle={styleTxtCounter} 
                    numberOfItem='10 items'
                    titleSort='Sort by Interest'    
                />
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
                            <View style={styleFlatGrid} key={index}>
                                <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                                <Text style={{ fontSize: 10, color: 'red' }}>{item.genre}</Text>
                                <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                                <Text style={{ fontSize: 10, color: 'green' }}>
                                    <Icon name='ios-heart' color='green' /> {item.likes}
                                </Text>
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