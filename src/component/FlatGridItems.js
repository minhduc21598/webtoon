import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

class FlatGridItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { itemDimension, items, spacing, renderItem, onEndReachedThreshold, onEndReached, listFooterComponent } = this.props;
        return (
            <FlatGrid
                itemDimension={itemDimension}
                itemContainerStyle = {styles.itemContainer}
                items={items}
                spacing={spacing}
                renderItem={renderItem}
                onEndReachedThreshold={onEndReachedThreshold}
                onEndReached={onEndReached}
                ListFooterComponent={listFooterComponent}
            />
        );
    }
}

export default FlatGridItems;

const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'center'
    }
});