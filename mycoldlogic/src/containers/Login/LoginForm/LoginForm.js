import React, { Component } from 'react';
import './LoginForm.css';
import Logo from '../../../assets/ColdLogicLogo';

class LoginForm extends Component {
  render(){
    return(
      <div className='LoginForm'>
        <Logo color="#0D3C55" alt="ColdLogic"/>
        <form>
          <input type='text' placeholder='Input your card number' ></input>
          <input type='password' placeholder='Input your unique password' ></input>
        </form>
        <div>
          <button className='mainBtn' onClick={this.props.togglePasswordRequest}>Request Password</button>
          <button className='mainBtn' onClick={this.props.authenticateUser}>Login</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
