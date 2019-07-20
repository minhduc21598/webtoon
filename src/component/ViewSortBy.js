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
        const { viewStyle, numberOfItem ,titleSort } = this.props;
        return (
            <View style={viewStyle}>
                <Text style = {styles.infor}>
                    {numberOfItem} items
                </Text>
                <TouchableOpacity
                    style = {styles.modal}
                    activeOpacity={1}
                    onPress={() => alert("Modal")}
                >
                    <Text style = {styles.titleSort}>{titleSort}</Text>
                    <Icon name='md-arrow-dropdown' size={20} />
                </TouchableOpacity>
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