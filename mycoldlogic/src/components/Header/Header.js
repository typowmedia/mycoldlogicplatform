import React from 'react';
import './Header.css';
import UserMenu from '../Navigation/UserMenu/UserMenu';
import ColdLogicLogo from "../../assets/ColdLogicLogo";
import Wrapper from '../../hoc/Wrapper/Wrapper';

const Header = props => {
  let header = <h2>Welcome to My ColdLogic</h2>;
  if (props.isAuthenticated) {
    header = (
      <Wrapper>
        <div className="Header-user">
        <UserMenu {...props}/>
        <p>
        Welcome {props.user.firstName}!
        </p>
        <div className='Header-manager'></div>
        </div>
        <ColdLogicLogo color={'#fff'} className="header-logo"/>
      </Wrapper>
      )
  }
  return(
    <div className="Header">
      {header}
    </div>

  );
};

export default Header;
