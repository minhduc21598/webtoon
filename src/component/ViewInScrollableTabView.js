import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewSortBy from './ViewSortBy';
import Grid from './FlatGridItems';

class ViewInScrollableTabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            isLoading: true,
            isLoadMore: false
        };
    }

    _onPressItem = (item) => {//bat su kien click vao item
        console.log("Click item", item);
        this.props.navigation.navigate("DetailAnime", {

        });
    }

    _onScrollDown = () => { // bắt sự kiện người dùng kéo xuống
        if (this.state.isLoadMore) return;
        this.setState({ isLoadMore: true });
    }

    renderItem = ({ item, index }) => (
        <View style={styles.itemContainer} key={index}>
            <Image source={{ uri: item.image_url }} style={styles.image} />
            <Text style={styles.txtTitle}>{item.title}</Text>
            {/* <Text style={styles.txtGenre}>{item.genres[0].name}</Text> */}
        </View>
    )



    render() {
        const { data, number, tabName, styleTxtCounter, renderLoadingIconBelow } = this.props;
        return (
            <View tabLabel={tabName} style={styles.container}>
                <ViewSortBy
                    viewStyle={styleTxtCounter}
                    numberOfItem={number}
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
                        listFooterComponent={renderLoadingIconBelow}
                    />
                </ScrollView>

            </View>

        );
    }
}

export default ViewInScrollableTabView;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loadingAtStart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    image: {
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