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
  dummyRecords = [
    {
      id: 1,
      date: '2018-9-18',
      description: '食飯',
      paymentMethod: '現金',
      type: 'expense',
      amount: 100
    },
    {
      id: 2,
      date: '2018-9-18',
      description: '買野',
      paymentMethod: '現金',
      type: 'expense',
      amount: 1000
    },
    {
      id: 3,
      date: '2018-9-18',
      description: '人工',
      paymentMethod: '支票',
      type: 'income',
      amount: 15000
    },
    {
      id: 4,
      date: '2018-9-18',
      description: '食飯',
      paymentMethod: '現金',
      type: 'expense',
      amount: 204
    }
  ]

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Container>
        <Header>
          <Left />
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
                  <Text style={[styles.date]}>{record.date}</Text>
                  <Text style={[styles.description]}>{record.description}</Text>
                  <Text note style={[styles.paymentMethod]}>{record.paymentMethod}</Text>
                </Body>
                <Right>
                  <Text style={[record.type === 'expense' ? styles.expense : styles.income]}>${record.amount}</Text>
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
