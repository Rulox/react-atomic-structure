import React      from 'react';
import PropTypes  from 'prop-types';

require('./_style.scss');

const Button = props => (
  <button className="a__button">{props.text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
