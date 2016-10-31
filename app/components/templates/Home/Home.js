import React from 'react';
import Title from '../../atoms/Title/Title';
import Article from '../../organisms/Article/Article';
import Form from '../../organisms/Form/Form';

const Home = (props) => {
  return (
    <div>
      <Title>Basic React App</Title>
      <Title>Example of an atomic Blog</Title>
      <Article
        title="This is an article"
        image={{src: 'http://placehold.it/300x200', alt: 'Placehold'}}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus,
        hendrerit lectus id, pulvinar massa."
      />

      <Article
        title="This is an article"
        image={{src: 'http://placehold.it/300x200', alt: 'Placehold'}}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus,
        hendrerit lectus id, pulvinar massa."
      />

      <hr/>

      <Title>Example of an Atomic Form</Title>
      <Form fields={props.form} buttonText="Submit"/>
    </div>
  );
};

Home.propTypes = {
  form: React.PropTypes.array
};

Home.defaultProps = {
  form: [
    {
      label: 'Input 1',
      placeholder: 'Placeholder for Input 1'
    },
    {
      label: 'Input 2',
      placeholder: 'Placeholder for Input 2'
    }
  ]
};

export default Home;
