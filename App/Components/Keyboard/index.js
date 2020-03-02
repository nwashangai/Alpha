import React from 'react'
import { View, Dimensions, Image, Text, TouchableOpacity } from 'react-native'
import { Images } from 'App/Theme'

// Component

// Fixtures
import { keys } from './fixtures'

// interface
import { proptypes, defaultProps } from './interface';

// Styles
import styles from './KeyboardStyles'

const deviceWidth = Dimensions.get('window').width

const Keyboard = ({ onClick }) => {
  return (
    <View style={[styles.mainWrapper]}>
      {keys.map((item, index) =>
        item === '' ? (
          <View style={[styles.button(deviceWidth / 3)]} key={index}/>
        ) : (
          <TouchableOpacity style={[styles.button(deviceWidth / 3)]} onPress={() => onClick(item)} key={index}>
            {item === 'delete' ? <View style={[styles.text]}><Image style={[]} source={Images.delete}/></View> : <Text style={[styles.text]}>{item}</Text>}
          </TouchableOpacity>
        )
      )}
    </View>
  )
}

Keyboard.prototype = proptypes;
Keyboard.defaultProps = defaultProps;

export default Keyboard
