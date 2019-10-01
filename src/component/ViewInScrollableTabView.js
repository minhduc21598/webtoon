import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, RefreshControl, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Grid from './FlatGridItems';
import { connect } from 'react-redux';

class ViewInScrollableTabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                <Text numberOfLines={2} style={styles.txtTitle}>{item.title}</Text>
                <Text style={styles.icon}>
                    <Icon name='ios-heart' color='green' /> {item.score}
                </Text>
            </TouchableOpacity>
        )
    }

    render() {
        const { refreshing, onRefresh, tabLabel, onEndReachedThreshold, onEndReached, listFooterComponent } = this.props;
        return (
            <View tabLabel={tabLabel} style={styles.container}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <Grid
                        itemDimension={110}
                        items={this.props.data}
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

const mapStateToProps = (state) => {
    return {
        data: state.UserReducer
    }
}

export default connect(mapStateToProps, null)(ViewInScrollableTabView);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {
        width: 100,
        height: 160,
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
        fontSize: 13,
        color: 'purple',
    },
    icon: {
        fontSize: 10,
        color: 'green'
    }
});