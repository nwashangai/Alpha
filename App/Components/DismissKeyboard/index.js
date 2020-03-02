import React from 'react'
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native'

export default ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={{flex: 1, width: '100%'}}>{children}</View>
  </TouchableWithoutFeedback>
)
