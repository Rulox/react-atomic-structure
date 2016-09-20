import React from 'react';

const Label = (props) => {
  return (
    <span className="a__label">{props.text}</span>
  );
};

Label.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default Label;