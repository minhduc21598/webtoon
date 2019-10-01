import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import SplashScreen from 'react-native-splash-screen';
import { imgSwiper, menuOption } from '../component/Data';
import Label from '../component/Label';
import Flat from '../component/FlatGridItems';
import { getCurrentSeason } from '../services/GetAPI';
import { connect } from 'react-redux';
import { createUser, deleteUser } from '../redux/actions/UserAction';

class Season extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    SplashScreen.hide();
    getCurrentSeason().then(
      response => response.json()
    ).then(
      res => {
        this.props.delete();
        this.props.create(res.anime);
        this.setState({ isLoading: false })
      }
    ).catch((error) => {
      console.error(error);
      return error;
    });
  }
  renderLoading = () => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size='large' color='black' />
      </View>
    )
  }
  gotoDetail = (item) => {
    this.props.navigation.navigate("DetailAnime", {id: item.mal_id});
  }
  renderSeasonItem = ({ item, index }) => {
    return (
      <TouchableOpacity 
        style={styles.containerSeason} 
        onPress = {() => this.gotoDetail(item)} 
        activeOpacity = {1} 
        key={index}
      >
        <Image
          source={{ uri: item.image_url }}
          style={styles.imageSeason}
        />
        <Text style={styles.titleSeason}>{item.title}</Text>
      </TouchableOpacity>
    )
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
  render() {
    return (
      (this.state.isLoading) ? this.renderLoading() :
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <StatusBar
          barStyle='dark-content'
          backgroundColor='white'
        />
        <Text style={styles.titleTxt}>This season</Text>
        <Text style={styles.welcome}>Welcome Back!</Text>
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
        <Text style={styles.titleTxt}>What's new?</Text>
        <Flat
          itemDimension={130}
          items={this.props.data}
          spacing={5}
          renderItem={this.renderSeasonItem}
        />
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
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.UserReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    create: (data) => dispatch(createUser(data)),
    delete: () => dispatch(deleteUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Season);

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 30,
    fontWeight: '700',
    color: 'green',
    marginLeft: 20
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
  line: {
    width: '100%',
    height: 1,
    borderWidth: 0.3,
    borderColor: 'gray',
    marginTop: 30,
    marginBottom: 20
  },
  title: {
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    color: 'black',
    fontWeight: '500'
  },
  containerSeason: {
    width: 170,
    height: 290,
  },
  titleSeason: {
    color: 'green',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '500'
  },
  imageSeason: {
    width: 170,
    height: 240,
    borderRadius: 8
  },
  titleTxt: {
    fontSize: 25,
    color: 'black',
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20
  },
});
