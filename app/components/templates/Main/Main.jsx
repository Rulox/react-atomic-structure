import React      from 'react';
import PropTypes  from 'prop-types';

import Nav from '../../organisms/Nav/Nav';

const Main = props => (
  <div className="app">
    <Nav />
    {props.children}
  </div>
);

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
