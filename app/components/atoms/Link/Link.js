import React from 'react'

const Link = (props) => {
    return (
        <a className="a__link" href={props.href}>{props.text}</a>
    )
};

Link.propTypes = {
    href: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
};

export default Link;