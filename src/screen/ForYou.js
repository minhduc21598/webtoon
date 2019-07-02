import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import {newHere, topNewHere, imgSwiper, imgScroll} from '../component/Data';
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
              ref = {ref => this.Carousel = ref}
              onSnapToItem= {
                () => {
                  this.setState({
                    index: this.Carousel.currentIndex
                  })
                  this.getItem = newHere[this.state.index];
                  console.log("item", this.getItem)
                }
              }
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
          <TouchableOpacity
            style = {{
              width: '100%',
              height: 40,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row'
            }}
            onPress = {() => alert("Another screen")}
            activeOpacity = {1}
          >
            <Text
              style = {{
                color: 'black',
                fontSize: 15,
                fontWeight: '500',
                marginLeft: 20
              }}
            >Top Series
            </Text>
            <Text
              style = {{
                color: 'black',
                fontSize: 15,
                fontWeight: '500',
                marginRight: 15
              }}
            >>
            </Text>
          </TouchableOpacity>
          <View
            style = {{
              width: 300,
              height: 250,
            }}
          >
            {
              topNewHere.map(
                (item, index) => {
                  return(
                    <View
                      style = {{
                        width: 200,
                        height: 50,
                        flexDirection: 'row',
                        marginLeft: 20
                      }}
                      key = {index}
                    >
                      <Text
                        style = {{
                          marginTop: 9
                        }}
                      >{item.order}</Text>
                      <Image
                        source = {{uri: item.image}}
                        style = {{
                          width: 40,
                          height: 40,
                          resizeMode: 'center',
                          marginLeft: 8
                        }}
                      />
                      <View style = {{width: 100, height: 40}}>
                        <Text
                          style = {{
                            color: 'black',
                            fontSize: 15,
                            marginLeft: 5
                          }}
                        >{item.name}</Text>
                        <Text
                          style = {{
                            fontSize: 12,
                            marginLeft: 5
                          }}
                        >{item.type}</Text>
                      </View>
                    </View>
                  )
                }
              )
            }
          </View>
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
            backgroundColor: 'red'
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
              backgroundColor: 'green',
              flexDirection: 'row'
            }}
          >

          </View>
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
