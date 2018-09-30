import { createStackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import ScreenOneScreen from '../Containers/ScreenOneScreen'
import ScreenTwo from '../Containers/ScreenTwo'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: {screen: LaunchScreen},
  ScreenOneScreen: {screen: ScreenOneScreen},
  ScreenTwo: {screen: ScreenTwo}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ScreenOneScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
