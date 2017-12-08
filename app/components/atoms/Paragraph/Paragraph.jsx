import React from 'react';
import PropTypes  from 'prop-types';

require('./_style.scss');

const Paragraph = props => (
  <p className="a__paragraph">{props.text}</p>
);

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Paragraph;
