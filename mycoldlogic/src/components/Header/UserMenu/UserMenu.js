import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserMenu.css';
import TimeOffIcon from '../../../assets/TimeOffIcon';
import DashboardIcon from '../../../assets/DashboardIcon';
import ScheduleIcon from '../../../assets/ScheduleIcon';
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
      <button style={this.state.toggleMenu ? flip : null} onClick={this.toggleMenu}><i className="fas fa-bars"></i></button>
      <ul style={this.state.toggleMenu ? slide : null}>
        <li><DashboardIcon color="#ffffff"/><Link to='/' onClick={this.toggleMenu}>Dashboard</Link></li>
        <li><ScheduleIcon color="#ffffff"/><Link to='/my-schedule' onClick={this.toggleMenu}>My Schedule</Link></li>
        <li><TimeOffIcon color={'#fff'}/><Link to='/timeoff' onClick={this.toggleMenu}>Request Timeoff</Link></li>
        <li><ExitIcon color={'#fff'}/>
        <button id='logoutBtn' onClick={this.props.logUserOut}>
        LogOut
        </button>
        </li>
      </ul>
      </div>
    )
  }
}

export default UserMenu;
