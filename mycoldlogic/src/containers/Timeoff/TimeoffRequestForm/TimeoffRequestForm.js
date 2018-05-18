import React from 'react';
import './TimeoffRequestForm.css';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

const TimeoffRequestForm = ( props ) => {
  return (
    <div>
      {props.errorMessage ? <ErrorMessage message={props.errorMessage.message} clicked={props.closeError}/> : null}
      <form className='TimeoffRequestForm'>
        <div className='pickdate'>
          <label htmlFor='fromDate'>From</label>
          <input
            onChange={props.fromDate}
            type='date'
            name='fromDate'
            style={props.errorMessage.type === 'fromDate' ? {border: '1px solid red'} : null}
            />
          <label htmlFor='toDate'>To</label>
          <input
            onChange={props.toDate}
            type='date'
            name='toDate'
            style={props.errorMessage.type === 'toDate' ? {border: '1px solid red'} : null}
            />
        </div>
        <div className='pickreason'>
          <label htmlFor='reason'>Reason</label>
          <select
            style={props.errorMessage.type === 'reason' ? {border: '1px solid red'} : null}
            onChange={props.updateReason}
            name='reason'>
            <option value=''>Select a Reason</option>
            <option value='Vacation'>Vacation</option>
            <option value='Unpaid Vacation'>Unpaid Vacation</option>
            <option value='Appointment'>Appointment</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <div className="reasontextarea">
          <label htmlFor='reasonDetail'>More Detail:</label>
          <textarea
            rows='4'
            name='reasonDetail'
            onChange={props.updateMessage}
            placeholder='Please give more details here'
            value={props.message}
            style={props.errorMessage.type === 'message' ? {border: '1px solid red'} : null}
            />
        </div>
        <button className="mainBtn" onClick={props.submitTimeoffRequest}>Submit Time off</button>
      </form>
    </div>
  );
};

export default TimeoffRequestForm;
