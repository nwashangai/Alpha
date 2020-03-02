import React from 'react'
import { View, Text, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { Helpers } from 'App/Theme'

// Components
import Button from 'App/Components/Button'
import Pannel from 'App/Components/Pannel'
import TextInput from 'App/Components/TextInput'

// Styles
import styles from './GetStartedStyles'

const deviceHeight = Dimensions.get('window').height

const GetStarted = ({ isRegiserVisible }) => (
  <React.Fragment>
    <View style={[styles.upperLoginContainer]}>
      <Text style={[Helpers.logo, styles.logo((2 / 100) * deviceHeight)]}>A</Text>
      <Text style={[styles.welcome, styles.pad((4 / 100) * deviceHeight)]}>Welcome!</Text>
      <Text style={[styles.registerText]}>
        Please enter your phone number to continue
      </Text>
    </View>
    <Pannel customStyles={styles.loginPannelStyle}>
      <TextInput type="phone" label="Phone number" />
      <Button text="Log in" theme="primary" styles={styles.started} />
      <View style={[styles.haveAcountView]}>
        <Text style={[styles.haveAccountText]}>Still have no account?</Text>
        <TouchableWithoutFeedback onPress={isRegiserVisible}>
          <Text style={[styles.haveAccountLogin]}>Register</Text>
        </TouchableWithoutFeedback>
      </View>
    </Pannel>
  </React.Fragment>
);

export default GetStarted
