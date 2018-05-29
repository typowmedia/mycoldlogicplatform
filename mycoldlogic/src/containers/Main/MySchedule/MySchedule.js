import React, { Component } from 'react';
import Subtitle from '../../../components/UI/Subtitle/Subtitle';
import BackToDashboard from '../../../components/UI/BackToDashboard/BackToDashboard';

import './MySchedule.css';

class MySchedule extends Component {
  render(){
    return(
      <div className='MySchedule'>
        <Subtitle icon='my-schedule' height='70px' title='My Schedule'/>
        <BackToDashboard />
      </div>
    );
  }
}

export default MySchedule;
