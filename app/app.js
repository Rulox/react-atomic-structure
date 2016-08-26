import React from 'react'
import ReactDOM from 'react-dom'

import Title from './components/atoms/Title/Title';
import Home from './components/templates/Home/Home';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Note: You can use here react-router to render all your templates from this main App component.
        return (
            <div>
                <Title text="Basic React App"/>
                <Home/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));