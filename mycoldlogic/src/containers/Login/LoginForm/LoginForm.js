import React, { Component } from 'react';
import './LoginForm.css';
import Logo from '../../../assets/coldlogic_logo.svg';

class LoginForm extends Component {
  render(){
    return(
      <div className='LoginForm'>
        <img src={Logo} alt="Cold Logic"></img>
        <form>
          <input type='text' placeholder='Input your card number' ></input>
          <input type='password' placeholder='Input your unique password' ></input>
        </form>
        <div>
          <button className='mainBtn' onClick={this.props.togglePasswordRequest}>Request a password</button>
          <button className='mainBtn' onClick={this.props.authenticateUser}>Login</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
