import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: Metrics.navBarHeight,
    // backgroundColor: Colors.background
  },
  amountInput: {
    textAlign: 'right',
    width: '100%'
  },
  descriptionTextArea: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: Metrics.smallMargin,
    width: '100%'
  },
  paymentMethodOthersInput: {
    textAlign: 'right'
  },
  dateInput: {
    textAlign: 'right',
    width: '100%'
  },
  calendar: {
    width: '100%'
  }
})
