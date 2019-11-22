import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = () => {
        SplashScreen.hide();
    }

    save = () => {
        let user1 = 'John';
        AsyncStorage.setItem('user', user1);
    }

    add = async () => {
        let user2 = 'Abc';
        const user = await AsyncStorage.getItem('user');
        AsyncStorage.setItem('user', user.concat(user2));
    }

    display = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            alert(user);
        } catch (error) {
            alert(error)
        }
    }

    render() {
        return (
            <View style = {styles.container}>
                <TouchableOpacity
                    onPress = {this.save}
                >
                    <Text> Save </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {this.add}
                >
                    <Text> Add </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {this.display}
                >
                    <Text> Display </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});