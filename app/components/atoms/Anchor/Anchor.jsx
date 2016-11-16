import React from 'react';

const Anchor = props =>
   (
     <a className="a__anchor">{props.text}</a>
  )
;

Anchor.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default Anchor;
