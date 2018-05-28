import React from 'react';
import './ErrorMessage.css'

const ErrorMessage = ( props ) => {
  return (
    <div className='ErrorMessage'>
      {props.message}
      <button onClick={props.clicked}>X</button>
    </div>
  );
};

export default ErrorMessage;
