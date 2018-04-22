import React from 'react';
import './Header.css';
import Logo from '../Assets/ColdLogic.jpg';

const Header = props => {
  let coldLogic;
  if(props.isLoggedOn){
    coldLogic = <img src={Logo} alt="Cold Logic"></img>;
  }
  return(
    <div className="Header">
      <h2>{props.isLoggedOn ? null : props.message}</h2>
      {coldLogic}
    </div>

  );
}

export default Header;
