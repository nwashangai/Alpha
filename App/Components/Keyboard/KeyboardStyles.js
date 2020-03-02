import { StyleSheet } from 'react-native'
import { Colors, Helpers } from 'App/Theme';

export default StyleSheet.create({
  mainWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: '100%',
  },
  button: (width) => ({
    width,
    height: '25%',
  }),
  text: {
    color: Colors.primary,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    paddingVertical: 8
  }
});