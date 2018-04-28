import React from 'react';
import './Announcement.css';

const Announcement = ( props ) => {
  let content = (
    <p className='Announcement-message Announcement-padding-margin'>
      {props.message}
    </p>);
    if(!props.message){
      content = (
        <div className='Announcement-event Announcement-padding-margin'>
          <div className='Announcement-event-date'>{props.eventDate}</div>
          <div className='Announcement-message'>{props.event}</div>
        </div>
      );
    }
  return (
    <div className='Announcement'>
      <button className='Announcement-btn'>x</button>
      <p className='Announcement-padding-margin'>{props.type}</p>
      {content}
    </div>
  );
};

export default Announcement;
