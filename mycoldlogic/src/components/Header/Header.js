import React from 'react';
import './Header.css';
import UserMenu from './UserMenu/UserMenu';
import ColdLogicLogo from "../../assets/ColdLogicLogo";

const Header = props => {
  let coldLogic = <h2>Welcome to My ColdLogic</h2>;
  let user;
  if(props.isAuthenticated){
    coldLogic = <ColdLogicLogo color={'#fff'} className="header-logo"/>;
    user = (
    <div className="Header-user">
      Welcome {props.user.name}!
      <button onClick={props.toggleUserMenu}>+</button>
      {props.showMenu ? <UserMenu logout={props.logout}/> : null}
    </div>);
  }
  return(
    <div className="Header">
      {user}
      {coldLogic}
    </div>

  );
};

export default Header;
