import React from 'react'
import { View, Text, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { Helpers } from 'App/Theme'

// Components
import Button from 'App/Components/Button'
import Pannel from 'App/Components/Pannel'
import TextInput from 'App/Components/TextInput'

// Styles
import styles from './GetStartedStyles'

// interface
// import { proptypes, defaultProps } from './interface';

const deviceHeight = Dimensions.get('window').height

const Register = ({ isRegiserVisible }) => (
    <React.Fragment>
      <View style={[styles.upperRegisterContainer]}>
        <Text style={[Helpers.logo, styles.logo((2 / 100) * deviceHeight)]}>A</Text>
        <Text style={[styles.welcome]}>Welcome to Alpha Wallet</Text>
        <Text style={[styles.registerText]}>
          Please register in our application to continue work with your wallets
        </Text>
      </View>
      <Pannel customStyles={styles.registerPannelStyle}>
        <TextInput type="text" label="User name" />
        <TextInput type="text" label="E-mail" />
        <TextInput type="phone" label="Phone number" />
        <Button text="Get Started" theme="primary" styles={styles.started} />
        <View style={[styles.haveAcountView]}>
          <Text style={[styles.haveAccountText]}>Already have an account?</Text>
          <TouchableWithoutFeedback onPress={isRegiserVisible}>
            <Text style={[styles.haveAccountLogin]}>Login</Text>
          </TouchableWithoutFeedback>
        </View>
      </Pannel>
    </React.Fragment>
)

// Pannel.prototype = proptypes;
// Pannel.defaultProps = defaultProps;

export default Register
