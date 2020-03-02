import PropTypes from 'prop-types';

export const proptypes = {
  type: PropTypes.oneOf(['text', 'number', 'phone']),
  label: PropTypes.string.isRequired,
}

export const defaultProps = {
  type: 'text'
}