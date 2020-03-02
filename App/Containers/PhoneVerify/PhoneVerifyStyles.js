import { StyleSheet } from 'react-native'
import { Colors, Helpers } from 'App/Theme'

export default StyleSheet.create({
  upperContainer: {
    ...Helpers.fullWidth,
    paddingVertical: '3%',
    paddingHorizontal: 20,
    flex: 2
  },
  keyboardPanel: {
    flex: 3,
    paddingHorizontal: 0
  },
  keysWrapper: {
    flex: 2
  },
  buttonWrapper: {
    flex: 2,
    paddingHorizontal: 20
  },
  resendButton: {
    borderColor: Colors.primary,
    color: Colors.primary,
    borderWidth: 1
  },
  back: (margin) => ({
    marginVertical: margin
  }),
  veryfyHead: {
    ...Helpers.startedHead,
  },
  verifyText: {
    ...Helpers.startedText,
    paddingTop: 5
  },
  codeStyle: (margin) => ({
    marginTop: margin
  }),
  verifySuccess: {
    ...Helpers.fillCenter,
  },
  success: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    borderRadius: 35,
    borderColor: Colors.white,
    borderWidth: 1
  },
  successText: {
    color: Colors.white,
    fontWeight: 'bold',
    marginVertical: 25
  }
});