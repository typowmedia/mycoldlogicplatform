import React from 'react';
import NavLink from './NavLink/NavLink';

const Nav = ( props ) => {
    return props.navLinks.map((link, index) => {
      return <NavLink key={index} route={link} />})
};

export default Nav;
