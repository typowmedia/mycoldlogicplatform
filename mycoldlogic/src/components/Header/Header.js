import React from 'react';
import './Header.css';
import UserMenu from '../Navigation/UserMenu/UserMenu';
import ColdLogicLogo from "../../assets/ColdLogicLogo";
import Wrapper from '../../hoc/Wrapper/Wrapper';
import { NavLink } from 'react-router-dom';

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
        <NavLink to='/' style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} activeStyle={{ backgroundColor: 'transparent' }}><ColdLogicLogo color={'#fff'}/></NavLink>
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
