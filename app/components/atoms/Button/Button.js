import React from 'react'

const Button = (props) => {
  return (
    <button className="a__button">{props.text}</button>
  )
};

Button.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default Button;