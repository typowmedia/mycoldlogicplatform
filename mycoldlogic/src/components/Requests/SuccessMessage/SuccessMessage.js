import React from 'react';
import './SuccessMessage.css'

const SuccessMessage = ( props ) => {
  return (
    <div className='SuccessMessage'>
      {props.message}
      <button onClick={props.clicked}>X</button>
    </div>
  );
};

export default SuccessMessage;
