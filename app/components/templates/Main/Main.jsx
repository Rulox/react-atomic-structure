import React from 'react';

import Nav from '../../organisms/Nav/Nav';

const Main = props =>
   (
     <div className="app">
       <Nav />

       {props.children}
     </div>
  )
;

Main.propTypes = {
  children: React.PropTypes.node,
};

export default Main;
