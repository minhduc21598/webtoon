import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, RefreshControl, TouchableOpacity } from 'react-native';
import Header from '../component/Header';
import { getAllComic } from '../schema/saveComics';

class Liked extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: false
        };
    }

    componentDidMount = async () => {
        this.getData();
    }

    getData = async () => {
        const data = await getAllComic();
        this.setState({ data: data });
    }

    onRefresh = () => {
        this.setState({ refreshing: true });
        this.getData();
        this.setState({ refreshing: false });
    }

    gotoDetail = (item) => {
        if(item.type == 'TV' || item.type == 'Movie' || item.type == 'Oval' || item.type == 'Special'){
            this.props.navigation.navigate('DetailAnime', {id: item.mal_id});
            console.log(item)
        } else {
            this.props.navigation.navigate('DetailManga', {item: item});
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    firstTxt={'Liked'}
                    secondTxt={''}
                />
                <ScrollView
                    refreshControl = {
                        <RefreshControl
                            refreshing = {this.state.refreshing}
                            onRefresh={this.onRefresh}
                        />
                    }
                >
                    {
                        this.state.data.map(
                            (item, index) => {
                                return (
                                    <TouchableOpacity 
                                        style={styles.container}
                                        activeOpacity = {1} 
                                        key={index}
                                        onPress = {() => this.gotoDetail(item)}
                                    >
                                        <Image
                                            source={{ uri: item.image }}
                                            style={styles.image}
                                        />
                                        <View style={styles.infor}>
                                            <Text style={styles.type}>{item.type}</Text>
                                            <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        )
                    }
                </ScrollView>
            </View>
        );
    }
}

export default Liked;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    infor: {
        marginLeft: 15,
        justifyContent: 'center'
    },
    type: {
        color: 'red',
        fontSize: 20
    },
    title: {
        color: 'green',
        fontSize: 18,
        width: 200
    }
});
