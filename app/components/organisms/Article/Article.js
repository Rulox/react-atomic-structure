import React from 'react'
import Content from '../../molecules/Content/Content';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="o__article">
                <img className="article_featured" src={this.props.image.src} alt={this.props.image.alt}/>
                <Content text={this.props.content} title={this.props.title}/>
            </div>
        )
    }
}

Article.propTypes = {
    image: React.PropTypes.object,
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string
};
