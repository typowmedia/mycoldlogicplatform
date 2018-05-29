import React from 'react';
import './ErrorMessage.css'

const ErrorMessage = ( props ) => {
  return (
    <div className='ErrorMessage'>
      <p>{props.message}</p>
      <button onClick={props.clicked}>X</button>
    </div>
  );
};

export default ErrorMessage;
