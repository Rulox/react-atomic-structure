import React from 'react'
import Title from '../../atoms/Title/Title';
import Paragraph from '../../atoms/Paragraph/Paragraph';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="m__content">
                <Title text={this.props.title}/>
                <Paragraph text={this.props.text}/>
            </div>
        )
    }
}

Content.propTypes = {
    title: React.PropTypes.string,
    text: React.PropTypes.string
};
