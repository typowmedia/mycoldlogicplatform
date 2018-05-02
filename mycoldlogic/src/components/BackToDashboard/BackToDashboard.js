import React from 'react';
import { Link } from 'react-router-dom';

const BackToDashboard = ( props ) => {
  return (
    <Link to='/'><button className='mainBtn'>Back To Dashboard</button></Link>
  );
};

export default BackToDashboard;
