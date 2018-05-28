import React, { Component } from 'react';
import './OpenPosition.css';
import Subtitle from '../../../components/UI/Subtitle/Subtitle';
import BackToDashboard from '../../../components/UI/BackToDashboard/BackToDashboard';

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
