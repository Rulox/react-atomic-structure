import React      from 'react';
import PropTypes  from 'prop-types';

require('./_style.scss');

const Label = props => (
  <span className="a__label">{props.text}</span>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Label;
