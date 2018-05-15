import React from 'react';
import './LoginForm.css';
import Logo from '../../../assets/ColdLogicLogo';

const LoginForm = props => {
    return(
      <div className='LoginForm'>
        <Logo color="#0D3C55" alt="ColdLogic"/>
        <form>

          <input
            type='text'
            placeholder='Input your card number'
            onChange={props.changeUsername}
            value={props.username}
           />

          <input
            type='password'
            placeholder='Input your unique password'
            onChange={props.changePassword}
          />

        </form>
        <div>
          <button className='mainBtn' onClick={props.togglePasswordRequest}>Request Password</button>
          <button className='mainBtn' onClick={props.authenticateUser}>Login</button>
        </div>
      </div>
    );
}

export default LoginForm;
