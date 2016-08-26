import React from 'react'
import Title from '../../atoms/Title/Title';
import Article from '../../organisms/Article/Article'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Title text="Basic React App (Home Page)"/>

                <Article title="This is an article"
                     image={{'src': 'http://placehold.it/300x200', alt: 'Placehold'}}
                     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus,
                     hendrerit lectus id, pulvinar massa."/>

                <Article title="This is an article"
                         image={{'src': 'http://placehold.it/300x200', alt: 'Placehold'}}
                         content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus,
                     hendrerit lectus id, pulvinar massa."/>
            </div>
        )
    }
}

