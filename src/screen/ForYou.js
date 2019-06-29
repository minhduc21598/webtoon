import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class ForYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View>
          <StatusBar
            barStyle = 'dark-content'
            backgroundColor = 'white'
          />
        </View>
        <ScrollView>
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
              <Icon name = 'logo-android' size = {50} style = {{marginLeft: 20}}/>
              <TouchableOpacity
                activeOpacity={0}
                onPress = {() => alert("btnSearch")}
              >
                <Icon name = 'ios-search' size = {35} style = {{marginRight: 15}}/>
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
          </View>
        </ScrollView>
      </View>
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
