import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ScreenTwoStyle'

import { Button, Text } from 'native-base'

class ScreenTwo extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  _onClick () {
    this.props.navigation.navigate('ScreenOneScreen')
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>ScreenTwo Container</Text>
        <Button onPress={() => this._onClick()}>
          <Text>12345</Text>
        </Button>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenTwo)
