import React from 'react';
import './Announcements.css';
import Announcement from './Announcement/Announcement';

const Announcements = ( props ) => {
  return (
    <div className='Announcements'>
      <Announcement
        type='Important Announcement 1'
        message='This is an important Announcement!'
        />
      <Announcement
        type='Upcoming Events'
        eventDate='DEC 01'
        event='Christmas BBQ Grab your hotdog!'
        />
    </div>
  );
};

export default Announcements;
