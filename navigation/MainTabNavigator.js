import React from 'react'
import { Platform } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'
import UserScreen from '../screens/UserScreen'
import SettingsScreen from '../screens/SettingsScreen'
import HabitsScreen from '../screens/HabitsScreen'

export default createMaterialTopTabNavigator(
  {
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
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-cog' : 'md-cog'}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#222',
        paddingTop: 24
      },
      showIcon: true,
      indicatorStyle: {
        backgroundColor: '#eb7a5e'
      }
    }
  }
)
