import React from 'react'
import ReactDOM from 'react-dom'

import Title from './components/atoms/Title/Title.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Note: You can use here react-router to render all your templates from the same component.
        return (
            <div>

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));