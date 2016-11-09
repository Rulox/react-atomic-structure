import React from 'react';

const Paragraph = props =>
   (
     <p className="a__paragraph">{props.text}</p>
  )
;

Paragraph.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default Paragraph;
