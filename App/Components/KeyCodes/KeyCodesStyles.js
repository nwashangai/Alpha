import { StyleSheet } from 'react-native'
import { Colors, Helpers } from 'App/Theme';

export default StyleSheet.create({
  mainContainer: {
    ...Helpers.fullWidth,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  codeWrapper: {
    width: 33.8,
    height: 35,
    borderBottomColor: Colors.white,
    borderBottomWidth: 2
  },
  nonEmptyInput: {
    borderBottomColor: Colors.primary,
  },
  code: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    color: Colors.white,
  },
  emptyCode: {
    width: 3,
    height: 3,
    borderRadius: 3,
    borderColor: Colors.white,
    borderWidth: 3
  }
});