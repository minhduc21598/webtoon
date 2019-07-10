import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { dataGenresOri } from '../component/Data';

class GenresOri extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar style={{ width: 310, borderTopWidth: 0.5, borderBottomWidth: 0.5, borderTopColor: '#d0cdcd' }} />}
          tabBarInactiveTextColor={'gray'}
          tabBarActiveTextColor={'black'}
          tabBarUnderlineStyle={{ height: 2 }}
        >
          {
            dataGenresOri.map(
              (item, index) => {
                return (
                  <View tabLabel={item.title} key={index}>
                    <ScrollView
                      showsVerticalScrollIndicator={false}
                    >
                      <View style={styles.headerTab}>
                        <View style={{ flexDirection: 'row', marginLeft: 18 }}>
                          <Text style={{ marginRight: 2 }}>{item.quantity}</Text>
                          <Text>items</Text>
                        </View>
                        <TouchableOpacity
                          style={{ flexDirection: 'row', marginRight: 20 }}
                          activeOpacity={1}
                          onPress={() => alert("Modal")}
                        >
                          <Text style={{ marginRight: 5, fontSize: 13 }}>Sort by Popularity</Text>
                          <Icon name='md-arrow-dropdown' size={20} />
                        </TouchableOpacity>
                      </View>
                      {
                        item.listObject.map(
                          (subitem, subindex) => {
                            return (
                              <View
                                style={styles.subItemView}
                                key={subindex}
                              >
                                <Image
                                  source={{ uri: subitem.image }}
                                  style={{ width: 120, height: 120, borderRadius: 5 }}
                                />
                                <View style={{ marginLeft: 20, width: 180 }}>
                                  <Text style={{ color: 'black', fontSize: 16 }}>{subitem.name}</Text>
                                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name='ios-heart' size={14} color={'#17ee51'} />
                                    <Text style={{ color: '#17ee51', marginLeft: 5, fontSize: 13 }}>{subitem.sub}</Text>
                                  </View>
                                  <Text style={{ fontSize: 11 }}>{subitem.sum}</Text>
                                </View>
                              </View>
                            )
                          }
                        )
                      }
                    </ScrollView>
                  </View>
                )
              }
            )
          }
        </ScrollableTabView>
        <View
          style={styles.modalBoxStyle}
        >
          <Icon name='ios-arrow-down' size={20} color={'gray'} />
        </View>
      </View>
    );
  }
}

export default GenresOri;

const styles = StyleSheet.create({
  headerContent: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalBoxStyle: {
    width: 50,
    height: 50,
    position: 'absolute',
    marginTop: 60,
    marginLeft: 310,
    borderWidth: 0.5,
    borderColor: '#d0cdcd',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTab: {
    width: '100%',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subItemView: {
    width: 320,
    height: 120,
    marginTop: 15,
    marginLeft: 20,
    flexDirection: 'row'
  }
});
