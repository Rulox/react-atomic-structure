import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Home from './components/templates/Home/Home';
import Main from './components/templates/Main/Main';
import About from './components/templates/About/About';

const App = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
