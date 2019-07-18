import React from 'react';
import {
    createBottomTabNavigator, 
    createAppContainer,
    createMaterialTopTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ForYou from '../screen/ForYou';
import Originals from '../screen/Originals';
import Canvas from '../screen/Canvas';
import My from '../screen/My';
import More from '../screen/More';

const Footer = createMaterialTopTabNavigator(
    {
        FORYOU:{
            screen: ForYou,
            navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-heart-empty" color={tintColor} size={24}/>
                )
            }
        },
        ORIGINALS:{
            screen: Originals,
            navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-paper" color={tintColor} size={24}/>
                )
            }
        },
        CANVAS:{
            screen: Canvas,
            navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-image" color={tintColor} size={24}/>
                )
            }
        },
        MY:{
            screen: My,
            navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-person" color={tintColor} size={24}/>
                )
            }
        },
        MORE:{
            screen: More,
            navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-more" color={tintColor} size={24}/>
                )
            }
        }
    },
    {
        tabBarOptions:{
            activeTintColor: '#00a73e',
            inactiveColor: 'white',
        },
        tabBarPosition:'bottom'
    }
)

export default createAppContainer(Footer);