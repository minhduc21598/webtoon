import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FlatGridItems from '../component/FlatGridItems';
import { chars } from '../component/Data';
import { recomExem } from '../const';

class DetailManga extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
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

    renderItem = ({ item, index }) => {
        return (
            <View style={styles.containerRecom} key={index}>
                <Image
                    source={{ uri: item.image_url }}
                    style={styles.imageRecom}
                />
                <Text style={styles.titleRecom}>{item.title}</Text>
            </View>
        )
    }

    renderChar = ({ item, index }) => {
        return (
            <View style={styles.charContainer} key={index}>
                <Image source={{ uri: item.image_url }} style={styles.img} />
                <View style={styles.txtContainer}>
                    <Text style={styles.txtName}>{item.name}</Text>
                    <Text style={styles.txtRole}>{item.role}</Text>
                </View>
            </View>
        )
    }

    onPress = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
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
                <ScrollView
                    ref='ScrollView'
                    onContentSizeChange={this.backToTopPage}
                >
                    <Image source={{ uri: "https://cdn.myanimelist.net/images/manga/1/157569l.jpg" }} style={styles.headerPic} />
                    <Text style={styles.headerTxt}>Berserk</Text>
                    <Text style={styles.headerTxt}>Vote</Text>
                    <Text style={styles.headerTxt}>Characters</Text>
                    <FlatGridItems
                        itemDimension={110}
                        items={chars}
                        spacing={7}
                        renderItem={this.renderChar}
                    />
                    <Text style={styles.headerTxt}>Recommendatioin</Text>
                    <FlatGridItems
                        itemDimension={130}
                        items={recomExem}
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
        height: 225,
        width: 158,
        alignSelf: 'center'
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginLeft: 20
    },
    detail: {
        fontSize: 25,
        color: 'black',
        marginLeft: 30
    },
    headerTxt: {
        alignSelf: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: '700'
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