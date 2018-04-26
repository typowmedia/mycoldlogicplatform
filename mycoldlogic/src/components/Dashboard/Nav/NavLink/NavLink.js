import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ( props ) => {
  const route = props.route;
  return (
    <button><Link to={route}/>{props.route}</button>
  );
};

export default NavLink;
