import React from 'react';
import Subtitle from '../UI/Subtitle/Subtitle';
import './Events.css';

const eventList = [
  {
    id: 1,
    date: 'Dec 01',
    event: 'Christmas BBQ'
  },
  {
    id: 2,
    date: 'Dec 22',
    event: 'Hiring Fair'
  },
  {
    id: 3,
    date: 'Jan 06',
    event: 'Some Great Event'
  },
  {
    id: 4,
    date: 'Feb 24',
    event: 'Family Day Company Get Together'
  }
]

const Events = ( props ) => {
  const events = eventList.map(event => {
    return (
      <div key={event.id} className='Events'>
        <div className='Events-date'>{event.date}</div>
        <div className='Events-event'>{event.event}</div>
      </div>
    )
  })
  return (
    <div className={props.className}>
      <Subtitle icon='safe-site-report' title='Upcoming Events'/>

      {events}
    </div>
  );
};

export default Events;
