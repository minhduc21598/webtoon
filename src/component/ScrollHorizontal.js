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
    const { items, onPress } = this.props;
    return(
      items.map(
        (item, index) => {
          return (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 15 }}
              key={index}
            >
              <TouchableOpacity
                style={styles.detailItem}
                activeOpacity={1}
                onPress={onPress}
              >
                <Image
                  source={{ uri: item.image_url }}
                  style={styles.image}
                />
                <Text style={styles.type}>{item.type}</Text>
                <Text style={styles.name}>{item.title}</Text>
              </TouchableOpacity>
            </ScrollView>
          )
        }
      )
    )
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
