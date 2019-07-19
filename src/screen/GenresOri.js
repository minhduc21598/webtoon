import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
          renderTabBar={() => <ScrollableTabBar style={styles.scrollTab} />}
          tabBarInactiveTextColor={'gray'}
          tabBarActiveTextColor={'black'}
          tabBarUnderlineStyle={{ height: 2 }}
        >
          {
            dataGenresOri.map(
              (item, index) => {
                return (
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    tabLabel={item.title} key={index}
                  >
                    <View style={styles.headerTab}>
                      <Text style={styles.infor}>{item.quantity} items</Text>
                      <TouchableOpacity
                        style={styles.hideModal}
                        activeOpacity={1}
                        onPress={() => alert("Modal")}
                      >
                        <Text style={styles.title}>Sort by Popularity</Text>
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
                                style={styles.image}
                              />
                              <View style={styles.boxContain}>
                                <Text style={styles.itemName}>{subitem.name}</Text>
                                <View style={styles.like}>
                                  <Icon name='ios-heart' size={14} color={'#17ee51'} />
                                  <Text style={styles.sub}>{subitem.sub}</Text>
                                </View>
                                <Text style={styles.sum}>{subitem.sum}</Text>
                              </View>
                              <Text style={{ fontSize: 11 }}>{subitem.sum}</Text>
                            </View>
                          )
                        }
                      )
                    }
                  </ScrollView>
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
  scrollTab: {
    width: 310,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: '#d0cdcd'
  },
  headerContent: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infor: {
    marginLeft: 20
  },
  hideModal: {
    flexDirection: 'row',
    marginRight: 20
  },
  title: {
    marginRight: 5,
    fontSize: 13
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 5
  },
  itemName: {
    color: 'black',
    fontSize: 16
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sub: {
    color: '#17ee51',
    marginLeft: 5,
    fontSize: 13
  },
  sum: {
    fontSize: 11
  },
  boxContain: {
    marginLeft: 20,
    width: 180
  },
  modalBoxStyle: {
    width: 50,
    height: 50,
    position: 'absolute',
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
