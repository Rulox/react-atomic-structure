import React from 'react';

require('./_style.scss');

const Input = props => (
  <input type={props.type} placeholder={props.placeholder} value={props.text} className="a__input" />
);

Input.propTypes = {
  text: React.PropTypes.string,
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string,
};

export default Input;
