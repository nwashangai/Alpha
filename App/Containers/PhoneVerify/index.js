import React, { useState } from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
import { Colors, Images } from 'App/Theme'

// Components
import Background from 'App/Components/Background'
import Back from 'App/Components/Back'
import Button from 'App/Components/Button'
import Pannel from 'App/Components/Pannel'
import Keyboard from 'App/Components/Keyboard'
import KeyCodes from 'App/Components/KeyCodes'

// Styles
import styles from './PhoneVerifyStyles'

const deviceHeight = Dimensions.get('window').height

const PhoneVerify = ({ success = true }) => {
  const [_state, setState] = useState({ code: [] })

  const _handleButtonPress = (key) => {
    const updatedCode = [..._state.code]

    if (key === 'delete') {
      updatedCode.pop()
    } else {
      if (updatedCode.length < 5) {
        updatedCode.push(key)
      }
    }
    setState({ ..._state, code: [...updatedCode] })
  }

  return (
    <Background>
      {success ? (
        <View style={[styles.veryfySuccess]}>
          <View style={[styles.success]}><Image source={Images.mark} resizeMode={'contain'} /></View>
          <Text style={[styles.successText]}>Verification success</Text>
        </View>
      ) : (
        <>
          <View style={[styles.upperContainer]}>
            <Back customStyles={styles.back((2 / 100) * deviceHeight)} />
            <Text style={[styles.veryfyHead]}>Phone verification</Text>
            <Text style={[styles.verifyText, { lineHeight: 25 }]}>
              We send verification code to your number: +0142272426432
            </Text>
            <KeyCodes
              length={5}
              data={_state.code}
              customStyles={styles.codeStyle((3 / 100) * deviceHeight)}
            />
          </View>
          <Pannel customStyles={styles.keyboardPanel}>
            <View style={[styles.keysWrapper]}>
              <Keyboard onClick={_handleButtonPress} />
            </View>
            <View style={[styles.buttonWrapper]}>
              <Button text="Done" theme="primary" styles={[]} />
              <Button
                text="Resend code"
                theme="pure"
                customStyles={styles.resendButton}
                textProperties={{ color: Colors.primary }}
              />
            </View>
          </Pannel>
        </>
      )}
    </Background>
  )
}

export default PhoneVerify
