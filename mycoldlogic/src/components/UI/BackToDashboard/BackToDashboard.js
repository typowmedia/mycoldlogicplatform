import React from 'react';
import { NavLink } from 'react-router-dom';

const BackToDashboard = ( props ) => {
  return (
    <NavLink to='/' activeStyle={{backgroundColor:'transparent'}}><button className='mainBtn'>Back To Dashboard</button></NavLink>
  );
};

export default BackToDashboard;
