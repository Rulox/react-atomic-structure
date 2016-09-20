import React from 'react'

import Nav from '../../organisms/Nav/Nav';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Nav />

        {this.props.children}
      </div>
    )
  }
}
