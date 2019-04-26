import React      from 'react';
import PropTypes  from 'prop-types';

import './Button.scss';

const Button = ({ children, type, ...props }) => (
  <button className='Button' {...props}>{children}</button>
);

Button.propTypes = {
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button;