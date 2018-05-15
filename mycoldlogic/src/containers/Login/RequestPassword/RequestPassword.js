import React from 'react';
import Subtitle from '../../../components/Subtitle/Subtitle';
import './RequestPassword.css';

const RequestPassword = props => {
    return(
      <div className='RequestPassword'>
        <Subtitle height='70px' icon='request-password' title='Request a Password' />
        {
          props.requestSent
          ? (
              <div>
                <p>Thank you for using your ColdLogic employee portal.</p>
                <p>Your manager will get in contact with a password soon!</p>
              </div>
            )
          : (
              <form>

                <input
                  type='text'
                  placeholder='Input your card number'
                  onChange={props.changeUsername}
                  value={props.username}
                />

                <button className='mainBtn' onClick={props.clicked}>
                  Get My password
                </button>

              </form>
            )
        }
      </div>
    );
}

export default RequestPassword;
