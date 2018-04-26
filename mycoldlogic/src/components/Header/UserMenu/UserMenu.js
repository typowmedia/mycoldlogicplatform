import React from 'react';

const UserMenu = props => {
  const style={
    position: 'absolute',
    top: '40px'
  }
  return(
    <div style={style}>
      <ul>
        <li></li>
        <li></li>
        <li><button onClick={props.logout}>LogOut</button></li>
      </ul>
    </div>
  )
}

export default UserMenu;
