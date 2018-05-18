import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserMenu.css';

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
        <li><Link to='/' onClick={this.toggleMenu}>Dashboard</Link></li>
        <li><Link to='/my-schedule' onClick={this.toggleMenu}>My Schedule</Link></li>
        <li><Link to='/timeoff' onClick={this.toggleMenu}>Request Timeoff</Link></li>
        <li>
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
