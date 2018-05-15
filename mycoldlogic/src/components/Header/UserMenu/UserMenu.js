import React from 'react';
import { Link } from 'react-router-dom';

const UserMenu = props => {
  return(
    <div>
      <ul>
        <li><Link to='/'>Dashboard</Link></li>
        <li><Link to='/my-schedule'>My Schedule</Link></li>
        <li><Link to='/timeoff'>Request Timeoff</Link></li>
        <li><button onClick={props.logout}>LogOut</button></li>
      </ul>
    </div>
  )
}

export default UserMenu;
