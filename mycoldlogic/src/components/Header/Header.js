import React from 'react';
import './Header.css';
import UserMenu from './UserMenu/UserMenu';
import ColdLogicLogo from "../../assets/ColdLogicLogo";

const Header = props => {
  return(
    <div className="Header">
        {
          !props.isAuthenticated
          ? (
            <h2>Welcome to My ColdLogic</h2>
          )
          : (
            <div className="Header-user">
            <UserMenu {...props}/>
            <p>
            Welcome {props.user.firstName}!
            </p>
            <div className='Header-manager'></div>
            </div>
          )
        }
        {
          props.isAuthenticated ? <ColdLogicLogo color={'#fff'} className="header-logo"/> : null
        }
    </div>

  );
};

export default Header;
