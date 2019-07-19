import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
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
                <Text style={{ color: 'gray', fontSize: 15 }}>
                    {numberOfItem}
                </Text>
                <TouchableOpacity
                    style={{ flexDirection: 'row', marginRight: 20 }}
                    activeOpacity={1}
                    onPress={() => alert("Modal")}
                >
                    <Text style={{ marginRight: 5, fontSize: 13 }}>{titleSort}</Text>
                    <Icon name='md-arrow-dropdown' size={20} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default ViewSortBy;