import React, { Component } from 'react';
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