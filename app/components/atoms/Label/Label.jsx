import React from 'react';

require('./_style.scss');

const Label = props => (
  <span className="a__label">{props.text}</span>
);

Label.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default Label;
