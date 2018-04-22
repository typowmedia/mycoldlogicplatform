import React, { Component } from 'react';
import Image from './RequestPass.png';
import './RequestPassword.css';

class RequestPassword extends Component {
  render(){
    return(
      <div className='RequestPassword'>
        <div>
          <img src={Image} alt=""></img>
          <h2><span style={{textDecoration: 'underline'}}>Request a Passwo</span>rd</h2>
        </div>
        <form>
          <input type='text' placeholder='Input your card number'></input>
          <button>Get My password</button>
        </form>
      </div>
    );
  }
}

export default RequestPassword;
