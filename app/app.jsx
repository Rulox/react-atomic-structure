import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/templates/Home/Home';
import Main from './components/templates/Main/Main';
import About from './components/templates/About/About';

require('./_style.scss');

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}  />
      <Route exact path="/" component={Home}  />
      <Route path="/about"  component={About} />
    </Switch>
  </BrowserRouter>
);

if (typeof window !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('app'));
}
