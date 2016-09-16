import React from 'react'
import { Link } from 'react-router'

export default class Nav extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <nav className="o__nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/another-page">Another Page</Link></li>
        </ul>
      </nav>
    )
  }
}
