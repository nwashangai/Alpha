import React from 'react'
import { TouchableOpacity, Image, Dimensions } from 'react-native'

// images
import { Images } from 'App/Theme'

// Styles
import styles from './BackStyles'

const deviceHeight = Dimensions.get('window').height

const Back = ({ customStyle = {} }) => {
  return (
  <TouchableOpacity style={[styles.wrapper((3 / 100) * deviceHeight), customStyle]}><Image style={[styles.back]} source={Images.backSecondary} resizeMode={'contain'} /></TouchableOpacity>
  )
}

export default Back;