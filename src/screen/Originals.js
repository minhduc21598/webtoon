import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView, Image, StatusBar } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatGrid } from 'react-native-super-grid';
import { dataOriginal } from '../component/Data';

class Originals extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <StatusBar
            backgroundColor='transparent'
            barStyle='dark-content'
          />
        </View>    
        <View style={[styles.headerContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
          <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              activeOpacity={1}
              onPress={() => this.props.navigation.navigate("MY")}
            >
              <Text style={styles.txtHeader}>Daily</Text>
            </TouchableOpacity>
            <Text style={styles.txtHeader}>|</Text>
            <TouchableOpacity
              style={{
                alignItems: 'center'
              }}
              activeOpacity={1}
              onPress={() => this.props.navigation.navigate("Genres")}
            >
              <Text style={styles.txtHeader}>Genres</Text>
            </TouchableOpacity>
          </View>
          <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress = {() => alert("btn Medal")}
              activeOpacity = {1}
              style = {{marginRight: 25}}
            >
              <Icon name = 'ios-medal' size = {30} color = {'black'}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress = {() => alert("btn Search")}
              activeOpacity = {1}
              style = {{marginRight: 15}}
            >
              <Icon name = 'ios-search' size = {30} color = {'black'}/>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />}
        >
          <View tabLabel='MON' style={{flex:1}}>
            <View style={styles.txtCounter}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                10 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <FlatGrid
                itemDimension={110}
                items={dataOriginal}
                spacing={7}
                renderItem={({ item, index }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                  </View>
                )}
              />
            </ScrollView>
            
          </View>

          <View tabLabel='TUE'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                4 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatGrid
                itemDimension={110}
                items={dataOriginal}
                spacing={7}
                renderItem={({ item, index }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                  </View>
                )}
              />
            </View>
          </View>

          <View tabLabel='WED'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                4 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatGrid
                itemDimension={110}
                items={dataOriginal}
                spacing={7}
                renderItem={({ item, index }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                  </View>
                )}
              />
            </View>
          </View>

          <View tabLabel='THU'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                4 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatGrid
                itemDimension={110}
                items={dataOriginal}
                spacing={7}
                renderItem={({ item, index }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                  </View>
                )}
              />
            </View>
          </View>

          <View tabLabel='FRI'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                4 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatGrid
                itemDimension={110}
                items={dataOriginal}
                spacing={7}
                renderItem={({ item, index }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                  </View>
                )}
              />
            </View>
          </View>

          <View tabLabel='SAT'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                4 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatGrid
                itemDimension={110}
                items={dataOriginal}
                spacing={7}
                renderItem={({ item, index }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                  </View>
                )}
              />
            </View>
          </View>

          <View tabLabel='SUN'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                4 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatGrid
                itemDimension={110}
                items={dataOriginal}
                spacing={7}
                renderItem={({ item, index }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                  </View>
                )}
              />
            </View>
          </View>

          <View tabLabel='COMPLETED'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                4 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatGrid
                itemDimension={110}
                items={dataOriginal}
                spacing={7}
                renderItem={({ item, index }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

export default Originals;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 60,
    alignItems: 'center'
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    borderRadius: 5,
    width: 100,
    height: 160,
  },
  txtHeader: {
    fontSize: 23,
    fontWeight: '500',
    color: 'black',
    marginLeft: 18
  },
  txtCounter:{ 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    margin: 12, 
    height: 20 
  }
});
