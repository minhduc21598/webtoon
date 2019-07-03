import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity,ImageBackground, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import { recommendationDataScreenMy, canvasDataWeekly, canvasDataDrama, canvasDataPick1, canvasDataPick2, canvasDataComedy, canvasDataSoL, iconCanvas } from '../component/Data';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatGrid } from 'react-native-super-grid';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <StatusBar
            backgroundColor='transparent'
            barStyle='dark-content'
            translucent={true}
          />
          <View style={[styles.headerContainer, { flexDirection: 'row' }]}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              activeOpacity={1}
              onPress={() => this.props.navigation.navigate("MY")}
            >
              <Text style={styles.txtHeader}>Spotlight</Text>
            </TouchableOpacity>
            <Text style={styles.txtHeader}>   |   </Text>
            <TouchableOpacity
              style={{
                alignItems: 'center'
              }}
              activeOpacity={1}
              onPress={() => this.props.navigation.navigate("GENRES")}
            >
              <Text style={styles.txtHeader}>Genres</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <View style={{ width: "100%", height: 220, backgroundColor: "#e5e4e4" }}>
            <Text style={styles.txtTitle}> Recommendation</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {
                recommendationDataScreenMy.map(
                  (item, index) => {
                    return (
                      <ImageBackground source={{ uri: item.uri }} style={styles.imgBack}>
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

          <View style={styles.firstView}>
            <Swiper>
              <View style={{ height: 400 }}>
                <Text style={styles.txtTitle}>Weekly HOT</Text>
                {
                  canvasDataWeekly.map(
                    (item, index) => {
                      return (
                        <View style={styles.detailFirstView} key={index} >
                          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'purple', fontSize: 10 }}> {item.rank} </Text>
                          </View>
                          <Image source={{ uri: item.uri }} style={{ height: 60, width: 60, borderRadius: 10 }} />
                          <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.txtWeekly}>{item.title}</Text>
                            <Text style={styles.txtWeekly}>{item.genre}</Text>
                          </View>
                        </View>
                      )
                    }
                  )
                }
              </View>
              <View style={{ height: 400 }}>
                <Text style={styles.txtTitle}>Drama</Text>
                {
                  canvasDataDrama.map(
                    (item, index) => {
                      return (
                        <View style={styles.detailFirstView} key={index} >
                          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'purple', fontSize: 10 }}> {item.rank} </Text>
                          </View>
                          <Image source={{ uri: item.uri }} style={{ height: 60, width: 60, borderRadius: 10 }} />
                          <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.txtWeekly}>{item.title}</Text>
                            <View >
                              <Icon name="ios-heart" color='purple' size={20}>
                                <Text style={styles.txtWeekly}> {item.likes} </Text>
                              </Icon>

                            </View>
                          </View>
                        </View>
                      )
                    }
                  )
                }
              </View>
              <View style={{ height: 400 }}>
                <Text style={styles.txtTitle}>Comedy</Text>
                {
                  canvasDataComedy.map(
                    (item, index) => {
                      return (
                        <View style={styles.detailFirstView} key={index} >
                          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'purple', fontSize: 10 }}> {item.rank} </Text>
                          </View>
                          <Image source={{ uri: item.uri }} style={{ height: 60, width: 60, borderRadius: 10 }} />
                          <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.txtWeekly}>{item.title}</Text>
                            <Text style={styles.txtWeekly}>{item.genre}</Text>
                          </View>
                        </View>
                      )
                    }
                  )
                }
              </View>
              <View style={{ height: 400 }}>
                <Text style={styles.txtTitle}>Slice of Life</Text>
                {
                  canvasDataSoL.map(
                    (item, index) => {
                      return (
                        <View style={styles.detailFirstView} key={index} >
                          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'purple', fontSize: 10 }}> {item.rank} </Text>
                          </View>
                          <Image source={{ uri: item.uri }} style={{ height: 60, width: 60, borderRadius: 10 }} />
                          <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.txtWeekly}>{item.title}</Text>
                            <Text style={styles.txtWeekly}>{item.genre}</Text>
                          </View>
                        </View>
                      )
                    }
                  )
                }
              </View>
            </Swiper>
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

          <View style={{height:170 ,backgroundColor: '#e5e4e4' }}>
            <Text style={styles.txtTitle}>Genres</Text>
            <FlatGrid
              itemDimension={70}
              items={iconCanvas}

              spacing={7}
              renderItem={({ item, index }) => (
                <View style={styles.itemContainer}>
                  <Icon name={item.icon} color={'black'} size={35} />
                  <Text style={{ fontSize: 12, color: 'black' }}> {item.name} </Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Canvas;

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
    fontSize: 25,
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
    borderRadius: 5,
    alignItems: 'center'
  },
  txtHeader: {
    fontSize: 23,
    fontWeight: '500',
    color: 'black',
    marginLeft: 18
  },
  headerContainer: {
    width: '100%',
    height: 40,
    marginTop: 30,
    
  },
});
