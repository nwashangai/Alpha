import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { ApplicationStyles, Helpers, Colors, Images, Metrics } from 'App/Theme';

// Component
import Background from 'App/Components/Background';
import Carousel from 'App/Components/Carousel';
import Button from 'App/Components/Button';

import { started } from './fixture';

// Styles
import styles from './HomeStyles'

const Home = () => {
  const deviceWidth = Dimensions.get('window').width

  const mapStarterTips = (data) => {
    return data.map((item, index) => (
      <View style={[styles.slideItem, {width: deviceWidth}]} key={index}>
          <Text style={styles.slideItemTitle}>{item.title}</Text>
          <Text style={styles.slideItemText}>{item.text}</Text>
      </View>
    ))
  }

  return(
    <Background>
      <View style={styles.container}>
        <View style={styles.walletWrapper}>
          <Text style={Helpers.logo}>A</Text>
          <Text style={styles.walletName}>Alpha Wallet</Text>
        </View>
        <View style={styles.sliderContainer}>
          <Carousel>
            {mapStarterTips(started)}
          </Carousel>
        </View>
        <View style={styles.buttonsWrapper}>
          <Button text="Get Started" styles={styles.btn}/>
          <Button text="Log In" theme="pure" styles={styles.btn}/>
        </View>
      </View>
    </Background>
  )
}

export default Home;