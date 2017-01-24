import React from 'react';
import Content from '../../molecules/Content/Content';

const Article = props => (
  <div className="o__article">
    <img className="article_featured" src={props.image.src} alt={props.image.alt} />
    <Content text={props.content} title={props.title} />
  </div>
);

Article.propTypes = {
  image: React.PropTypes.object,
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string,
};

export default Article;
