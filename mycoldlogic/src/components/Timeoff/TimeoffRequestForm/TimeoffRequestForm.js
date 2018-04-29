import React from 'react';
import './TimeoffRequestForm.css';

const TimeoffRequestForm = ( props ) => {
  return (
    <form className='TimeoffRequestForm'>
      <div>
        <label for='fromDate'>From</label>
        <input type='date' name='fromDate' />
        <label for='toDate'>To</label>
        <input type='date' name='toDate' />
      </div>
      <div>
        <label for='reason'>Reason</label>
        <select name='reason'>
          <option>Vacation</option>
          <option>Unpaid Vacation</option>
          <option>Appointment</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label for='reasonDetail'>Please give more detail below</label>
        <textarea rows='4' name='reasonDetail'></textarea>
      </div>
      <button>Submit Time off</button>
    </form>
  );
};

export default TimeoffRequestForm;
