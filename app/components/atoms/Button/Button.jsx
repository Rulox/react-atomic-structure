import React from 'react';

require('./_style.scss');

const Button = props => (
  <button className="a__button">{props.text}</button>
);

Button.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default Button;
