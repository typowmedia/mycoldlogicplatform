import React from 'react';
import './TimeoffRequestForm.css';

const TimeoffRequestForm = ( props ) => {
  return (
    <form className='TimeoffRequestForm'>
      <div>
        <label htmlFor='fromDate'>From</label>
        <input type='date' name='fromDate' />
        <label htmlFor='toDate'>To</label>
        <input type='date' name='toDate' />
      </div>
      <div>
        <label htmlFor='reason'>Reason</label>
        <select name='reason'>
          <option>Vacation</option>
          <option>Unpaid Vacation</option>
          <option>Appointment</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor='reasonDetail'>Please give more detail below</label>
        <textarea rows='4' name='reasonDetail' onChange={props.updateReason}>{props.reasonDetail}</textarea>
      </div>
      <button onClick={props.submitTimeoffRequest}>Submit Time off</button>
    </form>
  );
};

export default TimeoffRequestForm;
