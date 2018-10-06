import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AddRecordScreenStyle'
import {
  Body,
  Container,
  Content,
  Header,
  Left,
  Right,
  Title,
  Form,
  Item,
  Input,
  Footer,
  FooterTab,
  Button,
  Text,
  Picker,
  Icon,
  Label,
  Textarea,
  DatePicker
} from 'native-base'

class AddRecordScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: 'expense',
      amount: null,
      description: null,
      paymentMethod: 'cash',
      paymentMethodOthers: null,
      date: new Date()
    }
  }

  onTypeChange (value: string) {
    this.setState({
      type: value
    })
  }

  onPaymentMethodChange (value: string) {
    this.setState({
      paymentMethod: value
    })
  }

  render () {
    return (
      <Container style={[styles.container]}>
        <Header>
          <Left />
          <Body>
            <Title>本月紀錄</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item>
              <Label>類型</Label>
              <Right>
                <Picker
                  note
                  mode='dropdown'
                  iosIcon={<Icon name='arrow-down' />}
                  iosHeader='選擇類型'
                  headerBackButtonText={<Icon name='arrow-back' />}
                  selectedValue={this.state.type}
                  onValueChange={this.onTypeChange.bind(this)}
                >
                  <Picker.Item label='支出' value='expense' />
                  <Picker.Item label='收入' value='income' />
                </Picker>
              </Right>
            </Item>
            <Item>
              <Label>金額</Label>
              <Right>
                <Input
                  keyboardType={'decimal-pad'}
                  placeholder='請輸入金額'
                  value={this.state.amount}
                  onChangeText={(amount) => this.setState({amount})}
                  style={[styles.amountInput]}
                />
              </Right>
            </Item>
            <Item stackedLabel>
              <Label>描述</Label>
              <Textarea
                rowSpan={3}
                placeholder={'例如：iPhone XS Max'}
                value={this.state.description}
                onChangeText={(description) => this.setState({description})}
                style={[styles.descriptionTextArea]}
              />
            </Item>
            <Item>
              <Label>付款方式</Label>
              <Right>
                <Picker
                  note
                  mode='dropdown'
                  iosIcon={<Icon name='arrow-down' />}
                  iosHeader='選擇付款方式'
                  headerBackButtonText={<Icon name='arrow-back' />}
                  selectedValue={this.state.paymentMethod}
                  onValueChange={this.onPaymentMethodChange.bind(this)}
                >
                  <Picker.Item label='現金' value='cash' />
                  <Picker.Item label='信用卡' value='credit-card' />
                  <Picker.Item label='支票' value='cheque' />
                  <Picker.Item label='轉數易' value='fps' />
                  <Picker.Item label='其他' value='others' />
                </Picker>
              </Right>
            </Item>
            {
              this.state.paymentMethod === 'others'
                ? <Item>
                  <Input
                    placeholder='請輸入方式'
                    value={this.state.paymentMethodOthers}
                    onChangeText={(paymentMethodOthers) => this.setState({paymentMethodOthers})}
                    style={[styles.paymentMethodOthersInput]}
                  />
                </Item>
                : null
            }
            <Item last>
              <Label>日期</Label>
              <Right>
                <DatePicker
                  defaultDate={this.state.date}
                  modalTransparent={false}
                  animationType={'fade'}
                  androidMode={'default'}
                  onDateChange={(date) => this.setState({date})}
                />
              </Right>
            </Item>
          </Form>
        </Content>
        <Button full primary onPress={() => console.log('')}>
          <Text>新增</Text>
        </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddRecordScreen)
