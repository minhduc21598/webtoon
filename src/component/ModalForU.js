import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { modalComponent1, modalComponent2 } from './Data';
const { width, height } = Dimensions.get('window');

class ModalForU extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: true,
        };
    }

    hideModal = () => {
        this.setState({hide: true})
    }

    notRender = () => {
        return(
            <View
                style = {{
                    width: width,
                    height: height,
                    marginBottom: -height,
                    zIndex: 0
                }}
            />
        )
    }
    
    render() {
        return (
            (this.state.hide)
                ? <View></View> :
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View style={[styles.row, { marginTop: 20 }]}>
                            {
                                modalComponent1.map(
                                    (item, index) => {
                                        return (
                                            <TouchableOpacity
                                                style={styles.boxBtn} key={index}
                                                onPress={() => alert(`${item.title}`)}
                                            >
                                                <View style={[styles.btn, { backgroundColor: item.backgroundColor }]}>
                                                    <Icon name={item.icon} size={30} color={item.color} />
                                                </View>
                                                <Text style={styles.text}>{item.title}</Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                )
                            }
                        </View>
                        <View style={[styles.row, { marginTop: 8 }]}>
                            {
                                modalComponent2.map(
                                    (item, index) => {
                                        return (
                                            <TouchableOpacity
                                                style={styles.boxBtn} key={index}
                                                onPress={() => alert(`${item.title}`)}
                                            >
                                                <View style={[styles.btn, { backgroundColor: item.backgroundColor }]}>
                                                    <Icon name={item.icon} size={30} color={item.color} />
                                                </View>
                                                <Text style={styles.text}>{item.title}</Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                )
                            }
                        </View>
                        <TouchableOpacity
                            style={styles.btnCancel}
                            activeOpacity={1}
                            onPress = {this.hideModal}
                        >
                            <Text style={styles.textCancel}>CANCEL</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style = {styles.hide}
                        onPress = {this.hideModal}
                    />
                </View>
        );
    }
}

export default ModalForU;

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    content: {
        width: 280,
        height: 250,
        zIndex: 1,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    row: {
        width: 280,
        height: 85,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    boxBtn: {
        width: 75,
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: 60,
        height: 60,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnCancel: {
        width: 280,
        height: 45,
        backgroundColor: 'black',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 7
    },
    hide:{
        position: 'absolute',
        width: width,
        height: height,
        zIndex: 0
    },
    text: {
        color: 'black',
        marginTop: 5
    },
    textCancel: {
        color: 'white',
        fontSize: 20
    }
});
