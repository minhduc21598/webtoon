import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { dataGenresOri } from '../component/Data';
import ViewSortBy from '../component/ViewSortBy';

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
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    tabLabel={item.title}
                    key={index}
                  >
                    <ViewSortBy 
                      viewStyle={styles.headerTab}
                      numberOfItem='5 items'
                      titleSort='Sort by Popularity'
                    />
                    {
                      item.listObject.map(
                        (subitem, subindex) => {
                          return (
                            <View style={styles.subItemView} key={subindex} >
                              <Image source={{ uri: subitem.image }} style={{ width: 120, height: 120, borderRadius: 5 }} />
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
