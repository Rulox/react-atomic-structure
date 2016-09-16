import React from 'react'

import Nav from '../../organisms/Nav/Nav';
import Link from '../../../components/atoms/Link/Link.js'

export default class Main extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div className="app">
        <Nav />
      
        {this.props.children}
      </div>
    )
  }
}
