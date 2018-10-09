import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../atoms/Title/Title';
import Article from '../../organisms/Article/Article';
import Form from '../../organisms/Form/Form';

require('./_style.scss');

const Home = props => (
  <div>
    <Title text="Basic React App" />
    <Title text="Example of an atomic Blog" />
    <Article
      title="This is an article"
      image={{ src: 'http://placehold.it/300x200', alt: 'Placehold' }}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus,
      hendrerit lectus id, pulvinar massa."
    />

    <Article
      title="This is an article"
      image={{ src: 'http://placehold.it/300x200', alt: 'Placehold' }}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus,
      hendrerit lectus id, pulvinar massa."
    />

    <hr />
    <Title text="Example of an Atomic Form" />
    <Form fields={props.form} buttonText="Submit" />
  </div>
);

Home.propTypes = {
  form: PropTypes.array,
};

Home.defaultProps = {
  form: [
    {
      label: 'Input 1',
      placeholder: 'Placeholder for Input 1',
    },
    {
      label: 'Input 2',
      placeholder: 'Placeholder for Input 2',
    },
  ],
};

export default Home;
