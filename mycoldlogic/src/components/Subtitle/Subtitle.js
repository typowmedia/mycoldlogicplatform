import React from 'react';
import Icon from '../Icon/Icon';
import './Subtitle.css';

const Subtitle = ( props ) => {
  return (
    <div className='Subtitle'>
      <Icon height={props.height} icon={props.icon}/>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Subtitle;
