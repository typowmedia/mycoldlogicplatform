import React, { Component } from 'react';
import './OpenPosition.css';
import Subtitle from '../../components/Subtitle/Subtitle';
import BackToDashboard from '../../components/BackToDashboard/BackToDashboard';

class OpenPosition extends Component {
  render(){
    return(
      <div className='OpenPosition'>
        <Subtitle icon='open-positions' title='Bid for open positions' height='70px'/>
        <BackToDashboard />
      </div>
    );
  }
}

export default OpenPosition;
