import React      from 'react';
import PropTypes  from 'prop-types';

import './Button.scss';

const Button = ({ children, type ...props }) => (
  <button className='Button' {...props}>{children}</button>
);

Input.propTypes = {
  type: PropTypes.string,
}

Input.defaultProps = {
  type: 'button',
}

export default Button;