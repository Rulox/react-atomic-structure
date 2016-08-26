import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/templates/Home/Home';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Note: You can use here react-router to render all your templates from this main App component.
        return (
            <Home/>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));