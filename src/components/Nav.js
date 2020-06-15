import React from 'react';
import NavLink from './NavLink';

const Component = () => (
  <nav id="page-nav">
    <NavLink className="nav-link disabled" text="books" />
    <NavLink className="nav-link disabled" text="categories" />
  </nav>
);

export default Component;
