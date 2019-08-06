import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { imgScroll } from './Data';

class ScrollHorizontal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { title } = this.props;
    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 15 }}
        >
          {
            imgScroll.map(
              (item, index) => {
                return (
                  <TouchableOpacity
                    style={styles.detailItem}
                    key={index}
                    activeOpacity={1}
                    onPress={() => alert("Detail")}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={styles.image}
                    />
                    <Text style={styles.type}>{item.type}</Text>
                    <Text style = {styles.name}>{item.name}</Text>
                  </TouchableOpacity>
                )
              }
            )
          }
        </ScrollView>
      </View>
    );
  }
}

export default ScrollHorizontal;

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 10
  },
  detailItem: {
    width: 110,
    height: 160,
    marginLeft: 20
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 5
  },
  type: {
    fontSize: 11,
    marginTop: 10
  },
  name: {
    fontSize: 13,
    color: 'black',
  }
});
