import React from 'react';
import Title from '../../atoms/Title/Title';
import Paragraph from '../../atoms/Paragraph/Paragraph';

require('./_style.scss');

const Content = props => (
  <div className="m__content">
    <Title text={props.title} />
    <Paragraph text={props.text} />
  </div>
);

Content.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.string,
};

export default Content;
