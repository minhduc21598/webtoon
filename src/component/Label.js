import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class Label extends Component {
    render() {
        const { onPress, title, disabled } = this.props;
        return (
            <TouchableOpacity
                style={styles.label}
                activeOpacity={1}
                onPress={onPress}
                disabled={disabled}
            >
                <Text style={styles.title}>{title}</Text>
                <Text style = {styles.arrow}>></Text>
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
    label: {
        width: '100%',
        height: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontWeight: '500',
        fontSize: 18,
        marginLeft: 20,
    },
    arrow: {
        color: 'black',
        fontWeight: '500',
        fontSize: 18,
        marginRight: 15
    }
});

export default Label;
