import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Season from '../screen/Season';
import Daily from '../screen/Daily';
import Ranking from '../screen/Ranking';
import Previous from '../screen/Previous';
import Search from '../screen/Search';

const Footer = createBottomTabNavigator(
    {
        Season:{
            screen: Season,
            navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-snow" color={tintColor} size={24}/>
                )
            }
        },
        Daily:{
            screen: Daily,
            navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-paper" color={tintColor} size={24}/>
                )
            }
        },
        Previous:{
            screen: Previous,
            navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                    <Icon1 name="skip-previous" color={tintColor} size={24}/>
                )
            }
        },
        Ranking:{
            screen: Ranking,
            navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                    <Icon1 name="medal" color={tintColor} size={24}/>
                )
            }
        },
        Search:{
            screen: Search,
            navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-search" color={tintColor} size={24}/>
                )
            }
        }
    },
    {
        tabBarOptions:{
            activeTintColor: '#00a73e',
            inactiveColor: 'white',
        },
    }
)

export default createAppContainer(Footer);