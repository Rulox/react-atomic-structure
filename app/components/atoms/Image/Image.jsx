import React from 'react';

require('./_style.scss');

const Image = props => (
  <img className="a__image" src={props.src} alt={props.alt} />
);

Image.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
};

export default Image;
