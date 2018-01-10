import React from 'react';
import PropTypes  from 'prop-types';

import Content from '../../molecules/Content/Content';

require('./_style.scss');

const Article = props => (
  <div className="o__article">
    <img className="article_featured" src={props.image.src} alt={props.image.alt} />
    <Content text={props.content} title={props.title} />
  </div>
);

Article.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

export default Article;
