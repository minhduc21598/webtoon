import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, Dimensions, ImageBackground, ActivityIndicator, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { newHere, topNewHere, imgSwiper, type } from '../component/Data';
import ModalForU from '../component/ModalForU';
import Carousel from 'react-native-snap-carousel';
import ScrollHorizontal from '../component/ScrollHorizontal';
import NextItem from '../component/NextItem';
const typeGenres = [
  "Drama",
  "Drama",
  "Drama",
  "Drama",
  "Drama",
  "Drama",
  "Drama",
  "Drama",
  "Drama",
];
const menuOption = [
  "Daily",
  'Ranking',
  'Genres',
  'Fan Translation',
  'Settings'
];
const menuShare = [
  'facebook',
  'insta',
  'twitter',
  'youtube'
]
class ForYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      isLoadingMore: false,
      isLoading: true,
      itemTopTitle: topNewHere[0].title,
      itemInfor: newHere[0]
    };
  }

  _renderItem({ item }) {
    return (
      <View>
        <Image
          source={{ uri: item.image }}
          style={{
            width: 280,
            height: 160,
            borderRadius: 5,
          }}
        />
      </View>
    )
  }

  _renderItem1({ item }) {
    return (
      item.list.map(
        (item1, index1) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                width: 160,
                height: 50,
              }}
              key={index1}
              activeOpacity={1}
              onPress={() => alert(`${item1.name}`)}
            >
              <Text
                style={{
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 15,
                  marginTop: 8
                }}
              >{item1.order}</Text>
              <Image
                source={{ uri: item1.image }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 5,
                  marginLeft: 10
                }}
              />
              <View>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 14,
                    color: 'black'
                  }}
                >{item1.name}</Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 11,
                  }}
                >{item1.type}</Text>
              </View>
            </TouchableOpacity>
          )
        }
      )
    )
  }

  onSnapToItem1 = (index) => {
    this.setState({ itemTopTitle: topNewHere[index].title })
  }

  onSnapToItem2 = (index) => {
    this.setState({ itemInfor: newHere[index] })
  }

  _onScrollDown = () => { // bắt sự kiện người dùng kéo xuống
    if (this.state.isLoadingmore) return;
    this.setState({ isLoadingmore: true });
  }

  _renderLoadingIconBelow = () => {
    if (this.state.isLoadingmore) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator color='black' size='large' />
        </View>
      )
    }
    return null;
  }

  _onRefresh = () => {
    this.setState({
      refreshing: true
    })
    setTimeout(() => { this.setState({ refreshing: false }) }, 500)
  }

  showModal = () => {
    this.ModalForU.setState({ hide: false });
  }
  getNameIcon = (index) => {
    let nameIcon = '';
    switch (index) {
      case 0:
        nameIcon = 'logo-facebook'
        break;
      case 1:
        nameIcon = 'logo-instagram'
        break;
      case 2:
        nameIcon = 'logo-twitter'
        break;
      case 3:
        nameIcon = 'logo-youtube'
        break;

      default:
        break;
    }
    return nameIcon;
  }
  onPressOption = (index) => {
    switch (index) {
      case 0:
        this.props.navigation.navigate("ORIGINALS")
        break;
      case 1:
        // this.props.navigation.navigate("ORIGINALS")
        break;
      case 2:
        // this.props.navigation.navigate("ORIGINALS")
        break;
      case 3:
        // this.props.navigation.navigate("ORIGINALS")
        break;
      case 4:
        // this.props.navigation.navigate("ORIGINALS")
        break;

      default:
        break;
    }
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
        onEndReachedThreshold={0.5}
        onEndReached={this._onScrollDown}
        ListFooterComponent={this._renderLoadingIconBelow}
      >
        <StatusBar
          barStyle='dark-content'
          backgroundColor='white'
        />
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://camo.githubusercontent.com/7e50feeb3a97b68ff0640b290cbe412e45e57b65/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f302f30392f4e617665725f4c696e655f576562746f6f6e5f6c6f676f2e706e67' }}
            style={styles.iconHeader}
          />
          <TouchableOpacity
            activeOpacity={0}
            onPress={() => alert("btnSearch")}
          >
            <Icon name='ios-search' size={35} color='black' style={{ marginRight: 15 }} />
          </TouchableOpacity>
        </View>
        <Text style={styles.textNewHere}
        >New Here?</Text>
        <TouchableOpacity
          activeOpacity={0}
          onPress={() => alert("Another screen")}
        >
          <Text style={styles.textBelowNewHere}
          >Start with hits read by Millions{'\t\t\t\t\t\t\t\t\t\t'}></Text>
        </TouchableOpacity>
        <Carousel
          data={newHere}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={300}
          inactiveSlideOpacity={1}
          renderItem={this._renderItem}
          inactiveSlideScale={0.85}
          slideStyle={{ marginTop: 10 }}
          firstItem={0}
        />
        <Text style={styles.textFindYourSeries}
        >Find your series</Text>
        <ImageBackground
          style={styles.imgback}
          source={{ uri: 'https://ss-images.catscdn.vn/2019/04/01/4877331/avengers-endgame-mcu-rewatch.jpg' }}
        >
          <Text style={styles.textInsideImg}>
            WEBTOON{"\n"}recommends for you</Text>
          <TouchableOpacity
            style={styles.btnView}
            onPress={() => alert("btnView")}
            activeOpacity={1}
          >
            <Text style={{ color: 'white', fontWeight: '500' }}>View</Text>
          </TouchableOpacity>
        </ImageBackground>
        <NextItem
          title={this.state.itemTopTitle}
          disabled={true}
        />
        <Carousel
          data={topNewHere}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={280}
          inactiveSlideOpacity={1}
          renderItem={this._renderItem1}
          inactiveSlideScale={1}
          activeSlideAlignment={'start'}
          slideStyle={{ start: 20 }}
          onSnapToItem={this.onSnapToItem1}
        />
        <View
          style={{
            width: "100%",
            height: 280,
          }}
        >
          <Swiper
            autoplay={true}
          >
            {
              imgSwiper.map(
                (item) => {
                  return (
                    <Image
                      style = {styles.imgSwiper}
                      source = {{ uri: item }}
                    />
                  )
                }
              )
            }
          </Swiper>
        </View>
        {
          typeGenres.map((item, index) => {
            return <ScrollHorizontal
              title={item}
              key={index}
            />
          })
        }
        <TouchableOpacity
          activeOpacity={1}
          style={{
            width: 230,
            height: 60,
            marginLeft: 20,
            marginTop: 20
          }}
          onPress={() => this.props.navigation.navigate("CANVAS")}
        >
          <Text
            style={{
              fontSize: 23,
              color: 'black'
            }}
          >
            Exciting New Stories
              </Text>
          <Text
            style={{
              fontSize: 13
            }}
          >
            Series from our Self-Publishing Creators
            </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            width: '100%',
            height: 30,
            justifyContent: 'space-between',
            flexDirection: 'row'
          }}
          activeOpacity={1}
          onPress={() => this.props.navigation.navigate("ORIGINALS")}
        >
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '500',
              marginLeft: 20
            }}
          >Genres</Text>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '500',
              marginRight: 15
            }}
          >></Text>
        </TouchableOpacity>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 15, height: 110 }}
        >
          {
            type.map(
              (item, index) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: 80,
                      height: 100,
                      marginRight: 8,
                      alignItems: 'center'
                    }}
                    activeOpacity={1}
                    onPress={() => this.props.navigation.navigate("ORIGINALS")}
                  >
                    <View
                      style={{
                        width: 70,
                        height: 70,
                        backgroundColor: '#e3e3e3',
                        borderRadius: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 5
                      }}
                      key={index}
                    >
                      <Icon name={item.icon} size={30} color={'black'} />
                    </View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 12
                      }}
                    >{item.name}</Text>
                  </TouchableOpacity>
                )
              }
            )
          }
        </ScrollView>
        {
          menuOption.map((item, index) => {
            return <NextItem
              title={item}
              onPress={() => this.onPressOption(index)}
            />
          })
        }
        <View
          style={{
            width: '100%',
            height: 1,
          }}
        />
        <NextItem
          title='Notice'
          onPress={() => alert("Another screen")}
        />
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {
            menuShare.map((item, index) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  activeOpacity={0.6}
                  onPress={() => alert("item")}
                >
                  <Icon name={this.getNameIcon(index)} size={30} color={'black'} />
                </TouchableOpacity>
              )
            })
          }
        </View>
        <TouchableOpacity
          style={{
            width: 140,
            height: 48,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
          }}
          activeOpacity={1}
          onPress={this.showModal}
        >
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: '500'
            }}
          >Share WEBTOON</Text>
        </TouchableOpacity>
        <ModalForU
          ref={ref => this.ModalForU = ref}
        />
      </ScrollView>
    );
  }
}

export default ForYou;

const styles = StyleSheet.create({
  newHere: {
    width: '100%',
    height: 400,
    backgroundColor: '#eeebeb'
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconHeader: {
    width: 50,
    height: 50,
    marginLeft: 15
  },
  textNewHere: {
    color: 'black',
    fontSize: 35,
    fontWeight: '500',
    marginLeft: 20
  },
  textBelowNewHere: {
    color: 'black',
    marginLeft: 20,
    fontSize: 16
  },
  imgback: {
    width: 320,
    height: 100,
    marginLeft: 20,
    marginTop: 15,
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInsideImg: {
    color: 'white',
    fontWeight: '500',
    lineHeight: 20,
    fontSize: 15,
    marginLeft: 16
  },
  textFindYourSeries: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 25
  },
  btnView: {
    width: 75,
    height: 35,
    backgroundColor: '#30ea33',
    marginRight: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  imgSwiper: {
    width: "100%",
    height: 220,
    resizeMode: 'stretch'
  },
  title: {
    width: 180,
    height: 30,
    backgroundColor: 'green',
    marginLeft: 20,
    marginTop: 10,
    flexDirection: 'row'
  },
  loading: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  loading: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
