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
      height: 'auto',
      left: '-10px',
      zIndex: '1',
      listStyle: 'none',
      background: '#CCC',
      overflow: 'hidden',
      transition: '2s'
    }
    this.state.toggleMenu ? style.height = '0px' : null;
    return(
      <div className='UserMenu'>
      <button onClick={this.toggleMenu}><i className="fas fa-bars"></i></button>
      <ul style={style}>
        <li><Link to='/'>Dashboard</Link></li>
        <li><Link to='/my-schedule'>My Schedule</Link></li>
        <li><Link to='/timeoff'>Request Timeoff</Link></li>
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
