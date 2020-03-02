import { StyleSheet } from 'react-native'


export default StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 1,
    // justifyContent: 'center',
    // alignContent: 'center'
  },
  walletWrapper: {
    flex: 2,
  },
  walletName: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: "bold",
    color: '#ffff'
  },
  sliderContainer: {
    flex: 2,
    alignContent: 'center',
    textAlign: 'center',
    width: '100%'
  },
  slideItem: {
    marginTop: 60,
    flex: 1,
    alignContent: 'center',
    width: '80%'
  },
  slideItemTitle: {
    textAlign: 'center',
    color: '#ffff',
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 10,
  },
  slideItemText: {
    textAlign: 'center',
    color: '#ffff',
    paddingTop: 5,
    marginLeft: 25,
    marginRight: 25
  },
  buttonsWrapper: {
    flex: 2,
    marginTop: 180
  },
  btn: {
    marginHorizontal: 20
  }
});