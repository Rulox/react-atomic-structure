import React from 'react';

const Input = (props) => {
  return (
    <input type={props.type} placeholder={props.placeholder} value={props.text} className="a__input"/>
  );
};

Input.propTypes = {
  text: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string
};

export default Input;