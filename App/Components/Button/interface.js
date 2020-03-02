import PropTypes from 'prop-types';

export const proptypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  theme: PropTypes.oneOf(['primary', 'secondary', 'pure']),
  disabled: PropTypes.bool,
  style: PropTypes.any
}

export const defaultProps = {
  size: 'deafault',
  theme: 'primary',
  outline: false,
  disabled: false,
  deafault: {}
}