import React from 'react';

const Paragraph = (props) => {
  return (
    <p className="a__paragraph">{props.children}</p>
  );
};

Paragraph.propTypes = {
  children: React.PropTypes.string.isRequired
};

export default Paragraph;
