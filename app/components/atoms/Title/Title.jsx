import React from 'react';

require('./_style.scss');

const Title = props => (
  <h1 className="a__title">{props.text}</h1>
);

Title.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default Title;
