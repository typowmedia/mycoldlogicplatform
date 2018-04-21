import React from 'react';
import './Header.css';

const Header = props => {
  return(
    <div className="Header">
      <h2>{props.message}</h2>
    </div>

  );
}

export default Header;
