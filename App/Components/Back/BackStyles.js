import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme';

export default StyleSheet.create({
  wrapper: (margin) => ({
    marginVertical: margin,
    width: 25,
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 3,
    backgroundColor: Colors.white,
    justifyContent: "center",
    textAlign: "center"
  }),
  back: {
    width: 10,
    height: 15,
  }
});