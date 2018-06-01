import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserMenu.css';
import TimeOffIcon from '../../../assets/TimeOffIcon';
import DashboardIcon from '../../../assets/DashboardIcon';
import ScheduleIcon from '../../../assets/SafeSiteIcon';
import ExitIcon from '../../../assets/ExitIcon';

class UserMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleMenu: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({toggleMenu: !prevState.toggleMenu}));
  };

  render(){
    let flip = {
      transform: "rotate(90deg)",
    };
    let slide = {
      transform: 'scale(1)',
    };
    return(
      <div className='UserMenu'>
        <button style={this.state.toggleMenu ? flip : null} onClick={this.toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <ul style={this.state.toggleMenu ? slide : null}>
          <Link className='UserMenu-drop-link' to='/' onClick={this.toggleMenu}><DashboardIcon color={"#fff"}/>Dashboard</Link>
          <Link className='UserMenu-drop-link' to='/my-schedule' onClick={this.toggleMenu}><ScheduleIcon color={'#FFF'}/>My Schedule</Link>
          <Link className='UserMenu-drop-link' to='/timeoff' onClick={this.toggleMenu}><TimeOffIcon color={'#fff'}/>Request Timeoff</Link>
          <div className='UserMenu-drop-link' onClick={this.props.logUserOut}>
              <button id='logoutBtn'>
                <ExitIcon color={'#fff'} height={'5px'}/>Log out
              </button>
          </div>
        </ul>
      </div>
    )
  }
}

export default UserMenu;
