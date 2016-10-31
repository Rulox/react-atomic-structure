import React from 'react';

const Button = (props) => {
  return (
    <button className="a__button">{props.children}</button>
  );
};

Button.propTypes = {
  children: React.PropTypes.string.isRequired
};

export default Button;
