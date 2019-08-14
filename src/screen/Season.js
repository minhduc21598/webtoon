import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import SplashScreen from 'react-native-splash-screen';
import { season, imgSwiper, menuShare, menuOption, typeGenres } from '../component/Data';
import { typeManga } from '../const';
import ModalForU from '../component/ModalForU';
import SlideItemCarousel from '../component/SlideItemCarousel';
import ScrollHorizontal from '../component/ScrollHorizontal';
import Label from '../component/Label';
import Title from '../component/TitleChanges';
import Header from '../component/Header';

class Season extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      isLoading: true,
    };
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  gotoDetail = () => {
    this.props.navigation.navigate("DetailAnime");
  }
  _renderItem({ item }) {
    return (
      item.list.map(
        (item1, index1) => {
          return (
            <TouchableOpacity
              style={styles.listItem}
              key={index1}
              activeOpacity={1}
              onPress={this.gotoDetail}
            >
              <Text style={styles.itemOrder}>{item1.order}</Text>
              <Image
                source={{ uri: item1.image }}
                style={styles.itemImg}
              />
              <View>
                <Text style={styles.itemName}>{item1.name}</Text>
                <Text style={styles.itemType}>{item1.type}</Text>
              </View>
            </TouchableOpacity>
          )
        }
      )
    )
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
  onPressOption = (index) => {
    switch (index) {
      case 0:
        this.props.navigation.navigate("Daily");
        break;
      case 1:
        this.props.navigation.navigate("Previous");
        break;
      case 2:
        this.props.navigation.navigate("Previous", { oldSeason: false });
        break;
      case 3:
        this.props.navigation.navigate("Ranking");
        break;
      case 4:
        this.props.navigation.navigate("Download");
        break;
      default:
        break;
    }
  }
  gotoRankings = (index) => {
    this.props.navigation.navigate("Ranking", { anime: false, index: index });
  }
  onSnapToItem = (index) => {
    this.Title.setState({ title: season[index].title })
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
        <StatusBar
          barStyle='dark-content'
          backgroundColor='white'
        />
        <Header
          firstTxt = {'This season'}
          secondTxt = {''}
        />
        <Text style = {styles.welcome}>Welcome Back!</Text>
        <View style={styles.viewSwiper}>
          <Swiper
            autoplay={true}
          >
            {
              imgSwiper.map(
                (item, index) => {
                  return (
                    <Image
                      style={styles.imgSwiper}
                      source={{ uri: item }}
                      key={index}
                    />
                  )
                }
              )
            }
          </Swiper>
        </View>
        <TouchableOpacity
          activeOpacity={0}
          onPress={() => alert("Another screen")}
        >
        </TouchableOpacity>
        <Text style={styles.textFindYourSeries}>Find your series</Text>
        <ImageBackground
          style={styles.imgback}
          imageStyle={{ borderRadius: 10, opacity: 0.8 }}
          source={{ uri: 'https://usabilitygeek.com/wp-content/uploads/2014/09/10th-dimension-boys-webtoon.jpg' }}
        >
          <Text style={styles.textInsideImg}>WEBTOON{"\n"}recommends for you</Text>
          <TouchableOpacity
            style={styles.btnView}
            onPress={() => alert("btnView")}
            activeOpacity={1}
          >
            <Text style={styles.textView}>View</Text>
          </TouchableOpacity>
        </ImageBackground>
        <Title
          ref={ref => this.Title = ref}
          initValue={season[0].title}
          styleTxt={styles.title}
          onPress={() => alert("Another screen")}
        />
        <SlideItemCarousel
          data={season}
          renderItem={this._renderItem}
          itemWidth={280}
          onSnapToItem={this.onSnapToItem}
        />
        {
          typeGenres.map((item, index) => {
            return (
              <View key = {index} style = {{marginTop: 20}}>
                <ScrollHorizontal
                  title={item}
                  onPress = {this.gotoDetail}
                />
                <ScrollHorizontal
                  title={'Recommendations'}
                  onPress = {this.gotoDetail}
                />
                <View style = {{marginTop: 40}}/>
              </View>
            )
          })
        }
        <Label
          title='Manga'
          onPress={() => this.gotoRankings(0)}
        />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ height: 110 }}
        >
          {
            typeManga.map(
              (item, index) => {
                return (
                  <TouchableOpacity
                    style={styles.listBtn}
                    key={index}
                    activeOpacity={1}
                    onPress={() => this.gotoRankings(index)}
                  >
                    <View style={styles.btnCircle}>
                      <Icon name={item.icon} size={30} color={'black'} />
                    </View>
                    <Text style={styles.titleBtn}>{item.name}</Text>
                  </TouchableOpacity>
                )
              }
            )
          }
        </ScrollView>
        {
          menuOption.map(
            (item, index) => {
              return (
                <Label
                  title={item}
                  onPress={() => this.onPressOption(index)}
                  key={index}
                />
              )
            }
          )
        }
        <View style={styles.listSocial}>
          {
            menuShare.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.btnSocial}
                  activeOpacity={0.6}
                  onPress={() => alert(`${item}`)}
                  key={index}
                >
                  <Icon name={item} size={30} color={'black'} />
                </TouchableOpacity>
              )
            })
          }
        </View>
        <TouchableOpacity
          style={styles.btnShare}
          activeOpacity={1}
          onPress={this.showModal}
        >
          <Text style={styles.textShare}>Share WEBTOON</Text>
        </TouchableOpacity>
        <ModalForU
          ref={ref => this.ModalForU = ref}
        />
      </ScrollView>
    );
  }
}

export default Season;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
    fontWeight: '700',
    color: 'green',
    marginLeft: 20
  },
  imgback: {
    width: 320,
    height: 120,
    marginLeft: 20,
    marginTop: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  textInsideImg: {
    color: 'purple',
    fontWeight: '500',
    lineHeight: 20,
    fontSize: 15,
    marginLeft: 16,
  },
  listItem: {
    flexDirection: 'row',
    width: 160,
    height: 50,
  },
  itemOrder: {
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
    marginTop: 8
  },
  itemImg: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginLeft: 10
  },
  itemName: {
    marginLeft: 10,
    fontSize: 11,
    color: 'green'
  },
  itemType: {
    marginLeft: 10,
    fontSize: 11,
    color: 'red'
  },
  textFindYourSeries: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 20,
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
  textView: {
    color: 'white',
    fontWeight: '500'
  },
  viewSwiper: {
    width: "100%",
    height: 280,
  },
  imgSwiper: {
    width: "100%",
    height: 220,
    resizeMode: 'stretch'
  },
  listBtn: {
    alignItems: 'center',
    marginLeft: 20
  },
  btnCircle: {
    width: 70,
    height: 70,
    backgroundColor: '#e3e3e3',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  titleBtn: {
    color: 'black',
    fontSize: 12
  },
  line: {
    width: '100%',
    height: 1,
    borderWidth: 0.3,
    borderColor: 'gray',
    marginTop: 30,
    marginBottom: 20
  },
  listSocial: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  btnSocial: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
  btnShare: {
    width: 140,
    height: 48,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 40
  },
  textShare: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500'
  },
  title: {
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    color: 'black',
    fontWeight: '500'
  },
});
