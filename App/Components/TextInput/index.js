import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

// Third party
import CountryPicker from 'react-native-country-picker-modal';

// Styles
import styles from './TextInputStyles'

// interface
import { proptypes, defaultProps } from './interface'

const withFlag = true
const defaultCountry = {
  callingCode: ['234'],
  cca2: 'NG',
  currency: ['NGN'],
  flag: 'flag-ng',
  name: 'Nigeria',
  region: 'Africa',
  subregion: 'Western Africa',
}

const Input = ({ type, label }) => {
  const [country, setCountry] = useState(defaultCountry)
  const [countryCode, setCountryCode] = useState(defaultCountry.cca2)

  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country)
    console.log(country)
  }

  return (
    <View style={[styles.inputWrapper]}>
      <View>
        <Text style={[styles.label]}>{label}</Text>
        <View style={[styles.input]}>
          {type === 'phone' && <Text style={[styles.code]}>+{country.callingCode}</Text>}
          <TextInput
            style={type === 'phone' ? {width: '80%'} : styles.text}
            keyboardType={type === 'phone' ? 'numeric' : 'default'}
            maxLength={type === 'phone' ? 11 : 150}
          />
        </View>
      </View>
      {type === 'phone' && (
        <View style={[styles.flag]}>
          <CountryPicker
            {...{
              countryCode,
              onSelect,
              withFlag,
            }}
          />
        </View>
      )}
    </View>
  )
}

Input.prototype = proptypes
Input.defaultProps = defaultProps

export default Input
