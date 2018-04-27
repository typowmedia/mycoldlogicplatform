import React from 'react';
import './NavLink.css';
import { Link } from 'react-router-dom';

const NavLink = ( props ) => {
  const route = props.route;
  return (
    <button className='NavLink'><Link to={route}/>{props.route}</button>
  );
};

export default NavLink;
