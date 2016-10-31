import React from 'react';

const Title = (props) => {
  return (
    <h1 className="a__title">{props.children}</h1>
  );
};

Title.propTypes = {
  children: React.PropTypes.string.isRequired
};

export default Title;
