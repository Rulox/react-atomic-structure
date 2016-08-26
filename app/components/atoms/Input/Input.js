import React from 'react'

const Input = (props) => {
    return (
        <input type={props.type} value={props.text} className="a__input"></input>
    )
};

Input.propTypes = {
    value: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired
};

export default Input;