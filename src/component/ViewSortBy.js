import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

class ViewSortBy extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { viewStyle, numberOfItem } = this.props;
        return (
            <View style={viewStyle}>
                <Text style = {styles.infor}>
                    {numberOfItem} items
                </Text>
            </View>
        );
    }
}

export default ViewSortBy;

const styles = StyleSheet.create({
    infor:{
        color: 'black', 
        fontSize: 18, 
        marginLeft: 20
    },
    modal: {
        flexDirection: 'row', 
        marginRight: 20
    },
    titleSort: {
        marginRight: 5, 
        fontSize: 13
    }
});