import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// interface
import { proptypes, defaultProps } from './interface';

// Styles
import styles from './ButtonStyles';

const getStyles = ({ size, theme, outline}) => {
  const containerStyles = [styles.containerDefault];
  const textStyles = [styles.textDefault];

  if (theme === 'secondary') {
    containerStyles.push(styles.containerSecondary);
  } else if (theme === 'pure') {
    containerStyles.push(styles.containerPure);
  }

  return { containerStyles, textStyles };
};

const Button = ({ text, onPress, outline, size, theme, disabled, customStyles = {}, textProperties = {} }) => {
  const { textStyles, containerStyles } = getStyles({ size, theme, outline });

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={[containerStyles, customStyles]}>
      <Text style={[textStyles, textProperties]}>{text}</Text>
    </TouchableOpacity>
  )
}

Button.prototype = proptypes;
Button.defaultProps = defaultProps;

export default Button;