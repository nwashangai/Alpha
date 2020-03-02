import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme';

export default StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.input,
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 8
  },
  input: {
    flexDirection: 'row',
  },
  text: {
    width: '100%'
  },
  code: {
    color: Colors.inputLabel,
    paddingRight: 5
  },
  label: {
    fontSize: 11,
    color: Colors.inputLabel,
    marginBottom: 10
  },
  flag: {
    width: 40,
    height: 40,
    borderRadius: 5,
    position: 'relative',
    zIndex: 2,
  }
});