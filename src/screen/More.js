import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor = 'transparent'
          barStyle = 'dark-content'
          translucent = {true}
        />
        <View 
          style = {{
            width: '100%', 
            height: 60, 
            marginTop: 30, 
            justifyContent: 'center',
          }}
        >
          <Text 
            style = {{
              fontSize: 23, 
              fontWeight: '500', 
              color: 'black', 
              marginLeft: 18
            }}
          >More</Text>
        </View>
        <View 
          style = {{
            width: '100%', 
            height: 100, 
            backgroundColor: '#f4f4f4', 
            flexDirection: 'row',
          }}
        >
          <View 
            style = {{
              width: 200, 
              height: 100
            }}
          >
            <Icon name = 'logo-bitcoin' size = {27} color = '#f0b600'
              style = {{
                marginLeft: 20, 
                marginTop: 20
              }}
            >
              <Text 
                style = {{
                  color: 'black', 
                  fontSize: 30, 
                  fontWeight: '500'
                }}
              >
                {" "}0
              </Text>
            </Icon>
            <Text 
              style = {{
                color: 'black', 
                fontSize: 15, 
                fontWeight: '500', 
                marginLeft: 20, 
                marginTop: 10
              }}
            >
              Purchased{" "}0{"\t\t"}Free{" "}0
            </Text>
          </View>
          <TouchableOpacity
            style = {{
              width: 90, 
              height: 40, 
              backgroundColor: '#15d849', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: 5,
              marginLeft: 50,
              marginTop: 30
            }}
            onPress = {() => alert("btn Buy")}
          >
            <Text style = {{color: 'white'}}>Buy coins</Text>
          </TouchableOpacity>
        </View>
        <View
          style = {{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            borderStyle: 'solid',
            borderColor: 'gray',
            borderWidth: 0.5
          }}
        >
          <TouchableOpacity
            style = {{
              width: 120,
              height: 100,
              borderStyle: 'solid',
              borderRightWidth: 0.5,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress = {() => alert("Search")}
          >
            <Icon name = 'ios-search' size = {40} color = 'black'
              style = {{
                marginBottom: 10
              }}
            />
            <Text style = {{color: 'black'}}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {{
              width: 120,
              height: 100,
              borderStyle: 'solid',
              borderRightWidth: 0.5,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress = {() => alert("Settings")}
          >
            <Icon name = 'ios-options' size = {40} color = 'black'
              style = {{
                marginBottom: 10
              }}
            />
            <Text style = {{color: 'black'}}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {{
              width: 120,
              height: 100,
              borderStyle: 'solid',
              borderRightWidth: 0.5,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress = {() => alert("Fan Translation")}
          >
            <Icon name = 'ios-swap' size = {40} color = 'black'
              style = {{
                marginBottom: 10
              }}
            />
            <Text style = {{color: 'black'}}>Fan Translation</Text>
          </TouchableOpacity>
        </View>
        <View
          style = {{
            width: '100%',
            height: 40,
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            onPress = {() => alert("Notice")}
          >
            <Text
              style = {{
                color: 'black',
                fontSize: 14,
                fontWeight: '500',
                marginTop: 10,
                marginLeft: 15,
              }}
            >
              Notice{"   "}></Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress = {() => alert("Notice")}
          >
            <Text
              style = {{
                color: 'gray',
                fontSize: 14,
                fontWeight: '400',
                marginTop: 10,
                marginLeft: 10
              }}
            >
              Changes to our Terms of Use and Privacy P...</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default More;

const styles = StyleSheet.create({
  container:{

  }
});
