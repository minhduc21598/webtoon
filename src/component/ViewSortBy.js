import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
        color: 'gray', 
        fontSize: 15, 
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