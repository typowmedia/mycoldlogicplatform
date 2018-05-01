import React from 'react';
import './RequestSuccess.css';
import { Link } from 'react-router-dom';

const RequestSuccess = ( props ) => {
  return (
    <div className='RequestSuccess'>
      <p>
        {props.successMessage}
      </p>
      <div>
        <button onClick={props.clicked}>Submit another request</button>
        <Link to='/'><button className='mainBtn'>Back to Dashboard</button></Link>
      </div>
    </div>
  );
};

export default RequestSuccess;
