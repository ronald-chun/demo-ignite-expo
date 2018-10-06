import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PreviousMonthsRecordsScreenStyle'

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
import { View } from 'react-native-animatable'

class PreviousMonthsRecordsScreen extends Component {
  dummyItem = [
    {
      year: 2018,
      months: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ]
    },
    {
      year: 2017,
      months: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ]
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
            <Title>過往紀錄</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List
            dataArray={this.dummyItem}
            renderRow={(item) =>
              <View>
                <ListItem itemDivider>
                  <Text>{item.year}年</Text>
                </ListItem>
                {item.months.map((month) => {
                  return (
                    <ListItem
                      key={month}
                      noIndent
                      onPress={() => this.props.navigation.navigate('CurrentMonthRecordsScreen')}>
                      <Left>
                        <Text>{month}月</Text>
                      </Left>
                      <Right>
                        <Icon name='arrow-forward' />
                      </Right>
                    </ListItem>
                  )
                })}
              </View>
            }
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(PreviousMonthsRecordsScreen)
