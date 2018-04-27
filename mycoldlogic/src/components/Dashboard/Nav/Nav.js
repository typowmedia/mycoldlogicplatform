import React from 'react';
import './Nav.css';
import NavLink from './NavLink/NavLink';

const Nav = ( props ) => {
  const nav = props.navLinks.map((link, index) => {
    return <NavLink key={index} route={link} />});

    return(
      <div className='Nav'>
        {nav}
      </div>
    );
};

export default Nav;
