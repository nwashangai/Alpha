import { StyleSheet } from 'react-native'


export default StyleSheet.create({
  container: {
    position: 'relative',
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center'
  },
  scrollView: {
    height: 150,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: -23,
    height: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  blueCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: '#5EA7FF'
  },
  whiteCircle: {
    width: 4,
    height: 4,
    borderRadius: 2,
    margin: 5,
    backgroundColor: '#fff'
  }
});