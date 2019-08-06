import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import Picker from 'react-native-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { genres } from '../const';
import { dataOriginal } from '../component/Data';
import FlatGridItems from '../component/FlatGridItems';
import { ScrollView } from 'react-native-gesture-handler';

class Genres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      isLoadingmore: false,
      refreshing: false
    };
  }

  genreChange = (genre) => {
    this.setState({ genre: genre })
  }

  openGenre = () => {
    let data = [];
    for (var i = 0; i < genres.length; i++) {
      data.push(genres[i].name);
    }
    Picker.init({
      pickerData: data,
      onPickerConfirm: data => {
        this.genreChange(data);
      },
      onPickerSelect: data => {
        this.genreChange(data);
      }
    });
    Picker.show();
  }

  renderItem = ({ item, index }) => (
    <View style={styles.itemContainer} key={index}>
      <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
      <Text style={{ fontSize: 10, color: 'red' }}>{item.genre}</Text>
      <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
      <Text style={{ fontSize: 10, color: 'green' }}>
        <Icon name='ios-heart' color='green' /> {item.watching}
      </Text>
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
      <View style={{ flex: 1 }}>
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
            items={dataOriginal}
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
});