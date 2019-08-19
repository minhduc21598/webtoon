import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorFirstTxt: "black",
            colorSecondTxt: "gray"
        };
    }

    render() {
        const { firstTxt, secondTxt, firstOnPress, secondOnPress } = this.props;
        return (
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{ alignItems: 'center' }}
                        activeOpacity={1}
                        onPress={firstOnPress}
                    >
                        <Text style={[styles.txtHeader, { color: this.state.colorFirstTxt }]}>{firstTxt}</Text>
                    </TouchableOpacity>
                    <Text style={styles.txtHeader}>{(secondTxt == '') ? '' : '|'}</Text>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center'
                        }}
                        activeOpacity={1}
                        onPress={secondOnPress}
                    >
                        <Text style={[styles.txtHeader, { color: this.state.colorSecondTxt }]}>{secondTxt}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Header;
const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: (Platform.OS === 'ios') ? 80 : 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: (Platform.OS === 'ios')? 20: 0
    },
    txtHeader: {
        fontSize: 23,
        fontWeight: '500',
        color: 'black',
        marginLeft: 18
    },
});