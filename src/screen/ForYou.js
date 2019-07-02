import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import {newHere, topNewHere, imgSwiper, imgScroll, type} from '../component/Data';
import Carousel from 'react-native-snap-carousel';

class ForYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.getItem = newHere[0];
  }

  _renderItem({item}){
    return(
      <View>
        <Image
          source={{ uri: item.image }}
          style={{ 
            width: 280, 
            height: 160,
            borderRadius: 5,
          }}
        />
      </View>
    )
  }

  _renderItem1({item}){
    return(
      item.list.map(
        (item1, index1) => {
          return(
            <TouchableOpacity
              style = {{
                flexDirection: 'row',
                width: 160,
                height: 50,
              }}
              key = {index1}
              activeOpacity = {1}
              onPress = {() => alert(`${item1.name}`)}
            >
              <Text
                style = {{
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 15,
                  marginTop: 8
                }}
              >{item1.order}</Text>
              <Image
                source = {{uri: item1.image}}
                style = {{
                  width: 40,
                  height: 40,
                  borderRadius: 5,
                  marginLeft: 10
                }}
              />
              <View>
                <Text
                  style = {{
                    marginLeft: 10,
                    fontSize: 14,
                    color: 'black'
                  }}
                >{item1.name}</Text>
                <Text
                  style = {{
                    marginLeft: 10,
                    fontSize: 11,
                  }}
                >{item1.type}</Text>
              </View>
            </TouchableOpacity>
          )
        }
      )
    )
  }

  render() {
    return (
      <ScrollView>
        <View>
          <StatusBar
            barStyle = 'dark-content'
            backgroundColor = 'white'
          />
        </View>
        <View style = {styles.newHere}>
          <View
            style = {{
              width: '100%',
              height: 60,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Image
              source = {{uri: 'https://camo.githubusercontent.com/7e50feeb3a97b68ff0640b290cbe412e45e57b65/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f302f30392f4e617665725f4c696e655f576562746f6f6e5f6c6f676f2e706e67'}}
              style = {{width: 50, height: 50, marginLeft: 15}}
            />
            <TouchableOpacity
              activeOpacity={0}
              onPress = {() => alert("btnSearch")}
            >
              <Icon name = 'ios-search' size = {35} color = 'black' style = {{marginRight: 15}}/>
            </TouchableOpacity>
          </View>
          <Text
            style = {{
              color: 'black',
              fontSize: 35,
              fontWeight: '500',
              marginLeft: 20
            }}
          >New Here?</Text>
          <TouchableOpacity
            style = {{
              flexDirection: 'row', 
              justifyContent: 'space-between'
            }}
            activeOpacity={0}
            onPress = {() => alert("Another screen")}
          >
            <Text
              style = {{
                color: 'black',
                marginLeft: 20,
                fontSize: 16
              }}
            >Start with hits read by Millions</Text>
            <Text
              style = {{
                color: 'black',
                marginRight: 15,
                fontSize: 16
              }}
            >></Text>
          </TouchableOpacity>
          <View
            style = {{
              width: "100%",
              height: 160,
              marginTop: 10,
            }}
          >
            <Carousel
              data = {newHere}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={280}
              inactiveSlideOpacity = {1}
              renderItem={this._renderItem}
              inactiveSlideScale = {0.85}
            />
          </View>
        </View>
        <View
          style = {{
            width: '100%',
            height: 165,
          }}
        >
          <Text 
            style = {{
              color: 'black',
              fontSize: 16,
              fontWeight: '500',
              marginLeft: 20,
              marginTop: 25
            }}
          >Find your series</Text>
          <ImageBackground
            style = {{
              width: 320,
              height: 100,
              marginLeft: 20,
              marginTop: 15,
              borderRadius: 5,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            source = {{uri: 'https://ss-images.catscdn.vn/2019/04/01/4877331/avengers-endgame-mcu-rewatch.jpg'}}
          >
            <View
              style = {{
                width: 140,
                height: 40,
                marginLeft: 20,
                zIndex: 1,
              }}
            >
              <Text
                style = {{
                  color: 'white',
                  fontWeight: '500',
                  lineHeight: 20,
                  fontSize: 15
                }}
              >
              WEBTOON{"\n"}recommends for you</Text>
            </View>
            <TouchableOpacity
              style = {{
                width: 75,
                height: 35,
                backgroundColor: '#30ea33',
                marginRight: 20,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
              }}
              onPress = {() => alert("btnView")}
              activeOpacity = {1}              
            >
              <Text style = {{color: 'white', fontWeight: '500'}}>View</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View
          style = {{
            width: '100%',
            height: 300,
          }}
        >
          <View
            style = {{
              width: '100%',
              height: 40,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row'
            }}
          >
            <Text
              style = {{
                color: 'black',
                fontWeight: '500',
                fontSize: 15,
                marginLeft: 20 
              }}
            >Top Series</Text>
            <Text
              style = {{
                color: 'black',
                fontWeight: '500',
                fontSize: 15,
                marginRight: 15  
              }}
            >></Text>
          </View>
          <Carousel
            data = {topNewHere}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={280}
            inactiveSlideOpacity = {1}
            renderItem={this._renderItem1}
            inactiveSlideScale = {1}
          />
        </View>
        <View
          style = {{
            width: "100%",
            height: 280,
          }}
        >
          <Swiper
            autoplay= {true}
          >
            {
              imgSwiper.map(
                (item) => {
                  return(
                    <Image
                      style = {{
                        width: "100%",
                        height: 220,
                        resizeMode: 'stretch'
                      }}
                      source = {{uri: item}}
                    />
                  )
                }
              )
            }
          </Swiper>
        </View>
        <View
          style = {{
            width: '100%',
            height: 2180,
          }}
        >
          <TouchableOpacity
            activeOpacity = {1}
            style = {{
              width: 230,
              height: 60,
              marginLeft: 20,
              marginTop: 20
            }}
            onPress = {() => this.props.navigation.navigate("CANVAS")}
          >
            <Text
              style = {{
                fontSize: 23,
                color: 'black'
              }}
            > 
              Exciting New Stories
            </Text>
            <Text
              style = {{
                fontSize: 13
              }}
            > 
              Series from our Self-Publishing Creators
            </Text>
          </TouchableOpacity>
          <View
            style = {{
              width: '100%',
              height: 230,
            }}
          >
            <Text
              style = {{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginLeft: 20,
                marginTop: 10
              }}
            >Staff Picks</Text>
            <ScrollView
              horizontal = {true}
              showsHorizontalScrollIndicator = {false}
              style = {{marginTop: 15}}
            >
              {
                imgScroll.map(
                  (item,index) => {
                    return(
                      <TouchableOpacity
                        style = {{
                          width: 110,
                          height: 160,
                          marginLeft: 20
                        }}
                        key = {index}
                        activeOpacity = {1}
                        onPress = {() => alert("Detail")}
                      >
                        <Image
                          source = {{uri: item.image}}
                          style = {{width: 110, height: 110, borderRadius: 5}}
                        />
                        <Text
                          style = {{
                            fontSize: 11,
                            marginTop: 10
                          }}
                        >{item.type}</Text>
                        <Text
                          style = {{
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
          <View
            style = {{
              width: '100%',
              height: 230,
            }}
          >
            <Text
              style = {{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginLeft: 20,
                marginTop: 10
              }}
            >Today's Hot Series</Text>
            <ScrollView
              horizontal = {true}
              showsHorizontalScrollIndicator = {false}
              style = {{marginTop: 15}}
            >
              {
                imgScroll.map(
                  (item,index) => {
                    return(
                      <TouchableOpacity
                        style = {{
                          width: 110,
                          height: 160,
                          marginLeft: 20
                        }}
                        key = {index}
                        activeOpacity = {1}
                        onPress = {() => alert("Detail")}
                      >
                        <Image
                          source = {{uri: item.image}}
                          style = {{width: 110, height: 110, borderRadius: 5}}
                        />
                        <Text
                          style = {{
                            fontSize: 11,
                            marginTop: 10
                          }}
                        >{item.type}</Text>
                        <Text
                          style = {{
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
          <View
            style = {{
              width: '100%',
              height: 230,
            }}
          >
            <Text
              style = {{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginLeft: 20,
                marginTop: 10
              }}
            >Rising Stars</Text>
            <ScrollView
              horizontal = {true}
              showsHorizontalScrollIndicator = {false}
              style = {{marginTop: 15}}
            >
              {
                imgScroll.map(
                  (item,index) => {
                    return(
                      <TouchableOpacity
                        style = {{
                          width: 110,
                          height: 160,
                          marginLeft: 20
                        }}
                        key = {index}
                        activeOpacity = {1}
                        onPress = {() => alert("Detail")}
                      >
                        <Image
                          source = {{uri: item.image}}
                          style = {{width: 110, height: 110, borderRadius: 5}}
                        />
                        <Text
                          style = {{
                            fontSize: 11,
                            marginTop: 10
                          }}
                        >{item.type}</Text>
                        <Text
                          style = {{
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
          <View
            style = {{
              width: '100%',
              height: 230,
            }}
          >
            <Text
              style = {{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginLeft: 20,
                marginTop: 10
              }}
            >LoL</Text>
            <ScrollView
              horizontal = {true}
              showsHorizontalScrollIndicator = {false}
              style = {{marginTop: 15}}
            >
              {
                imgScroll.map(
                  (item,index) => {
                    return(
                      <TouchableOpacity
                        style = {{
                          width: 110,
                          height: 160,
                          marginLeft: 20
                        }}
                        key = {index}
                        activeOpacity = {1}
                        onPress = {() => alert("Detail")}
                      >
                        <Image
                          source = {{uri: item.image}}
                          style = {{width: 110, height: 110, borderRadius: 5}}
                        />
                        <Text
                          style = {{
                            fontSize: 11,
                            marginTop: 10
                          }}
                        >{item.type}</Text>
                        <Text
                          style = {{
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
          <View
            style = {{
              width: '100%',
              height: 230,
            }}
          >
            <Text
              style = {{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginLeft: 20,
                marginTop: 10
              }}
            >Brand New World</Text>
            <ScrollView
              horizontal = {true}
              showsHorizontalScrollIndicator = {false}
              style = {{marginTop: 15}}
            >
              {
                imgScroll.map(
                  (item,index) => {
                    return(
                      <TouchableOpacity
                        style = {{
                          width: 110,
                          height: 160,
                          marginLeft: 20
                        }}
                        key = {index}
                        activeOpacity = {1}
                        onPress = {() => alert("Detail")}
                      >
                        <Image
                          source = {{uri: item.image}}
                          style = {{width: 110, height: 110, borderRadius: 5}}
                        />
                        <Text
                          style = {{
                            fontSize: 11,
                            marginTop: 10
                          }}
                        >{item.type}</Text>
                        <Text
                          style = {{
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
          <View
            style = {{
              width: '100%',
              height: 230,
            }}
          >
            <Text
              style = {{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginLeft: 20,
                marginTop: 10
              }}
            >Binge-worthy Series</Text>
            <ScrollView
              horizontal = {true}
              showsHorizontalScrollIndicator = {false}
              style = {{marginTop: 15}}
            >
              {
                imgScroll.map(
                  (item,index) => {
                    return(
                      <TouchableOpacity
                        style = {{
                          width: 110,
                          height: 160,
                          marginLeft: 20
                        }}
                        key = {index}
                        activeOpacity = {1}
                        onPress = {() => alert("Detail")}
                      >
                        <Image
                          source = {{uri: item.image}}
                          style = {{width: 110, height: 110, borderRadius: 5}}
                        />
                        <Text
                          style = {{
                            fontSize: 11,
                            marginTop: 10
                          }}
                        >{item.type}</Text>
                        <Text
                          style = {{
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
          <View
            style = {{
              width: '100%',
              height: 230,
            }}
          >
            <Text
              style = {{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginLeft: 20,
                marginTop: 10
              }}
            >Spotlight</Text>
            <ScrollView
              horizontal = {true}
              showsHorizontalScrollIndicator = {false}
              style = {{marginTop: 15}}
            >
              {
                imgScroll.map(
                  (item,index) => {
                    return(
                      <TouchableOpacity
                        style = {{
                          width: 110,
                          height: 160,
                          marginLeft: 20
                        }}
                        key = {index}
                        activeOpacity = {1}
                        onPress = {() => alert("Detail")}
                      >
                        <Image
                          source = {{uri: item.image}}
                          style = {{width: 110, height: 110, borderRadius: 5}}
                        />
                        <Text
                          style = {{
                            fontSize: 11,
                            marginTop: 10
                          }}
                        >{item.type}</Text>
                        <Text
                          style = {{
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
          <View
            style = {{
              width: '100%',
              height: 230,
            }}
          >
            <Text
              style = {{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginLeft: 20,
                marginTop: 10
              }}
            >Romance</Text>
            <ScrollView
              horizontal = {true}
              showsHorizontalScrollIndicator = {false}
              style = {{marginTop: 15}}
            >
              {
                imgScroll.map(
                  (item,index) => {
                    return(
                      <TouchableOpacity
                        style = {{
                          width: 110,
                          height: 160,
                          marginLeft: 20
                        }}
                        key = {index}
                        activeOpacity = {1}
                        onPress = {() => alert("Detail")}
                      >
                        <Image
                          source = {{uri: item.image}}
                          style = {{width: 110, height: 110, borderRadius: 5}}
                        />
                        <Text
                          style = {{
                            fontSize: 11,
                            marginTop: 10
                          }}
                        >{item.type}</Text>
                        <Text
                          style = {{
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
          <View
            style = {{
              width: '100%',
              height: 230,
            }}
          >
            <Text
              style = {{
                color: 'black',
                fontSize: 17,
                fontWeight: '500',
                marginLeft: 20,
                marginTop: 10
              }}
            >Drama</Text>
            <ScrollView
              horizontal = {true}
              showsHorizontalScrollIndicator = {false}
              style = {{marginTop: 15}}
            >
              {
                imgScroll.map(
                  (item,index) => {
                    return(
                      <TouchableOpacity
                        style = {{
                          width: 110,
                          height: 160,
                          marginLeft: 20
                        }}
                        key = {index}
                        activeOpacity = {1}
                        onPress = {() => alert("Detail")}
                      >
                        <Image
                          source = {{uri: item.image}}
                          style = {{width: 110, height: 110, borderRadius: 5}}
                        />
                        <Text
                          style = {{
                            fontSize: 11,
                            marginTop: 10
                          }}
                        >{item.type}</Text>
                        <Text
                          style = {{
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
        </View>
        <View
          style = {{
            width: '100%',
            height: 140,
          }}
        >
          <TouchableOpacity
            style = {{
              width: '100%',
              height: 30,
              justifyContent: 'space-between',
              flexDirection: 'row'
            }}
            activeOpacity = {1}
            onPress = {() => this.props.navigation.navigate("ORIGINALS")}
          >
            <Text
              style = {{
                color: 'black',
                fontSize: 18,
                fontWeight: '500',
                marginLeft: 20
              }}
            >Genres</Text>
            <Text
              style = {{
                color: 'black',
                fontSize: 18,
                fontWeight: '500',
                marginRight: 15
              }}
            >></Text>
          </TouchableOpacity>
          <View
            style = {{
              width: '100%',
              height: 110,
              flexDirection: 'row'
            }}
          >
            <ScrollView
              horizontal = {true}
              showsHorizontalScrollIndicator = {false}
            >
              {
                type.map(
                  (item, index) => {
                    return(
                      <TouchableOpacity
                        style = {{
                          width: 80,
                          height: 100,
                          marginLeft: 15,
                          alignItems: 'center'
                        }}
                        activeOpacity = {1}
                        onPress = {() => this.props.navigation.navigate("ORIGINALS")}
                      >
                        <View
                          style = {{
                            width: 70,
                            height: 70,
                            backgroundColor: '#e3e3e3',
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 5
                          }}
                          key = {index}
                        >
                          <Icon name = {item.icon} size = {30} color = {'black'}/>
                        </View>
                        <Text
                          style = {{
                            color: 'black',
                            fontSize: 12
                          }}
                        >{item.name}</Text>
                      </TouchableOpacity>
                    )
                  }
                )
              }
            </ScrollView>
          </View>
        </View>
        <View
          style = {{
            width: '100%',
            height: 240,
            backgroundColor: 'red'
          }}
        >
          
        </View>
      </ScrollView>
    );
  }
}

export default ForYou;

const styles = StyleSheet.create({
  newHere: {
    width: '100%',
    height: 400,
    backgroundColor: '#eeebeb'
  }
});
