import React from 'react';
import './RequestSuccess.css';
import BackToDashboard from '../../UI/BackToDashboard/BackToDashboard'

const RequestSuccess = ( props ) => {
  return (
    <div className='RequestSuccess'>
      <p>
        {props.successMessage}
      </p>
      <div>
        <button onClick={props.clicked} className='anotherRequestBtn'>Submit new request</button>
        <BackToDashboard />
      </div>
    </div>
  );
};

export default RequestSuccess;
