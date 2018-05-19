import React from 'react';
import Icon from '../Icon/Icon';
import './Subtitle.css';

const Subtitle = ( props ) => {
  return (
    <div className='Subtitle'>
      <Icon size={props.height} icon={props.icon} color='#073B57'/>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Subtitle;
