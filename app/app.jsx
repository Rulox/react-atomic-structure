import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/templates/Home/Home';
import Nav from './components/organisms/Nav/Nav';
import About from './components/templates/About/About';

require('./_style.scss');

const App = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </BrowserRouter>
);

if (typeof window !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('app'));
}
