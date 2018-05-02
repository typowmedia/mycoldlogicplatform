import React, { Component } from 'react';
import Subtitle from '../../../components/Subtitle/Subtitle';
import './RequestPassword.css';

class RequestPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestSent: false
    };
  }

  // TODO: ADD functionality for sending a request that once sent gives a success callback to change the state of the component!

  render(){
    let requestTimeOff =
    <form>
      <input type='text' placeholder='Input your card number'></input>
      <button className='mainBtn'>Get My password</button>
    </form>;

    if(this.state.requestSent){
      requestTimeOff =
      <div>
        <p>Thank you for using your ColdLogic employee portal.</p>
        <p>Your manager will get in contact with a password soon!</p>
      </div>
    }
    return(
      <div className='RequestPassword'>
        <Subtitle height='70px' icon='request-password' title='Request a Password' />
        {requestTimeOff}
      </div>
    );
  }
}

export default RequestPassword;
