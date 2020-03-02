import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'

// Components
import Background from 'App/Components/Background'
import DismissKeyboard from 'App/Components/DismissKeyboard'

// Children Conponents
import Register from './Register'
import Login from './Login'

// interface
// import { proptypes, defaultProps } from './interface';

const GetStarted = ({}) => {
  ;[_state, setState] = useState({ isRegister: true })

  const _handleIsRegister = (e) => {
    setState({ ..._state, isRegister: !_state.isRegister })
  }
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <Background>
        <DismissKeyboard>
          {_state.isRegister ? (
            <Register isRegiserVisible={_handleIsRegister} />
          ) : (
            <Login isRegiserVisible={_handleIsRegister} />
          )}
        </DismissKeyboard>
      </Background>
    </KeyboardAvoidingView>
  )
}

// Pannel.prototype = proptypes;
// Pannel.defaultProps = defaultProps;

export default GetStarted
