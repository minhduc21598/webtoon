import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, RefreshControl, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Grid from './FlatGridItems';

class ViewInScrollableTabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: true,
            loadingMore: false,
            refreshing: false,
        };
    }

    componentDidMount = () => {
        let { getData } = this.props;
        getData();
    }

    renderItem = ({ item, index }) => {
        let { onPress } = this.props;
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                key={index}
                onPress={() => onPress && onPress(item)}
                activeOpacity={1}
            >
                <Image source={{ uri: item.image_url }} style={styles.image} />
                <Text style={styles.txtGenre}>{item.type}</Text>
                <Text style={styles.txtTitle}>{item.title}</Text>
                <Text style={styles.icon}>
                    <Icon name='ios-heart' color='green' /> {item.score}
                </Text>
            </TouchableOpacity>
        )
    }

    onRefresh = () => {
        this.setState({ refreshing: true });
        let { getData } = this.props;
        getData();
        this.setState({ refreshing: false });
    }

    renderLoading = () => {
        return (
            <View style={styles.loadingAtStart}>
                <ActivityIndicator size="large" color='black' />
            </View>
        )
    }

    render() {
        const { tabLabel, onEndReachedThreshold, onEndReached, listFooterComponent } = this.props;
        return (
            (this.state.isLoading) ? this.renderLoading() :
                <View tabLabel={tabLabel} style={styles.container}>
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this.onRefresh}
                            />
                        }
                    >
                        <Grid
                            itemDimension={110}
                            items={this.state.items}
                            spacing={7}
                            renderItem={this.renderItem}
                            onEndReachedThreshold={onEndReachedThreshold}
                            onEndReached={onEndReached}
                            listFooterComponent={listFooterComponent}
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
    loadingMore: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    itemContainer: {
        width: 100,
        height: 200,
        flex: 1
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 5
    },
    txtGenre: {
        fontSize: 10,
        color: 'red'
    },
    txtTitle: {
        fontSize: 10,
        color: 'purple',
    },
    icon: {
        fontSize: 10,
        color: 'green'
    }
});