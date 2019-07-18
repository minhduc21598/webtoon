import React, { Component } from 'react';
import {
     View, 
     Text,
     ScrollView,
     TouchableOpacity,
     StyleSheet,
     Image
     } from 'react-native';
import { imgScroll } from './Data';

class ScrollHorizontal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {title}= this.props;
        return (
            <View
              style={{
                width: '100%',
                height: 230,
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 17,
                  fontWeight: '500',
                  marginLeft: 20,
                  marginTop: 10
                }}
              >{title}</Text>
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
                          style={{
                            width: 110,
                            height: 160,
                            marginLeft: 20
                          }}
                          key={index}
                          activeOpacity={1}
                          onPress={() => alert("Detail")}
                        >
                          <Image
                            source={{ uri: item.image }}
                            style={{ width: 110, height: 110, borderRadius: 5 }}
                          />
                          <Text
                            style={{
                              fontSize: 11,
                              marginTop: 10
                            }}
                          >{item.type}</Text>
                          <Text
                            style={{
                              fontSize: 13,
                              color: 'black',
                            }}
                          >{item.name}</Text>
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
