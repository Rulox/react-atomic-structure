import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import Home from './components/templates/Home/Home';
import Main from './components/templates/Main/Main';
import About from './components/templates/About/About';

// Stylesheets
require('./main.scss');

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

if (typeof window !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('app'));
}
