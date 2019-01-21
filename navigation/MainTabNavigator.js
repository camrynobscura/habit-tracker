import React from 'react'
import { Platform } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'
import UserScreen from '../screens/UserScreen'
import InfoScreen from '../screens/InfoScreen'
import HabitsScreen from '../screens/HabitsScreen'
import { Constants } from 'expo';

export default createMaterialTopTabNavigator(
  {
    Habits: {
      screen: HabitsScreen,
      navigationOptions: {
        tabBarLabel: 'Habits',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
          />
        )
      }
    },
    User: {
      screen: UserScreen,
      navigationOptions: {
        tabBarLabel: 'User',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
          />
        )
      }
    },
    Info: {
      screen: InfoScreen,
      navigationOptions: {
        tabBarLabel: 'Info',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#222',
        paddingTop: Constants.statusBarHeight,
      },
      showIcon: true,
      indicatorStyle: {
        backgroundColor: '#eb7a5e'
      }
    }
  }
)
