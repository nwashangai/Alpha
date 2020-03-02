import { StyleSheet } from 'react-native'
import { Colors, Helpers } from 'App/Theme';

export default StyleSheet.create({
  upperRegisterContainer: {
    flex: 1,
    padding: 20,
    width: '100%',
  },
  upperLoginContainer: {
    flex: 3,
    padding: 20,
    width: '100%',
  },
  registerPannelStyle: {
    flex: 2
  },
  loginPannelStyle: {
    flex: 2
  },
  logo: (pad) => ({
      textAlign: 'left',
      marginBottom: 20,
      paddingTop: pad,
  }),
  welcome: {
    ...Helpers.startedHead
  },
  pad: (margin) => ({
    marginTop: margin
  }),
  registerText: {
    color: '#ffff',
    paddingTop: 15,
  },
  started: {
    width: '100%',
    marginTop: 40
  },
  haveAcountView: {
    flexDirection: 'row',
    justifyContent: "center"
  },
  haveAccountText: {
    fontSize: 14,
    color: Colors.suggestion
  },
  haveAccountLogin: {
    paddingLeft: 5,
    fontSize: 14,
    color: Colors.primary
  }
});