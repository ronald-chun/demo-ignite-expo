import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CurrentMonthRecordsScreenStyle'

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  ListItem,
  Thumbnail
} from 'native-base'

class CurrentMonthRecordsScreen extends Component {
  dummyRecords = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>本月紀錄</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List
            dataArray={this.dummyRecords}
            renderRow={(record) =>
              <ListItem thumbnail noIndent>
                <Left>
                  <Thumbnail
                    square
                    source={{uri: 'https://cdn4.iconfinder.com/data/icons/objects-things-essentials-vol-2/48/v-27-512.png'}} />
                </Left>
                <Body>
                  <Text>2018-9-18</Text>
                  <Text>食飯</Text>
                  <Text note>現金</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            } />
        </Content>
      </Container>

    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentMonthRecordsScreen)
