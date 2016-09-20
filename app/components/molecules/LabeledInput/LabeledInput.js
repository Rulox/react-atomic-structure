import React from 'react'
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';

export default class LabeledInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="m__labeled_input">
        <Label text={this.props.label}/>
        <Input value="" placeholder={this.props.placeholder} type="text"/>
      </div>
    )
  }
}

LabeledInput.propTypes = {
  label: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string
};
