import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Icon } from 'native-base'

import styles from './Styles/NavigationStyles'

import LaunchScreen from '../Containers/LaunchScreen'
import ScreenOneScreen from '../Containers/ScreenOneScreen'
import ScreenTwo from '../Containers/ScreenTwo'
import CurrentMonthRecordsScreen from '../Containers/CurrentMonthRecordsScreen'
import PreviousMonthsRecordsScreen from '../Containers/PreviousMonthsRecordsScreen'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: {screen: LaunchScreen},
  ScreenOneScreen: {screen: ScreenOneScreen},
  ScreenTwo: {screen: ScreenTwo},
  CurrentMonthRecordsScreen: {screen: CurrentMonthRecordsScreen}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'tabs',
  navigationOptions: {
    headerStyle: styles.header
  }
})

const BaseNavigator = createBottomTabNavigator({
  CurrentMonthRecords: {
    screen: CurrentMonthRecordsScreen,
    navigationOptions: ({navigation}) => {
      return {
        tabBarLabel: '本月紀錄',
        tabBarIcon: ({tintColor, focused}) => (
          focused
            ? <Icon name='ios-list-box-outline' style={{color: tintColor}} />
            : <Icon name='ios-list-box-outline' />
        )
      }
    }
  },
  PreviousMonthsRecords: {
    screen: PreviousMonthsRecordsScreen,
    navigationOptions: ({navigation}) => {
      return {
        tabBarLabel: '過往紀錄',
        tabBarIcon: ({tintColor, focused}) => (
          focused ? <MaterialCommunityIcons name='history' size={32} color={tintColor} /> : <MaterialCommunityIcons
            name='history' size={32} />
        )
      }
    }
  }
}, {
  initialRouteName: 'CurrentMonthRecords'
})

export default BaseNavigator
