import React from 'react';
import LabeledInput from '../../molecules/LabeledInput/LabeledInput';
import Button from '../../atoms/Button/Button';

const Form = (props) => {
  return (
    <form className="o__form">
      {
        props.fields.map((field, i) => {
          return (
            <LabeledInput label={field.label} placeholder={field.placeholder} key={i}/>
          );
        })
      }
      <Button>{props.buttonText}</Button>
    </form>
  );
};

Form.propTypes = {
  fields: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  buttonText: React.PropTypes.string.isRequired
};

export default Form;
