import React from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ForYou from '../screen/ForYou';
import Originals from '../screen/Originals';
import Canvas from '../screen/Canvas';
import My from '../screen/My';
import More from '../screen/More';

const Footer = createBottomTabNavigator(
    {
        ForYou:{
            screen: ForYou,
            navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-heart-empty" color={tintColor} size={24}/>
                )
            }
        },
        Originals:{
            screen: Originals,
            navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-paper" color={tintColor} size={24}/>
                )
            }
        },
        Canvas:{
            screen: Canvas,
            navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-image" color={tintColor} size={24}/>
                )
            }
        },
        My:{
            screen: My,
            navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-person" color={tintColor} size={24}/>
                )
            }
        },
        More:{
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
        }
    }
)

export default createAppContainer(Footer);