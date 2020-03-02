import React from 'react'
import { View, ImageBackground } from 'react-native'
import { Helpers, Images } from 'App/Theme'

import styles from './BackgroundStyle';

export default ({ children }) => {

  return(
    <ImageBackground source={Images.background} style={[Helpers.fillCenter]}>
      <View style={[Helpers.fillCenter, styles.container]}>
        {children}
      </View>
    </ImageBackground>
  )
}
