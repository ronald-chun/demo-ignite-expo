import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({

  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  date: {
    marginBottom: Metrics.baseMargin
  },
  description: {
    marginBottom: Metrics.baseMargin
  },
  paymentMethod: {
    marginBottom: Metrics.baseMargin
  },
  expense: {
    color: Colors.expense
  },
  income: {
    color: Colors.income
  }
})
