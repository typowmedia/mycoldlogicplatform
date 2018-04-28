import React from 'react';
import './NavLink.css';
import { Link } from 'react-router-dom';
import Icon from '../../Icon/Icon';


const NavLink = ( props ) => {
  const route = props.route;
  return (
    <Link to={props.route} className='NavLink'><Icon icon={props.route} height='50%'/></Link>
  );
};

export default NavLink;
