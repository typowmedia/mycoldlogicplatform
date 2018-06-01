import React from 'react';
import './TimeoffRequestForm.css';

const TimeoffRequestForm = ( props ) => {
  let timeoffReasons = props.timeoffReasons.map(reason => {
    return <option key={reason.id} value={reason.name}>{reason.name}</option>;
  });
  return (
    <div className='TimeoffRequest'>
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
            {timeoffReasons}
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
