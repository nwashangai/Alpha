import React from 'react';
import { View } from 'react-native';

// Styles
import styles from './PannelStyles'

// interface
import { proptypes, defaultProps } from './interface';

const Pannel = ({ children, customStyles }) => (
  <View style={[styles.wrapper, customStyles]}>
    {children}
  </View>
);

Pannel.prototype = proptypes;
Pannel.defaultProps = defaultProps;

export default Pannel;