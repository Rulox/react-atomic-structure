import React from 'react';
import Title from '../../atoms/Title/Title';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const Content = (props) => {
  return (
    <div className="m__content">
      <Title>{props.title}</Title>
      <Paragraph>{props.text}</Paragraph>
    </div>
  );
};

Content.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.string
};

export default Content;
