import React from 'react'
import Title from '../../atoms/Title/Title';
import Article from '../../organisms/Article/Article'
import Form from '../../organisms/Form/Form'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Title text="Example of an atomic Blog"/>
                <Article title="This is an article"
                     image={{'src': 'http://placehold.it/300x200', alt: 'Placehold'}}
                     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus,
                     hendrerit lectus id, pulvinar massa."/>

                <Article title="This is an article"
                     image={{'src': 'http://placehold.it/300x200', alt: 'Placehold'}}
                     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus,
                     hendrerit lectus id, pulvinar massa."/>

                <hr/>

                <Title text="Example of an Atomic Form"/>
                <Form fields={this.props.form} buttonText="Submit"/>
            </div>
        )
    }
}


Home.defaultProps = {
    form: [
        {
            label: "Input 1",
            placeholder: "Placeholder for Input 1"
        },
        {
            label: "Input 2",
            placeholder: "Placeholder for Input 2"
        }
    ]
};
