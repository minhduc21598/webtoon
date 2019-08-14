import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Flat from '../component/FlatGridItems';
import {recomExem} from '../const';

class DetailAnime extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onPress = () => {
        this.props.navigation.goBack();
    }

    renderRecomItem = ({item, index}) => {
        return(
            <View style = {styles.containerRecom} key = {index}>
                <Image
                    source = {{uri: item.image_url}}
                    style = {styles.imageRecom}
                />
                <Text style = {styles.titleRecom}>{item.title}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style = {styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        activeOpacity = {1}
                        onPress = {this.onPress}
                        style = {styles.icon}
                    >
                        <Icon name = 'ios-arrow-round-back' size = {40} color = {'black'}/>
                    </TouchableOpacity>
                    <Text style = {styles.detail}>Detail</Text>
                </View>
                <ScrollView>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://cdn.myanimelist.net/images/anime/1059/101535.jpg?s=c09d572c8f0eb2199fc21541aaeb9cba' }}
                    />
                    <Text style = {styles.title}>Violet Evergarden</Text>
                    <Text style = {styles.type}>TV</Text>
                    <Text style = {styles.members}>Member: 566,740</Text>
                    <Text style = {styles.episodes}>Episodes: 13</Text>
                    <Text style = {styles.titleTxt}>Synopsis</Text>
                    <Text style = {styles.synopsis}>
                        The Great War finally came to an end after four long years of conflict; 
                        fractured in two, the continent of Telesis slowly began to flourish once again. 
                        Caught up in the bloodshed was Violet Evergarden, a young girl raised for the sole purpose of decimating enemy lines. 
                        Hospitalized and maimed in a bloody skirmish during the War's final leg, she was left with only words from the person she held dearest, but with no understanding of their meaning.
                    </Text>
                    <Text style = {styles.titleTxt}>Recommendations</Text>
                    <Flat
                        itemDimension = {130}
                        items = {recomExem}
                        spacing = {15}
                        renderItem = {this.renderRecomItem}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default DetailAnime;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(156,153,155,0.2)',
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        flex: 1
    },
    image: {
        width: 225,
        height: 319,
        alignSelf: 'center'
    },
    icon: {
        marginLeft: 20
    },
    detail: {
        fontSize: 25,
        color: 'black',
        marginLeft: 30
    },
    title: {
        fontSize: 25,
        color: 'green',
        marginLeft: 20,
        marginTop: 20,
        fontWeight: '500'
    },
    type: {
        fontSize: 18,
        color: 'red',
        marginLeft: 20,
        marginTop: 10
    },
    members: {
        fontSize: 16,
        color: 'blue',
        marginLeft: 20,
        marginTop: 10
    },
    episodes: {
        fontSize: 16,
        color: 'purple',
        marginLeft: 20,
        marginTop: 10
    },
    synopsis: {
        fontSize: 18,
        color: 'black',
        marginLeft: 20,
        marginTop: 10
    },
    titleTxt: {
        fontSize: 25,
        color: 'black',
        fontWeight: '500',
        marginLeft: 20,
        marginTop: 20
    },
    containerRecom: {
        width: 150, 
        height: 290
    },
    imageRecom: {
        width: 150, 
        height: 240
    },
    titleRecom: {
        color: 'black', 
        fontSize: 12, 
        marginTop: 5, 
        textAlign: 'center'
    }
});
