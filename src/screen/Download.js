import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { btnMore } from '../component/Data';

class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  gotoPolicy = () => {
    this.props.navigation.navigate("Policy");
  }

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor='transparent'
          barStyle='dark-content'
        />
        <Text style={styles.textMore}>More</Text>
        <View style={styles.belowMore}>
          <View>
            <Icon name='logo-bitcoin' size={27} color='#f0b600' style={styles.iconCoin}>
              <Text style={styles.coin}>{" "}0</Text>
            </Icon>
            <Text style={styles.userData}>Purchased{" "}0{"\t\t"}Free{" "}0</Text>
          </View>
          <TouchableOpacity
            style={styles.btnBuy}
            onPress={() => alert("btn Buy")}
          >
            <Text style={{ color: 'white' }}>Buy coins</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.grid}>
          {
            btnMore.map(
              (item, index) => {
                return (
                  <TouchableOpacity
                    style={styles.btnOption}
                    onPress={() => alert(`${item.title}`)}
                    key={index}
                  >
                    <Icon name={item.name} size={40} color='black' style={{ marginBottom: 10 }} />
                    <Text style={{ color: 'black' }}>{item.title}</Text>
                  </TouchableOpacity>
                )
              }
            )
          }
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => alert("Notice")}
          >
            <Text style={styles.textNotice}>Notice{"   "}></Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.gotoPolicy}
          >
            <Text style = {styles.textNearNotice}>Changes to our Terms of Use and Privacy P...</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Download;

const styles = StyleSheet.create({
  textMore: {
    fontSize: 23,
    fontWeight: '500',
    color: 'black',
    marginLeft: 18,
    marginTop: 20,
    marginBottom: 20
  },
  belowMore: {
    width: '100%',
    height: 100,
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
  },
  iconCoin: {
    marginLeft: 20,
    marginTop: 20,
  },
  coin: {
    color: 'black',
    fontSize: 30,
    fontWeight: '500'
  },
  userData: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 10
  },
  btnBuy: {
    width: 90,
    height: 40,
    backgroundColor: '#15d849',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 80,
    marginTop: 30
  },
  grid: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 0.5
  },
  btnOption: {
    width: 120,
    height: 100,
    borderStyle: 'solid',
    borderRightWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textNotice: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
    marginLeft: 15,
  },
  textNearNotice: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
    marginLeft: 10
  }
});
