import React from 'react';
import { Link } from 'react-router-dom';

require('./_style.scss');

const Nav = () =>
  (
    <nav className="o__nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );

export default Nav;
