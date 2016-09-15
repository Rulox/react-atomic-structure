import React from 'react'
import Link from '../../../components/atoms/Link/Link.js'

export default class Nav extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <nav className="o__nav">
        <ul>
          <li><Link href="/" text="Home" /></li>
          <li><Link href="/about" text="About" /></li>
          <li><Link href="/another-page" text="Another Page" /></li>
        </ul>
      </nav>
    )
  }
}
