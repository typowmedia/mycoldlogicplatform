import React from 'react';
import './Header.css';
import Logo from '../Assets/coldlogic_logo.svg';

const Header = props => {
  let coldLogic = <h2>{props.message}</h2>;
  if(props.isLoggedOn){
    coldLogic = <img src={Logo} alt="Cold Logic"></img>;
  }
  return(
    <div className="Header">
      {coldLogic}
    </div>

  );
}

export default Header;
