import React        from 'react';
import PropTypes    from 'prop-types';

import LabeledInput from '../../molecules/LabeledInput/LabeledInput';
import Button       from '../../atoms/Button/Button';

require('./_style.scss');

const Form = props => (
  <form className="o__form">
    {
      props.fields.map((field, i) => (<LabeledInput label={field.label} placeholder={field.placeholder} key={i} />))
    }
    <Button text={props.buttonText} />
  </form>
);

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Form;
