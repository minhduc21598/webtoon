import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
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
            <View>
                <StatusBar
                    backgroundColor='transparent'
                    barStyle='dark-content'
                />
                <View style={styles.headerContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}
                            activeOpacity={1}
                            onPress={firstOnPress}
                        >
                            <Text style={[styles.txtHeader, { color: this.state.colorFirstTxt }]}>{firstTxt}</Text>
                        </TouchableOpacity>
                        <Text style={styles.txtHeader}>|</Text>
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
                    <TouchableOpacity
                        onPress={() => alert("btn Search")}
                        activeOpacity={1}
                        style={{ marginRight: 15 }}
                    >
                        <Icon name='ios-search' size={30} color={'black'} />
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
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtHeader: {
        fontSize: 23,
        fontWeight: '500',
        color: 'black',
        marginLeft: 18
    },
});