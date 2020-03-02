import React from 'react'
import { View, Text } from 'react-native'

// Helpers
import { Colors } from 'App/Theme'

// Styles
import styles from './KeyCodesStyles';

const Code = ({ value = '*' }) => <View style={[styles.codeWrapper, (value !== '*') ? styles.nonEmptyInput : {}]}>{value === '*' ? <View style={[styles.code]}><View style={[styles.emptyCode]}/></View> : <Text style={[styles.code, {color: Colors.primary}]}>{value}</Text>}</View>

const KeyCodes = ({ length, data, onClick = null, customStyles = {} }) => {
  const filledData = [...data, ...new Array(length - data.length).fill('*')]

  return (
    <View style={[styles.mainContainer, customStyles]}>
      {filledData.map((item, index) => (
        <Code value={item} key={index} />
      ))}
    </View>
  )
}

export default KeyCodes;
