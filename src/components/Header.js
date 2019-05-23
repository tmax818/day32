import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Header</h1>
    <NavLink exact to="/" activeClassName="is-active">
      Home
    </NavLink>
    <NavLink to="/about" activeClassName="is-active">
      About
    </NavLink>
    <NavLink to="/noroute" activeClassName="is-active">
      404
    </NavLink>
  </header>
);

export default Header;
