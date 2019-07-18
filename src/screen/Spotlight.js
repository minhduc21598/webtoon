import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, ActivityIndicator, RefreshControl } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { recommendationDataScreenMy, canvasDataPick1, canvasDataPick2, iconCanvas, carouselData } from '../component/Data';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from '../component/SlideItemCarousel';
import TitleChanges from '../component/TitleChanges';

class Spotlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            isLoading: true
        };
    }

    onSnapToItem = (index) => {
        return index;
    }

    _onRefresh = () => { //bat su kien user muon reload lai data list
        console.log("_onRefresh");
        this.setState({ refreshing: true })
        setTimeout(() => { this.setState({ refreshing: false }) }, 500)
    }

    _renderFooter = () => {//hien thi loading o cuoi list view
        if (this.state.isLoadmore) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator color="#fff" size="large" />
                </View>
            )
        }
        return null;
    }

    _renderLoading = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )
    }

    renderItem = ({ item }) => {
        return (
            item.lists.map(
                (item1, index) => {
                    return (
                        <View style={styles.detailFirstView} key={index} >
                            <Text style={{ color: 'purple', fontSize: 15, marginRight: 10 }}> {item1.rank} </Text>
                            <Image source={{ uri: item1.uri }} style={{ height: 60, width: 60, borderRadius: 10 }} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.txtWeekly}>{item1.title}</Text>
                                <Text style={styles.txtWeekly}>{item1.likes}</Text>
                            </View>
                        </View>
                    )
                }
            )
        )
    }

    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            >
                <Text style={[styles.txtTitle, { backgroundColor: "#e5e4e4" }]}> Recommendation</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ backgroundColor: "#e5e4e4", height: 190 }}
                >
                    {
                        recommendationDataScreenMy.map(
                            (item, index) => {
                                return (
                                    <ImageBackground source={{ uri: item.uri }} style={styles.imgBack} key={index}>
                                        <Text style={styles.txtRec}>
                                            {item.genre}
                                        </Text>
                                        <Text style={styles.txtRec}>
                                            {item.title}
                                        </Text>
                                    </ImageBackground>
                                )
                            }
                        )}
                </ScrollView>
                <TitleChanges 
                    index ={this.onSnapToItem}
                    data = {carouselData}
                    element='titles'
                    style={styles.titleCarouselTxt}
                />
                <Carousel
                    data={carouselData}
                    renderItem={this.renderItem}
                    onSnapToItem={this.onSnapToItem}
                />
                <Text style={styles.txtTitle}> Fresh Picks </Text>
                <View style={{ marginTop: 5, height: 130, flexDirection: 'row', width: "100%" }}>
                    {
                        canvasDataPick1.map(
                            (item, index) => {
                                return (
                                    <View style={styles.picks} key={index} >
                                        <Image source={{ uri: item.uri }} style={{ height: 70, width: 70, borderRadius: 10 }} />
                                        <Text style={styles.txtWeekly}>{item.genre}</Text>
                                        <Text style={[styles.txtWeekly, { textAlign: "center" }]}>{item.title}</Text>
                                    </View>
                                )
                            }
                        )
                    }
                </View>
                <View style={{ height: 140, flexDirection: 'row', width: "100%" }}>
                    {
                        canvasDataPick2.map(
                            (item, index) => {
                                return (
                                    <View style={styles.picks} key={index} >
                                        <Image source={{ uri: item.uri }} style={{ height: 70, width: 70, borderRadius: 10 }} />
                                        <Text style={styles.txtWeekly}>{item.genre}</Text>
                                        <Text style={[styles.txtWeekly, { textAlign: "center" }]}>{item.title}</Text>
                                    </View>
                                )
                            }
                        )
                    }
                </View>
                <TouchableOpacity
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                    activeOpacity={1}
                    onPress={() => alert("GenresCan")}
                >
                    <Text style={styles.txtTitle}>Genres</Text>
                    <Text style={[styles.txtTitle, { marginRight: 15 }]}>></Text>
                </TouchableOpacity>
                <FlatGrid
                    itemDimension={70}
                    items={iconCanvas}
                    spacing={2}
                    style={{ marginLeft: 15, marginTop: 10, marginBottom: 15 }}
                    renderItem={({ item, index }) => (
                        <View style={{ width: 70, height: 90, alignItems: 'center' }} key={index}>
                            <TouchableOpacity
                                style={styles.itemContainer}
                                onPress={() => alert(`${item.name}`)}
                            >
                                <Icon name={item.icon} color={'black'} size={35} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 12, color: 'black' }}> {item.name} </Text>
                        </View>
                    )}
                />
            </ScrollView>
        );
    }
}

export default Spotlight;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgBack: {
        opacity: 0.8,
        width: 120,
        height: 180,
        borderRadius: 50,
        marginLeft: 10,
        justifyContent: 'flex-end'
    },
    txtRec: {
        color: 'black',
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center'
    },
    firstView: {
        height: 430,
        width: "100%"
    },
    detailFirstView: {
        alignItems: 'center',
        flexDirection: 'row',
        width: "100%",
        margin: 4
    },
    txtWeekly: {
        color: 'purple',
        fontSize: 10,

    },
    secondView: {
        height: 300,
        width: "100%"
    },
    txtTitle: {
        height: 40,
        fontSize: 18,
        fontWeight: '500',
        paddingLeft: 17,
        paddingTop: 10,
        paddingBottom: 5,
        color: 'black'
    },
    picks: {
        flexDirection: 'column',
        margin: 4,
        height: 110,
        width: "33%",
        alignItems: 'center'
    },
    itemContainer: {
        width: 70,
        height: 70,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e3e3e3'
    },
    titleCarouselTxt:{
        fontSize: 25, 
        marginLeft: 17, 
        marginTop: 10, 
        color:'black'
}
});