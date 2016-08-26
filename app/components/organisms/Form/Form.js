import React from 'react'
import LabeledInput from '../../molecules/LabeledInput/LabeledInput';
import Button from '../../atoms/Button/Button';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form className="o__form">
                {
                    this.props.fields.map((field, i) => {
                        return (
                            <LabeledInput label={field.label} placeholder={field.placeholder} key={i} />
                        )
                    })
                }
                <Button text={this.props.buttonText}/>
            </form>
        )
    }
}

Form.propTypes = {
    fields: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    buttonText: React.PropTypes.string.isRequired
};
