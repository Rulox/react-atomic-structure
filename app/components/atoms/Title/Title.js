import React from 'react'

const Title = (props) => {

    return (
        <h1 className="a__title">{props.text}</h1>
    )
};

Title.propTypes = {
    text: React.PropTypes.string.isRequired,
};

export default Title;