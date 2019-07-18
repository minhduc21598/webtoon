import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class NextItem extends Component {
    render() {
        const { onPress, title, disabled } = this.props;
        return (
            <TouchableOpacity
                style={{
                    width: '100%',
                    height: 48,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
                activeOpacity={1}
                // onPress={() => this.props.navigation.navigate("ORIGINALS")}
                onPress={onPress}
                disabled={disabled}
            >
                <Text
                    style={{
                        color: 'black',
                        fontWeight: '500',
                        fontSize: 18,
                        marginLeft: 20,
                    }}
                >{title}</Text>
                <Text
                    style={{
                        color: 'black',
                        fontWeight: '500',
                        fontSize: 18,
                        marginRight: 15
                    }}
                >></Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default NextItem;
