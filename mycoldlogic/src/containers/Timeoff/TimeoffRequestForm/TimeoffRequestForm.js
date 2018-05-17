import React from 'react';
import './TimeoffRequestForm.css';

const TimeoffRequestForm = ( props ) => {
  return (
    <form className='TimeoffRequestForm'>
      <div className='pickdate'>
        <label htmlFor='fromDate'>From</label>
        <input type='date' name='fromDate' />
        <label htmlFor='toDate'>To</label>
        <input type='date' name='toDate' />
      </div>
      <div>
        <label htmlFor='reason'>Reason</label>
        <select name='reason'>
          <option value='option 1'>Vacation</option>
          <option value='option 2'>Unpaid Vacation</option>
          <option value='option 3'>Appointment</option>
          <option value='option 4'>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor='reasonDetail'>More Detail:</label>
        <textarea rows='4' name='reasonDetail' onChange={props.updateReason} placeholder='Please give more details here'>{props.reasonDetail}</textarea>
      </div>
      <button className="mainBtn" onClick={props.submitTimeoffRequest}>Submit Time off</button>
    </form>
  );
};

export default TimeoffRequestForm;
