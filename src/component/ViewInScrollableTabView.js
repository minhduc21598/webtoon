import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewSortBy from './ViewSortBy';
import Grid from './FlatGridItems';

class ViewInScrollableTabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            isLoadingmore: false,
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

    renderItem = ({ item, index }) => (
        <View style={styles.itemContainer} key={index}>
            <Image source={{ uri: item.uri }} style={styles.image} />
            <Text style={styles.txtGenre}>{item.genre}</Text>
            <Text style={styles.txtTitle}>{item.title}</Text>
            <Text style={styles.icon}>
                <Icon name='ios-heart' color='green' /> {item.watching}
            </Text>
        </View>
    )

    render() {
        const { data, tabName, styleTxtCounter } = this.props;
        return (
            <View tabLabel={tabName} style={styles.container}>
                <ViewSortBy
                    viewStyle={styleTxtCounter}
                    numberOfItem='10'
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
                    <Grid
                        itemDimension={110}
                        items={data}
                        spacing={7}
                        renderItem={this.renderItem}
                        onEndReachedThreshold={0.5}
                        onEndReached={this._onScrollDown}
                        listFooterComponent={this._renderLoadingIconBelow}
                    />
                </ScrollView>
            </View>

        );
    }
}

export default ViewInScrollableTabView;
const styles = StyleSheet.create({
    container:{ 
        flex: 1 
    },
    loading: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    itemContainer: {
        borderRadius: 5,
        width: 100,
        height: 160,
    },
    image:{ 
        height: 100, 
        width: 100 
    },
    txtGenre: { 
        fontSize: 10, 
        color: 'red' 
    },
    txtTitle: { 
        fontSize: 10, 
        color: 'purple' 
    },
    icon: { 
        fontSize: 10, 
        color: 'green' 
    }
});