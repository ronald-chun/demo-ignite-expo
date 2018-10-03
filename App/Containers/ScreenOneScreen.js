import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ScreenOneScreenStyle'

import { Button } from 'native-base'

class ScreenOneScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  _onClick () {
    this.props.navigation.navigate('ScreenTwo')
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>ScreenOneScreen</Text>
          <Button onPress={() => this._onClick(0)}>
            <Text>12345</Text>
          </Button>
        </KeyboardAvoidingView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ScreenOneScreen)
