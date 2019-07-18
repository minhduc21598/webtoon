import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, StatusBar, ActivityIndicator, RefreshControl, Dimensions } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Carousel from 'react-native-snap-carousel';
import { recommendationDataScreenMy, canvasDataPick1, canvasDataPick2, iconCanvas, carouselData } from '../component/Data';
import Icon from 'react-native-vector-icons/Ionicons';
class Spotlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            isLoading: true
        };
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
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'purple', fontSize: 10 }}> {item1.rank} </Text>
                            </View>
                            <Image source={{ uri: item1.uri }} style={{ height: 60, width: 60, borderRadius: 10 }} />
                            <View style={{ justifyContent: 'center' }}>
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

                <View style={styles.recommendContainer}>
                    <Text style={styles.txtTitle}> Recommendation</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            recommendationDataScreenMy.map(
                                (item, index) => {
                                    return (
                                        <ImageBackground source={{ uri: item.uri }} style={styles.imgBack} key = {index}>
                                            <View style={{ width: "100%", height: 130 }}></View>
                                            <View style={{ width: "100%", height: 50 }}>
                                                <Text style={styles.txtRec}>
                                                    {item.genre}
                                                </Text>
                                                <Text style={styles.txtRec}>
                                                    {item.title}
                                                </Text>
                                            </View>
                                        </ImageBackground>
                                    )
                                }
                            )}
                    </ScrollView>
                </View>
                <View style={[styles.firstView]}>
                    <Text style={{ fontSize: 30, marginLeft: 17, marginTop: 10, color: 'black' }}>
                        Weekly
          </Text>
                    <Carousel
                        data={carouselData}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={280}
                        inactiveSlideOpacity={1}
                        renderItem={this.renderItem}
                        inactiveSlideScale={0.85}
                        slideStyle={{ marginLeft: 30 }}
                        activeSlideAlignment={'start'}
                    />
                </View>

                <View style={{ marginTop: 2 }}>
                    <Text style={styles.txtTitle}> Fresh Picks </Text>
                    <View style={{ marginTop: 5, height: 140, flexDirection: 'row', width: "100%" }}>
                        {
                            canvasDataPick1.map(
                                (item, index) => {
                                    return (
                                        <View style={styles.picks} key={index} >
                                            <Image source={{ uri: item.uri }} style={{ height: 70, width: 70, borderRadius: 10 }} />
                                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                                <Text style={styles.txtWeekly}>{item.genre}</Text>
                                                <Text style={[styles.txtWeekly, { textAlign: "center" }]}>{item.title}</Text>
                                            </View>
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
                </View>

                <View style={{ height: 250 }}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                        activeOpacity={1}
                        onPress={() => alert("tab Genres")}
                    >
                        <Text style={styles.txtTitle}>Genres</Text>
                        <Text style={[styles.txtTitle, { marginRight: 15 }]}>></Text>
                    </TouchableOpacity>
                    <FlatGrid
                        itemDimension={70}
                        items={iconCanvas}
                        spacing={2}
                        style={{ marginLeft: 15, marginTop: 10 }}
                        renderItem={({ item, index }) => (
                            <View style={{ width: 70, height: 90, alignItems: 'center' }} key = {index}>
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
                </View>
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
        height: 30,
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 17,
        marginTop: 10,
        color: 'black'
      },
      picks: {
        flexDirection: 'column',
        margin: 4,
        height: 100,
        width: "33%",
        justifyContent: 'center',
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
     
      recommendContainer: {
        width: "100%",
        height: 220,
        backgroundColor: "#e5e4e4"
      }
});