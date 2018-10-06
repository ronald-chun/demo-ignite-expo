import React, { Component } from 'react'
import { ScrollView, Text, TextInput, View, Button } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TestingScreenStyle'
import { KeyboardAccessoryNavigation, KeyboardAccessoryView } from 'react-native-keyboard-accessory'
import { Header, Input } from 'native-base'

class TestingScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <View style={styles.container}>
        <Header>
        </Header>
        <ScrollView>
          <Button title="Go to Navigation Example" onPress={() => {
            this.props.navigation.navigate('NavigationView')
          }} />
          <Input placeholder={'asdfsd'} />
        </ScrollView>
        <KeyboardAccessoryNavigation

          nextHidden={true}
          previousHidden={true}
          avoidKeyboard={true}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TestingScreen)
