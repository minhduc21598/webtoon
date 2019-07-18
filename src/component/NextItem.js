//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

// create a component
class NextItem extends Component {
    render() {
        const { onPress, title, disabled, style, styleText } = this.props;
        return (
            <TouchableOpacity
                style={{
                    width: '100%',
                    height: 48,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    ...style
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
                        ...styleText
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

// define your styles
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
