import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { genres } from '../const';
import { dataOriginal } from '../component/Data';
import FlatGridItems from '../component/FlatGridItems';
import { ScrollView } from 'react-native-gesture-handler';
import { PickerView } from '../component/PickerView';
import { getAnimeByGenre } from '../services/HieuAPI';

class Genres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      genre: "",
      genreID: 0,
      isLoadingmore: false,
      refreshing: false
    };
    this.page = 1;
  }

  genreChange = (genre) => {
    for(var i= 0; i<genres.length;i++){
      if(genres[i].name === genre) this.setState({ genre: genre, genreID: i})
    }
  }

  openGenre = () => {
    let data = [];
    for (var i = 0; i < genres.length; i++) {
      data.push(genres[i].name);
    }
    PickerView(data, 'Action', this.genreChange);
  }

  renderItem = ({ item, index }) => (
    <View style={styles.itemContainer} key={index}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.txtTitle}>{item.title}</Text>
      {/* <Text style={styles.txtGenre}>{item.genres[0].name}</Text> */}
    </View>
  )

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

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.openGenre}
          style={styles.btnChooseTab}
        >
          <Text style={styles.txtChooseTab}>Choose a genre</Text>
          <Text style={styles.txtChooseTab}>
            {this.state.genre} {'  '}
            <Icon name='ios-arrow-down' color='black' size={20} />
          </Text>
        </TouchableOpacity>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <FlatGridItems
            itemDimension={110}
            items={this.state.items}
            spacing={7}
            renderItem={this.renderItem}
            onEndReachedThreshold={0.5}
            onEndReached={this._onScrollDown}
            listFooterComponent={this._renderLoadingIconBelow}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Genres;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnChooseTab: {
    height: 50,
    marginLeft: 28,
    marginRight: 38,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  txtChooseTab: {
    color: 'black',
    fontSize: 17,
    fontWeight: '400'
  },
  loading: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  itemContainer: {
    borderRadius: 5,
    width: 100,
    height: 160,
  },
  image: {
    height: 100,
    width: 100
  }, txtGenre: {
    fontSize: 10,
    color: 'red'
  },
  txtTitle: {
    fontSize: 10,
    color: 'purple'
  },
});