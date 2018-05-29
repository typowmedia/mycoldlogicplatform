import React from 'react';
import './SuccessMessage.css'

const SuccessMessage = ( props ) => {
  return (
    <div className='SuccessMessage'>
      <p>{props.message}</p>
      <button onClick={props.clicked}>X</button>
    </div>
  );
};

export default SuccessMessage;
