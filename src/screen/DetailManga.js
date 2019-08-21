import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FlatGridItems from '../component/FlatGridItems';
import { chars } from '../component/Data';
import { recomExem } from '../const';
import { getRecomManga, getMangaCharacters } from '../services/GetAPI';

class DetailManga extends Component {
    constructor(props) {
        super(props);
        let item = this.props.navigation.getParam('item');
        this.state = {
            item: item,
            isLoading: true,
            itemsRecom: [],
        };
    }

    componentDidMount() {
        getRecomManga(this.state.item.mal_id).then(
            response => response.json()
        ).then(
            res => {this.setState({ itemsRecom: res.recommendations, isLoading: false}); 
            console.log(res)}
        ).catch((error) => {
            console.error(error);
            return error;
        });
    }

    _renderLoading = () => {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )
    }

    onPressBackBtn = () => {
        this.props.navigation.goBack()
    }

    backToTopPage = () => {
        this.refs.ScrollView.scrollTo({ x: 0, y: 0, animated: true })
    }

    onPress2 = (item) =>{
        console.log(item)
        getRecomManga(item.mal_id).then(
            response => response.json()
        ).then(
            res => {this.setState({ item: item, itemsRecom: res.recommendations, isLoading: false}); 
            console.log(res)}
        ).catch((error) => {
            console.error(error);
            return error;
        });
    }

    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity 
                style={styles.containerRecom}
                key={index}
                onPress={() => this.onPress2(item)}
            >
                <Image
                    source={{ uri: item.image_url }}
                    style={styles.imageRecom}
                />
                <Text style={styles.titleRecom}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    onPress = () => {
        this.props.navigation.goBack();
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
                            <Icon name='ios-arrow-round-back' size={40} color={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.detail}>Detail</Text>
                    </View>
                    <ScrollView
                        ref='ScrollView'
                        onContentSizeChange={this.backToTopPage}
                    >
                        <Image source={{ uri: this.state.item.image_url }} style={styles.headerPic} />
                        <Text style={[styles.headerTxt, {textAlign: 'center'}]}>{this.state.item.title}</Text>
                        <Text style={styles.headerTxt}>Score: {this.state.item.score}</Text>
                        <Text style={styles.headerTxt}>Start of the series: {this.state.item.start_date}</Text>
                        <Text style={styles.headerTxt}>Members: {this.state.item.members}</Text>
                        <Text style={styles.headerTxt}>Recommendation</Text>
                        <FlatGridItems
                            itemDimension={130}
                            items={this.state.itemsRecom}
                            spacing={15}
                            renderItem={this.renderItem}
                        />
                    </ScrollView>
                </View>
        );
    }
}

export default DetailManga;
const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    backBtn: {
        position: 'absolute',
        height: 50, width: "100%",
        backgroundColor: 'rgba(0,0,0,0)',
    },
    headerPic: {
        height: 300,
        width: 200,
        alignSelf: 'center'
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginLeft: 20
    },
    detail: {
        fontSize: 25,
        color: 'white',
        marginLeft: 30
    },
    headerTxt: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
    containerRecom: {
        width: 150,
        height: 290
    },
    imageRecom: {
        width: 150,
        height: 240,
        borderRadius: 7
    },
    titleRecom: {
        color: 'white',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center'
    },
    charContainer: {
        alignItems: 'center',
        height: 210
    },
    img: {
        width: 100,
        height: 150,
        borderRadius: 7
    },
    txtContainer: {
        alignItems: 'center'
    },
    txtName: {
        color: 'white',
        textAlign: 'center'
    },
    txtRole: {
        color: 'white'
    },
});