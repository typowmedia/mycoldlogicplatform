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
    const style = {
      position: 'absolute',
      top: '55px',
      width: '200px',
      height: `${!this.state.toggleMenu ? '0px' : 'auto'}`,
      left: '-10px',
      zIndex: '1',
      listStyle: 'none',
      background: '#CCC',
      overflow: 'hidden',
      transition: '2s'
    }
    let flip = {
      transform: "rotate(180deg)",
      transition: ".5s"
    };
    let unflip = {
      transition: ".5s"
    };

    return(
      <div className='UserMenu'>
      <button style={this.state.toggleMenu ? flip : unflip} onClick={this.toggleMenu}><i className="fas fa-bars"></i></button>
      <ul style={style}>
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
