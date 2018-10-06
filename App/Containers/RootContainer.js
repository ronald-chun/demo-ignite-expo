import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

// Styles
import styles from './Styles/RootContainerStyles'
import AppNavigation from '../Navigation/AppNavigation'
import { AppLoading } from 'expo'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'

class RootContainer extends Component {
  state = {
    isReady: false
  }

  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  async componentWillMount () {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf')
    })
    this.setState({isReady: true})
  }

  render () {
    if (this.state.isReady) {
      return (
        <View style={styles.applicationView}>
          <StatusBar barStyle='light-content' />
          <AppNavigation />
          <KeyboardAccessoryNavigation
            nextHidden
            previousHidden
          />
        </View>
      )
    } else {
      return <AppLoading />
    }
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
