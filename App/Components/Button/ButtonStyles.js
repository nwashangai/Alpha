import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme';

export default StyleSheet.create({
  containerDefault: {
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    marginVertical: 10,
  },
  textDefault: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff'
  },
  containerSecondary: {
    backgroundColor: Colors.secondary,
    borderColor: Colors.secondary,
  },
  containerPure: {
    backgroundColor: Colors.whiteTransparent,
    borderColor: Colors.transparent,
  }
});