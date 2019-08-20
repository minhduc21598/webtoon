import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Flat from '../component/FlatGridItems';
import { getRecomAnime } from '../services/GetAPI';

class DetailAnime extends Component {
    constructor(props) {
        super(props);
        let item = this.props.navigation.getParam('item');
        this.state = {
            item: item,
            isLoading: true,
            itemsRecom: []
        };
    }

    componentDidMount = () => {
        getRecomAnime(this.state.item.mal_id).then(
            response => response.json()
        ).then(
            res => this.setState({ itemsRecom: res.recommendations, isLoading: false })
        ).catch((error) => {
            console.error(error);
            return error;
        });
    }

    shouldComponentUpdate = (nextState) => {
        if (nextState.item != this.state.item) return true;
        return false;
    }

    onPress = () => {
        this.props.navigation.goBack();
    }

    onPress2 = (item) => {
        getRecomAnime(item.mal_id).then(
            response => response.json()
        ).then(
            res => this.setState({ item: item, itemsRecom: res.recommendations, isLoading: false })
        ).catch((error) => {
            console.error(error);
            return error;
        });
    }

    renderRecomItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.containerRecom}
                onPress={() => this.onPress2(item)}
                key={index}
            >
                <Image
                    source={{ uri: item.image_url }}
                    style={styles.imageRecom}
                />
                <Text style={styles.titleRecom}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    renderLoading = () => {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size='large' color='black' />
            </View>
        )
    }
    render() {
        return (
            (this.state.isLoading) ? this.renderLoading() :
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={this.onPress}
                            style={styles.icon}
                        >
                            <Icon name='ios-arrow-round-back' size={40} color={'black'} />
                        </TouchableOpacity>
                        <Text style={styles.detail}>Detail</Text>
                    </View>
                    <ScrollView>
                        <Image
                            style={styles.image}
                            source={{ uri: this.state.item.image_url }}
                        />
                        <Text style={styles.title}>{this.state.item.title}</Text>
                        <Text style={styles.type}>{this.state.item.type}</Text>
                        <Text style={styles.members}>Member: {this.state.item.members}</Text>
                        <Text style={styles.episodes}>Episodes: {this.state.item.episodes}</Text>
                        <Text style={styles.titleTxt}>Synopsis</Text>
                        <Text style={styles.synopsis}>{this.state.item.synopsis}</Text>
                        <Text style={styles.titleTxt}>Recommendations</Text>
                        <Flat
                            itemDimension={130}
                            items={this.state.itemsRecom}
                            spacing={5}
                            renderItem={this.renderRecomItem}
                        />
                    </ScrollView>
                </View>
        );
    }
}

export default DetailAnime;

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
        width: 170,
        height: 290
    },
    imageRecom: {
        width: 170,
        height: 240,
        borderRadius: 8
    },
    titleRecom: {
        color: 'green',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center',
        fontWeight: '500'
    }
});
