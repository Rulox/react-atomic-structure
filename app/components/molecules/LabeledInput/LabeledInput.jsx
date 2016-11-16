import React from 'react';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';

const LabeledInput = props =>
   (
     <div className="m__labeled_input">
       <Label text={props.label} />
       <Input value="" placeholder={props.placeholder} type="text" />
     </div>
  )
;

LabeledInput.propTypes = {
  label: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
};

export default LabeledInput;
