import React, { Component } from 'react';
import TimeoffRequestForm from './TimeoffRequestForm/TimeoffRequestForm';
import Subtitle from '../Subtitle/Subtitle';
import './Timeoff.css';

class Timeoff extends Component {
  render(){
    return(
      <div className='Timeoff'>
        <Subtitle icon={this.props.navLinks[0]} title='Time Off Request' />
        <TimeoffRequestForm />
      </div>
    );
  }
}

export default Timeoff;
