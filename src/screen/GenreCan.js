import React, { Component } from 'react';
import { View, Text } from 'react-native';

class GenreCan extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _onRefresh = () => {
    this.setState({
      refreshing: true
    })
    setTimeout(() => {this.setState({ refreshing: false })}, 500)
  }

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
        <View>
          <StatusBar
            backgroundColor='transparent'
            barStyle='dark-content'
          />
        </View>
        <View style={[styles.headerContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              activeOpacity={1}
              onPress={() => this.props.navigation.navigate("ORIGINALS")}
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
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => alert("btn Medal")}
              activeOpacity={1}
              style={{ marginRight: 25 }}
            >
              <Icon1 name='medal' size={23} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert("btn Search")}
              activeOpacity={1}
              style={{ marginRight: 15 }}
            >
              <Icon name='ios-search' size={30} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollableTabView
          initialPage={0}
          renderTabBar = {() => <ScrollableTabBar style = {{width: 310, borderTopWidth: 0.5, borderBottomWidth: 0.5, borderTopColor: '#d0cdcd'}}/> }
          tabBarInactiveTextColor = {'gray'}
          tabBarActiveTextColor = {'black'}
          tabBarUnderlineStyle = {{height: 2}}
        >
          <View tabLabel='Romance' style={{ flex: 1 }}>
            <View style={styles.txtCounter}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                10 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by Date
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              refreshControl = {
                <RefreshControl
                  refreshing = {this.state.refreshing}
                  onRefresh = {this._onRefresh}
                />
              }
            >
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
                onEndReachedThreshold={0.5}
                onEndReached={this._onScrollDown}
                ListFooterComponent={this._renderLoadingIconBelow}
              />
            </ScrollView>
          </View>

          <View tabLabel='Drama' style={{ flex: 1 }}>
            <View style={styles.txtCounter}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                10 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by Date
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              refreshControl = {
                <RefreshControl
                  refreshing = {this.state.refreshing}
                  onRefresh = {this._onRefresh}
                />
              }
            >
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
                onEndReachedThreshold={0.5}
                onEndReached={this._onScrollDown}
                ListFooterComponent={this._renderLoadingIconBelow}
              />
            </ScrollView>
          </View>

          <View tabLabel='Fantasy' style={{ flex: 1 }}>
            <View style={styles.txtCounter}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                10 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by Date
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              refreshControl = {
                <RefreshControl
                  refreshing = {this.state.refreshing}
                  onRefresh = {this._onRefresh}
                />
              }
            >
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
                onEndReachedThreshold={0.5}
                onEndReached={this._onScrollDown}
                ListFooterComponent={this._renderLoadingIconBelow}
              />
            </ScrollView>
          </View>

          <View tabLabel='Comedy' style={{ flex: 1 }}>
            <View style={styles.txtCounter}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                10 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by Date
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              refreshControl = {
                <RefreshControl
                  refreshing = {this.state.refreshing}
                  onRefresh = {this._onRefresh}
                />
              }
            >
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
                onEndReachedThreshold={0.5}
                onEndReached={this._onScrollDown}
                ListFooterComponent={this._renderLoadingIconBelow}
              />
            </ScrollView>
          </View>

          <View tabLabel='Action' style={{ flex: 1 }}>
            <View style={styles.txtCounter}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                10 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by Date
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              refreshControl = {
                <RefreshControl
                  refreshing = {this.state.refreshing}
                  onRefresh = {this._onRefresh}
                />
              }
            >
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
                onEndReachedThreshold={0.5}
                onEndReached={this._onScrollDown}
                ListFooterComponent={this._renderLoadingIconBelow}
              />
            </ScrollView>
          </View>

          <View tabLabel='Horror' style={{ flex: 1 }}>
            <View style={styles.txtCounter}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                10 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by Date
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              refreshControl = {
                <RefreshControl
                  refreshing = {this.state.refreshing}
                  onRefresh = {this._onRefresh}
                />
              }
            >
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
                onEndReachedThreshold={0.5}
                onEndReached={this._onScrollDown}
                ListFooterComponent={this._renderLoadingIconBelow}
              />
            </ScrollView>
          </View>

          <View tabLabel='Slice of Life' style={{ flex: 1 }}>
            <View style={styles.txtCounter}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                10 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by Date
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              refreshControl = {
                <RefreshControl
                  refreshing = {this.state.refreshing}
                  onRefresh = {this._onRefresh}
                />
              }
            >
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
                onEndReachedThreshold={0.5}
                onEndReached={this._onScrollDown}
                ListFooterComponent={this._renderLoadingIconBelow}
              />
            </ScrollView>
          </View>

          <View tabLabel='Heart-warming' style={{ flex: 1 }}>
            <View style={styles.txtCounter}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                10 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by Date
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              refreshControl = {
                <RefreshControl
                  refreshing = {this.state.refreshing}
                  onRefresh = {this._onRefresh}
                />
              }
            >
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
                onEndReachedThreshold={0.5}
                onEndReached={this._onScrollDown}
                ListFooterComponent={this._renderLoadingIconBelow}
              />
            </ScrollView>
          </View>

          <View tabLabel='Superheroes' style={{ flex: 1 }}>
            <View style={styles.txtCounter}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                10 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by Date
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              refreshControl = {
                <RefreshControl
                  refreshing = {this.state.refreshing}
                  onRefresh = {this._onRefresh}
                />
              }
            >
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
                onEndReachedThreshold={0.5}
                onEndReached={this._onScrollDown}
                ListFooterComponent={this._renderLoadingIconBelow}
              />
            </ScrollView>
          </View>

          <View tabLabel='Sports' style={{ flex: 1 }}>
            <View style={styles.txtCounter}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                10 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by Date
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              refreshControl = {
                <RefreshControl
                  refreshing = {this.state.refreshing}
                  onRefresh = {this._onRefresh}
                />
              }
            >
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
                onEndReachedThreshold={0.5}
                onEndReached={this._onScrollDown}
                ListFooterComponent={this._renderLoadingIconBelow}
              />
            </ScrollView>
          </View>

          <View tabLabel='Scifi' style={{ flex: 1 }}>
            <View style={styles.txtCounter}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                10 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by Date
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              refreshControl = {
                <RefreshControl
                  refreshing = {this.state.refreshing}
                  onRefresh = {this._onRefresh}
                />
              }
            >
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
                onEndReachedThreshold={0.5}
                onEndReached={this._onScrollDown}
                ListFooterComponent={this._renderLoadingIconBelow}
              />
            </ScrollView>
          </View>

          <View tabLabel='Informatives' style={{ flex: 1 }}>
            <View style={styles.txtCounter}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                10 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by Date
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              refreshControl = {
                <RefreshControl
                  refreshing = {this.state.refreshing}
                  onRefresh = {this._onRefresh}
                />
              }
            >
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
                onEndReachedThreshold={0.5}
                onEndReached={this._onScrollDown}
                ListFooterComponent={this._renderLoadingIconBelow}
              />
            </ScrollView>
          </View>

          <View tabLabel='Historical' style={{ flex: 1 }}>
            <View style={styles.txtCounter}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                10 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by Date
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              refreshControl = {
                <RefreshControl
                  refreshing = {this.state.refreshing}
                  onRefresh = {this._onRefresh}
                />
              }
            >
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
                onEndReachedThreshold={0.5}
                onEndReached={this._onScrollDown}
                ListFooterComponent={this._renderLoadingIconBelow}
              />
            </ScrollView>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

export default GenreCan;
const styles = StyleSheet.create({

});